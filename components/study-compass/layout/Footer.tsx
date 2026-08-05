"use client";

import { ShieldCheck } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t bg-slate-50 px-4 py-2">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck size={14} />
                <span>
                    Your information is securely shared only with Globalizers counsellors.
                </span>
            </div>
        </footer>
    );
}