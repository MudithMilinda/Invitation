"use client";

import { useEffect, useState } from "react";

type TimeRemaining = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const weddingDate = new Date("2026-11-25T17:00:00+05:30").getTime();

function getTimeRemaining(): TimeRemaining {
    const difference = Math.max(0, weddingDate - Date.now());
    const totalSeconds = Math.floor(difference / 1000);

    return {
        days: Math.floor(totalSeconds / 86_400),
        hours: Math.floor((totalSeconds % 86_400) / 3_600),
        minutes: Math.floor((totalSeconds % 3_600) / 60),
        seconds: totalSeconds % 60,
    };
}

export default function Countdown() {
    const [remaining, setRemaining] = useState<TimeRemaining | null>(null);

    useEffect(() => {
        const update = () => setRemaining(getTimeRemaining());
        update();
        const interval = window.setInterval(update, 1000);
        return () => window.clearInterval(interval);
    }, []);

    const units: [keyof TimeRemaining, string][] = [
        ["days", "Days"],
        ["hours", "Hours"],
        ["minutes", "Min"],
        ["seconds", "Sec"],
    ];

    return (
        <section className="relative z-10 w-full border-x border-[#a8782a] bg-[#302016]/95 px-4 py-16 text-center sm:px-8 sm:py-20" aria-labelledby="countdown-title">
            <div className="mx-auto max-w-[720px]">
                <div aria-hidden="true" className="flex items-center justify-center gap-3 text-[#bc882f]">
                    <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#bc882f]" />
                    <span className="text-xs">◇</span>
                    <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#bc882f]" />
                </div>
                <h2 id="countdown-title" className="mb-9 mt-7 font-[family-name:var(--invitation-sans)] text-[9px] font-normal tracking-[0.3em] text-[#c49443] uppercase sm:text-[10px]">
                    Counting down to the wedding
                </h2>
                <div className="grid grid-cols-4 gap-2 sm:gap-4" aria-label="Time remaining until the wedding">
                    {units.map(([unit, label]) => (
                        <div className="relative rounded-xl border border-[#8d6428] bg-[#392719] px-1 py-5 sm:py-7" key={unit}>
                            <span aria-hidden="true" className="absolute left-2 top-2 h-1 w-1 rotate-45 bg-[#bd8a31]" />
                            <strong className="block font-[family-name:var(--editorial)] text-[clamp(23px,6vw,38px)] leading-none font-normal italic tabular-nums text-[#f8f1e6]">
                                {remaining ? String(remaining[unit]).padStart(2, "0") : "--"}
                            </strong>
                            <span className="mt-4 block font-[family-name:var(--invitation-sans)] text-[8px] tracking-[0.16em] text-[#c49443] uppercase">{label}</span>
                            <span aria-hidden="true" className="absolute bottom-2 right-2 h-1 w-1 rotate-45 bg-[#bd8a31]" />
                        </div>
                    ))}
                </div>
                <div aria-hidden="true" className="mt-9 flex items-center justify-center gap-3 text-[#a9792e]">
                    <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#a9792e]" />
                    <span className="text-2xl">❧</span>
                    <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#a9792e]" />
                </div>
            </div>
        </section>
    );
}
