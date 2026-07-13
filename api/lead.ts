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
// Sender for the auto-confirmation the lead receives (must also be a
// verified-domain address). Replies go to the real sales inbox (TO).
const CONFIRM_FROM = process.env.CONFIRM_FROM || "Ezzi Solutions AI <sales@updates.ezzisolutions.ai>";
const LOGO_URL = "https://ezzisolutions.ai/logo-full-light.png";
const SITE_URL = "https://ezzisolutions.ai";

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

// Branded auto-confirmation the visitor receives right after submitting.
function buildConfirmation(formType: string, name: string): { subject: string; html: string } {
  const firstName = name.trim().split(/\s+/)[0] || "";
  const greeting = firstName ? `, ${escapeHtml(firstName)}` : "";
  const isNewsletter = formType === "newsletter";

  const subject = isNewsletter
    ? "You're subscribed — Ezzi Solutions AI"
    : "We've got your request — Ezzi Solutions AI";

  const eyebrow = isNewsletter ? "Subscription confirmed" : "Request received";
  const heading = isNewsletter
    ? `You're on the list${greeting}.`
    : `Thanks${greeting} — we've got your request.`;
  const intro = isNewsletter
    ? "Thanks for subscribing to Ezzi Solutions AI. You'll be among the first to get our essays on shipping AI-powered software."
    : "Thank you for reaching out to Ezzi Solutions AI. Your request has landed with our team, and a senior engineer — not a sales rep — will personally review it.";
  const highlight = isNewsletter
    ? "📬 We'll send the very first issue the moment it ships."
    : "⏱️ We'll reach out within 24 hours.";
  const outro = isNewsletter
    ? "In the meantime, feel free to explore our recent work. Just reply to this email if you ever want to reach us."
    : "In the meantime, feel free to explore our recent work — or simply reply to this email if you'd like to add anything.";

  const html = `
  <div style="background:#f1f5f9;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 10px 40px rgba(15,23,42,0.08);">
      <div style="padding:32px 40px 24px;text-align:center;border-bottom:1px solid #eef2f7;">
        <img src="${LOGO_URL}" alt="Ezzi Solutions AI" width="220" style="max-width:220px;width:220px;height:auto;display:inline-block;" />
      </div>
      <div style="height:4px;background:linear-gradient(90deg,#1e3a8a,#2563eb,#60a5fa);"></div>
      <div style="padding:36px 40px;">
        <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#2563eb;font-weight:700;">${eyebrow}</div>
        <h1 style="margin:12px 0 0;font-size:23px;line-height:1.3;color:#0f172a;font-weight:700;">${heading}</h1>
        <p style="margin:20px 0 0;font-size:15px;line-height:1.7;color:#475569;">${intro}</p>
        <div style="margin:24px 0;padding:16px 20px;background:#f8fafc;border-left:3px solid #2563eb;border-radius:8px;">
          <p style="margin:0;font-size:15px;line-height:1.5;color:#0f172a;font-weight:600;">${highlight}</p>
        </div>
        <p style="margin:0;font-size:15px;line-height:1.7;color:#475569;">${outro}</p>
        <div style="margin:28px 0 4px;">
          <a href="${SITE_URL}/case-studies" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 26px;border-radius:999px;">See our work &rarr;</a>
        </div>
      </div>
      <div style="padding:24px 40px;background:#0f172a;">
        <div style="color:#f1f5f9;font-weight:600;font-size:13px;">Ezzi Solutions AI</div>
        <div style="color:#94a3b8;font-size:12px;margin-top:2px;">A Henagon Company</div>
        <div style="margin-top:10px;font-size:12px;">
          <a href="mailto:sales@ezzisolutions.ai" style="color:#60a5fa;text-decoration:none;">sales@ezzisolutions.ai</a>
          <span style="color:#475569;">&nbsp;·&nbsp;</span>
          <a href="${SITE_URL}" style="color:#60a5fa;text-decoration:none;">ezzisolutions.ai</a>
        </div>
      </div>
    </div>
    <p style="max-width:560px;margin:16px auto 0;text-align:center;font-size:11px;line-height:1.6;color:#94a3b8;">
      You're receiving this because you submitted a form at ezzisolutions.ai.
    </p>
  </div>`;

  return { subject, html };
}

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

  // Auto-confirmation to the visitor — non-fatal: the internal lead already
  // sent, so a hiccup here must not fail the request.
  try {
    const confirmation = buildConfirmation(formType, String(data.name || ""));
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONFIRM_FROM,
        to: [email],
        reply_to: TO,
        subject: confirmation.subject,
        html: confirmation.html,
      }),
    });
  } catch (err) {
    console.error("[lead] confirmation email failed", err);
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
