"use client";

import { useState } from "react";

export default function RsvpForm() {
    const [name, setName] = useState("");
    const [attendance, setAttendance] = useState("accept");
    const [guests, setGuests] = useState(1);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    async function submitRsvp(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!name.trim() || status === "sending") return;
        setStatus("sending");
        try {
            const response = await fetch("/api/rsvp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, attendance, guests }),
            });
            if (!response.ok) throw new Error("Could not save response");
            setStatus("success");
        } catch {
            setStatus("error");
        }
    }

    return (
        <section className="relative z-10" aria-labelledby="rsvp-title">
            <div className="bg-[#302016]/95 px-6 py-16 text-[#f8f1e6] sm:py-20">
                <div className="mx-auto max-w-[520px]">
                    <p className="m-0 text-center font-[family-name:var(--invitation-sans)] text-[10px] tracking-[0.3em] text-[#c99438] uppercase">Kindly reply</p>
                    <h2 id="rsvp-title" className="mb-0 mt-5 text-center font-[family-name:var(--editorial)] text-4xl leading-tight font-normal sm:text-5xl">Will You Join Us?</h2>
                    <p className="mx-auto mb-0 mt-4 max-w-md text-center font-[family-name:var(--editorial)] text-lg leading-relaxed text-[#e1d2c0]">It would mean so much to celebrate this special day with you.</p>
                    <div aria-hidden="true" className="my-8 text-center text-[#c99438]">─────　♥　─────</div>
                    <form onSubmit={submitRsvp} className="space-y-5">
                        <div>
                            <label htmlFor="rsvp-name" className="mb-2 block font-[family-name:var(--invitation-sans)] text-[9px] tracking-[0.2em] text-[#c99438] uppercase">Your name</label>
                            <input id="rsvp-name" value={name} onChange={(event) => setName(event.target.value)} required maxLength={120} placeholder="Your full name" className="w-full rounded-xl border border-[#765522] bg-[#413128] px-5 py-4 text-base outline-none placeholder:text-[#aa9b8f] focus:border-[#d5a449]" />
                        </div>
                        <fieldset>
                            <legend className="mb-2 font-[family-name:var(--invitation-sans)] text-[9px] tracking-[0.2em] text-[#c99438] uppercase">Will you attend?</legend>
                            <div className="grid grid-cols-2 gap-3">
                                {[["accept", "Joyfully accept"], ["decline", "Regretfully decline"]].map(([value, label]) => (
                                    <label key={value} className={`cursor-pointer rounded-xl border px-2 py-4 text-center font-[family-name:var(--invitation-sans)] text-[9px] tracking-[0.1em] uppercase ${attendance === value ? "border-[#d5a449] bg-[#69471f]" : "border-[#765522] bg-[#392719]"}`}>
                                        <input type="radio" name="attendance" value={value} checked={attendance === value} onChange={() => setAttendance(value)} className="sr-only" />{label}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                        {attendance === "accept" && <div>
                            <label htmlFor="rsvp-guests" className="mb-2 block font-[family-name:var(--invitation-sans)] text-[9px] tracking-[0.2em] text-[#c99438] uppercase">Number of guests</label>
                            <input id="rsvp-guests" type="number" min="1" max="99" required value={guests} onChange={(event) => setGuests(Number(event.target.value))} className="w-full rounded-xl border border-[#765522] bg-[#413128] px-5 py-4 text-center text-xl outline-none focus:border-[#d5a449]" />
                        </div>}
                        <button type="submit" disabled={status === "sending" || status === "success"} className="w-full rounded-xl bg-[#cf963a] px-6 py-4 font-[family-name:var(--invitation-sans)] text-xs font-medium tracking-[0.15em] text-[#302016] uppercase transition-colors hover:bg-[#e0ad58]">{status === "sending" ? "Sending…" : status === "success" ? "Response received ♥" : "Join ♥"}</button>
                        {status === "success" && <p role="status" className="text-center text-sm text-[#ead7bb]">Thank you for your reply!</p>}
                        {status === "error" && <p role="alert" className="text-center text-sm text-[#ffd5bd]">Could not save your reply. Please try again.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
