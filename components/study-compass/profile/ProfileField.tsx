"use client";

import { CheckCircle2, Circle } from "lucide-react";

interface Props {
    label: string;
    completed: boolean;
}

export default function ProfileField({
    label,
    completed,
}: Props) {
    return (
        <div className="flex items-center gap-3 py-2">
            {completed ? (
                <CheckCircle2
                    size={18}
                    className="text-emerald-500"
                />
            ) : (
                <Circle
                    size={18}
                    className="text-slate-300"
                />
            )}

            <span
                className={`text-sm ${completed
                        ? "text-slate-900"
                        : "text-slate-500"
                    }`}
            >
                {label}
            </span>
        </div>
    );
}