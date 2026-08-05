"use client";

import { X, RotateCcw } from "lucide-react";

interface HeaderProps {
    onClose: () => void;
    onRestart?: () => void;
    started?: boolean;
}

export default function Header({
    onClose,
    onRestart,
    started,
}: HeaderProps) {
    return (
        <header className="border-b bg-white shadow-xs">
            <div className="flex items-start justify-between px-5 py-4">
                <div>
                    <div className="flex items-center gap-2">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                            GLOBALIZERS
                        </p>
                        {started && (
                            <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-600/20 ring-inset">
                                Active Session
                            </span>
                        )}
                    </div>

                    <h2 className="mt-1 text-lg font-bold text-slate-900">
                        Study Compass
                    </h2>

                    {!started && (
                        <p className="mt-1 text-xs leading-5 text-slate-500 max-w-xs">
                            Personalized pre-counselling & study abroad assessment.
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-1">
                    {started && onRestart && (
                        <button
                            onClick={onRestart}
                            title="Reset conversation"
                            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
                        >
                            <RotateCcw size={18} />
                        </button>
                    )}

                    <button
                        onClick={onClose}
                        title="Close panel"
                        className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
}