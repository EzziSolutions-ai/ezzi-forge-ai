/**
 * Sends a lead from any site form to the /api/lead serverless function,
 * which emails it to sales@ezzisolutions.ai (via Resend).
 *
 * Returns true on success. Never throws — callers can show a success state
 * regardless, since we'd rather not make a visitor think their message was
 * lost over a transient network blip.
 */
export type LeadPayload = {
  formType: "contact" | "pricing" | "prototype" | "newsletter";
  email: string;
  name?: string;
  company?: string;
  subject?: string;
  message?: string;
  brief?: string;
  stuck?: string;
  projectType?: string;
  stage?: string;
  timeline?: string;
  budget?: string;
  tool?: string;
  /** Honeypot — leave empty; bots fill it and get silently dropped server-side. */
  website?: string;
};

export async function submitLead(payload: LeadPayload): Promise<boolean> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[lead] submission failed:", err);
    return false;
  }
}
