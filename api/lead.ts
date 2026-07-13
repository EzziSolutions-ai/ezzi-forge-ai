/**
 * Serverless lead handler — runs on Vercel (Node runtime).
 *
 * Every website form (contact, pricing quote, prototype quote, newsletter)
 * POSTs JSON here, and this function emails the lead to sales@ezzisolutions.ai
 * via Resend. If a Slack webhook is configured, it also pings the channel.
 *
 * Required env var (set in Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY   — from https://resend.com (verify the ezzisolutions.ai
 *                      domain there so the "from" address is accepted)
 *
 * Optional env vars:
 *   LEAD_TO          — recipient (default: sales@ezzisolutions.ai)
 *   LEAD_FROM        — sender    (default: "Ezzi Solutions Website
 *                      <leads@ezzisolutions.ai>" — must be a Resend-verified domain)
 *   SLACK_WEBHOOK_URL — optional Slack incoming webhook for a channel ping
 */

// Minimal request/response shapes so we don't need @vercel/node types.
type Req = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
};
type Res = {
  status: (code: number) => Res;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
  end: (body?: string) => void;
};

const TO = process.env.LEAD_TO || "sales@ezzisolutions.ai";
// Must be on a Resend-verified domain. The account's domain is
// updates.ezzisolutions.ai — override with LEAD_FROM if that changes.
const FROM = process.env.LEAD_FROM || "Ezzi Solutions Website <leads@updates.ezzisolutions.ai>";

const escapeHtml = (v: unknown): string =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Human-readable label for each form so sales can triage at a glance.
const FORM_LABELS: Record<string, string> = {
  contact: "Contact form",
  pricing: "Pricing quote request",
  prototype: "Prototype-to-production quote",
  newsletter: "Newsletter signup",
};

export default async function handler(req: Req, res: Res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  let data: Record<string, unknown> = {};
  try {
    data = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as Record<
      string,
      unknown
    > || {};
  } catch {
    res.status(400).json({ ok: false, error: "Invalid JSON" });
    return;
  }

  // Honeypot — bots fill this hidden field. Silently succeed so they don't learn.
  if (typeof data.website === "string" && data.website.trim()) {
    res.status(200).json({ ok: true });
    return;
  }

  const formType = String(data.formType || "contact");
  const formLabel = FORM_LABELS[formType] || "Website lead";
  const email = String(data.email || "").trim();

  if (!email) {
    res.status(400).json({ ok: false, error: "Email is required" });
    return;
  }

  // Fields we know about across all forms; only the present ones get rendered.
  const allRows: Array<[string, unknown]> = [
    ["Name", data.name],
    ["Email", email],
    ["Company", data.company],
    ["Subject", data.subject],
    ["Project type", data.projectType],
    ["Stage", data.stage],
    ["Timeline", data.timeline],
    ["Budget", data.budget],
    ["AI tool tried", data.tool],
    ["Message", data.message ?? data.brief ?? data.stuck],
  ];
  const rows = allRows.filter(
    ([, v]) => v !== undefined && v !== null && String(v).trim() !== "",
  );

  const rowsHtml = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 16px 8px 0;color:#64748b;font-size:13px;font-weight:600;vertical-align:top;white-space:nowrap;">${escapeHtml(
            label,
          )}</td>
          <td style="padding:8px 0;color:#0f172a;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(
            value,
          )}</td>
        </tr>`,
    )
    .join("");

  const html = `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:560px;margin:0 auto;">
    <div style="border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;">
      <div style="background:#0f172a;padding:20px 24px;">
        <div style="color:#93c5fd;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;font-weight:600;">New lead</div>
        <div style="color:#fff;font-size:18px;font-weight:600;margin-top:4px;">${escapeHtml(formLabel)}</div>
      </div>
      <div style="padding:20px 24px;background:#fff;">
        <table style="width:100%;border-collapse:collapse;">${rowsHtml}</table>
      </div>
      <div style="padding:12px 24px;background:#f8fafc;border-top:1px solid #e2e8f0;color:#94a3b8;font-size:12px;">
        Submitted from ezzisolutions.ai · Reply directly to reach the lead.
      </div>
    </div>
  </div>`;

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    // Don't hard-fail the visitor's submission — log for ops and 200 back.
    console.error("[lead] RESEND_API_KEY is not set — email NOT sent. Lead:", { formType, email });
    res.status(200).json({ ok: true, warning: "email-not-configured" });
    return;
  }

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `New lead · ${formLabel}${data.name ? ` — ${String(data.name)}` : ""}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const detail = await resendRes.text();
      console.error("[lead] Resend error", resendRes.status, detail);
      res.status(502).json({ ok: false, error: "Email delivery failed" });
      return;
    }
  } catch (err) {
    console.error("[lead] Resend request threw", err);
    res.status(502).json({ ok: false, error: "Email delivery failed" });
    return;
  }

  // Optional Slack ping — fire-and-forget, never blocks the response.
  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
  if (SLACK_WEBHOOK_URL) {
    try {
      await fetch(SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `🚨 New lead — ${formLabel}${data.name ? ` · ${String(data.name)}` : ""} · ${email}`,
        }),
      });
    } catch (err) {
      console.error("[lead] Slack ping failed", err);
    }
  }

  res.status(200).json({ ok: true });
}
