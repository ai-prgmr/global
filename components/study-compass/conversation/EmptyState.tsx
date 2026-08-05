"use client";

interface Props {
    onStart: () => void;
}

export default function EmptyState({
    onStart,
}: Props) {
    return (
        <div className="flex h-full items-center justify-center px-8">

            <div className="max-w-sm text-center">

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
                    🎓
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                    Welcome to Study Compass
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                    Before one of our counsellors speaks with you,
                    let's understand your study goals.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                    This takes about 3–5 minutes and helps us prepare
                    better recommendations during your consultation.
                </p>

                <button
                    onClick={onStart}
                    className="mt-8 w-full rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                    Start Pre-Counselling
                </button>

            </div>

        </div>
    );
}