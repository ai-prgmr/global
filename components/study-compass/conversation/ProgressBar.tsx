"use client";

interface Props {
    progress?: number;
    leadScore?: number;
}

export default function ProgressBar({
    progress = 0,
    leadScore,
}: Props) {
    return (
        <div className="border-b border-slate-100 bg-white px-5 py-3 shadow-2xs">
            <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Profile Qualification
                </span>

                <div className="flex items-center gap-2">
                    {leadScore !== undefined && leadScore > 0 && (
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full ring-1 ring-emerald-600/20">
                            Lead Score: {leadScore}/100
                        </span>
                    )}
                    <span className="text-xs font-bold text-blue-600">
                        {progress}%
                    </span>
                </div>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-slate-150 bg-slate-100">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 ease-out"
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>
        </div>
    );
}