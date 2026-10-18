"use client";

import { useState } from "react";
import Image from "next/image";
import envelopeCover from "./assets/brown-lace-envelope.png";

export default function InvitationCover() {
    const [isOpening, setIsOpening] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    function openInvitation() {
        if (isOpening) return;

        setIsOpening(true);
        document.getElementById("wedding-hero")?.classList.add("hero-revealing");
        window.setTimeout(() => {
            setIsVisible(false);
        }, 2400);
    }

    if (!isVisible) return null;

    return (
        <button
            type="button"
            onClick={openInvitation}
            aria-label="Open Kelumi and Umesh's wedding invitation"
            aria-controls="wedding-hero"
            aria-expanded={isOpening}
            className={`fixed inset-0 z-[100] flex min-h-[100svh] w-full flex-col items-center justify-center bg-[#eee3d5] px-6 py-8 text-[#604631] transition-opacity delay-[350ms] duration-[1200ms] ease-out ${isOpening ? "pointer-events-none opacity-0" : "opacity-100"}`}
        >
            <span className="mb-3 block font-[family-name:var(--script)] text-[clamp(43px,10vw,65px)] leading-tight">Kelumi &amp; Umesh</span>
            <span className="mb-7 block font-[family-name:var(--editorial)] text-lg italic">Joyfully invite you to their wedding</span>
            <span className="relative block aspect-[1.25] w-[min(100%,430px)] rounded-[24px] bg-gradient-to-b from-[#e1d0bb] via-[#f8f1e7] to-[#eee0d0] shadow-[0_10px_30px_rgb(48_32_22_/_18%)] [perspective:1200px]">
                <Image src={envelopeCover} alt="" fill priority sizes="(max-width: 500px) calc(100vw - 40px), 460px" className="rounded-[24px] object-cover [clip-path:polygon(0_27%,50%_69%,100%_27%,100%_100%,0_100%)]" />
                <span aria-hidden="true" className={`absolute inset-0 origin-top [transform-style:preserve-3d] transition-transform duration-[1600ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${isOpening ? "[transform:perspective(1200px)_rotateX(165deg)]" : "[transform:perspective(1200px)_rotateX(0deg)]"}`}>
                    <span className="absolute inset-0 overflow-hidden rounded-t-[24px] [backface-visibility:hidden] [clip-path:polygon(0_0,100%_0,100%_27%,50%_69%,0_27%)]">
                        <Image src={envelopeCover} alt="" fill sizes="(max-width: 500px) calc(100vw - 40px), 460px" className="object-cover" />
                        <span className={`absolute inset-0 bg-[#302016] transition-opacity duration-700 ${isOpening ? "opacity-25" : "opacity-0"}`} />
                    </span>
                    <span className="absolute inset-0 rounded-t-[24px] bg-gradient-to-b from-[#cbb49a] via-[#e9dccb] to-[#faf5ed] [backface-visibility:hidden] [transform:rotateX(180deg)] [clip-path:polygon(0_0,100%_0,100%_27%,50%_69%,0_27%)]" />
                </span>
            </span>
            <span className="mt-6 block font-[family-name:var(--editorial)] text-sm tracking-[0.12em] uppercase">Tap to open</span>
        </button>
    );
}
