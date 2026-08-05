"use client";

interface Props {
    options: string[];
    disabled?: boolean;
    onSelect?: (value: string) => void;
}

export default function QuickReplies({
    options,
    disabled = false,
    onSelect,
}: Props) {
    if (!options || options.length === 0) return null;

    return (
        <div className="border-t border-slate-100 bg-slate-50/80 px-4 py-3 animate-in fade-in duration-200">
            <p className="mb-2 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                Suggested Options
            </p>
            <div className="flex flex-wrap gap-2">
                {options.map((option) => (
                    <button
                        key={option}
                        disabled={disabled}
                        onClick={() => onSelect?.(option)}
                        className="
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            px-3.5
                            py-1.5
                            text-xs
                            font-medium
                            text-slate-700
                            shadow-xs
                            transition-all
                            hover:border-blue-500
                            hover:bg-blue-50
                            hover:text-blue-600
                            hover:scale-[1.02]
                            active:scale-[0.98]
                            disabled:opacity-50
                            disabled:pointer-events-none
                        "
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}