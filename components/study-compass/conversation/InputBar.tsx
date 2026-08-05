"use client";

import { KeyboardEvent, useState } from "react";
import { SendHorizontal } from "lucide-react";

interface Props {
    disabled?: boolean;
    allowFreeText?: boolean;
    placeholder?: string;
    onSend?: (message: string) => Promise<void> | void;
}

export default function InputBar({
    disabled = false,
    allowFreeText = true,
    placeholder,
    onSend,
}: Props) {
    const [value, setValue] = useState("");

    async function submit() {
        const message = value.trim();
        if (!message || disabled || !allowFreeText) return;

        await onSend?.(message);
        setValue("");
    }

    async function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key !== "Enter") return;
        event.preventDefault();
        await submit();
    }

    const effectivePlaceholder = !allowFreeText
        ? "Please select an option above..."
        : placeholder ?? "Type your answer or question...";

    return (
        <div className="border-t bg-white p-3.5">
            <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
                <input
                    value={value}
                    disabled={disabled || !allowFreeText}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={effectivePlaceholder}
                    className="flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                    onClick={submit}
                    disabled={disabled || !allowFreeText || !value.trim()}
                    className="rounded-lg bg-blue-600 p-2 text-white transition hover:bg-blue-700 active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
                >
                    <SendHorizontal size={17} />
                </button>
            </div>
        </div>
    );
}