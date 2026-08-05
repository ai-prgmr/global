import { StudentProfile } from "../types";

export interface LeadPayload {
    profile: StudentProfile;
    summary: string;
    leadScore: number;
    counsellorNotes: string[];
    createdAt: string;
    status: "READY_FOR_COUNSELLOR";
    source: "CHAT" | "CONTACT_FORM";
}

export class LeadExporter {
    static export(
        profile: StudentProfile,
        summary: string,
        leadScore: number = 0,
        counsellorNotes: string[] = []
    ): LeadPayload {
        return {
            profile,
            summary,
            leadScore,
            counsellorNotes,
            createdAt: new Date().toISOString(),
            status: "READY_FOR_COUNSELLOR",
            source: "CHAT",
        };
    }

    /**
     * Sends the completed lead payload directly to a Google Sheets Apps Script Webhook
     * or CRM webhook endpoint. Works in static exports without needing a server backend.
     */
    static async sendToWebhook(
        payload: LeadPayload,
        customWebhookUrl?: string
    ): Promise<boolean> {
        const webhookUrl =
            customWebhookUrl ||
            process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL;

        if (!webhookUrl) {
            console.log("ℹ️ [Study Compass Lead Saved Locally]:", payload);
            return true;
        }

        try {
            // Use no-cors mode or standard cors depending on Apps Script / webhook setup
            const res = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            console.log("✅ [Study Compass Lead Sync Success]");
            return res.ok;
        } catch (err) {
            console.warn("⚠️ Webhook sync notice:", err);
            return false;
        }
    }
}