import Image from "next/image";
import Countdown from "./countdown";
import RsvpForm from "./rsvp-form";
import ScrollReveal from "./scroll-reveal";
import InvitationCover from "./invitation-cover";
import heroBackground from "./assets/image copy 8.png";
import locationIllustration from "./assets/location-transparent.png";
import couplePortrait from "./assets/image copy 4.png";

const receptionMapUrl = "https://maps.google.com/?q=Waters+Edge+Battaramulla+Sri+Lanka";
export default function WeddingInvitation() {
    return (
        <main className="relative isolate min-h-screen font-[family-name:var(--editorial)] text-[#594638]">
            <InvitationCover />
            <section
                id="wedding-hero"
                className="invitation-background relative z-10 flex min-h-[100svh] justify-center lg:px-8 lg:py-8"
                aria-labelledby="couple-names"
            >
                <article className="hero-reveal-content relative isolate min-h-[100svh] w-full overflow-hidden bg-[#fafafa] lg:min-h-[min(900px,calc(100svh-64px))] lg:max-w-[560px] lg:rounded-2xl lg:shadow-[0_20px_60px_rgb(73_49_29_/_15%)]">
                    <Image
                        src={heroBackground}
                        alt=""
                        fill
                        priority
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="object-cover [filter:sepia(0.2)_saturate(0.85)]"
                    />
                    <Image
                        src={couplePortrait}
                        alt="Illustration of Kelumi and Umesh in wedding attire"
                        className="absolute left-1/2 top-[22%] h-[25%] w-auto max-w-[70%] -translate-x-1/2 object-contain mix-blend-multiply [filter:sepia(0.12)_saturate(0.9)]"
                        sizes="(max-width: 640px) 70vw, 300px"
                    />
                    <div className="absolute inset-x-0 top-[46%] flex items-center justify-center text-[#604b3a]">
                        <span aria-hidden="true" className="-mr-[0.13em] font-[family-name:var(--editorial)] text-[clamp(115px,33vw,170px)] leading-none text-[#d5c2aa]">&amp;</span>
                        <h1 id="couple-names" className="relative m-0 pt-3 font-[family-name:var(--editorial)] text-[clamp(34px,9vw,48px)] leading-[0.9] font-normal tracking-[0.03em] uppercase">
                            <span className="block">Kelumi</span>
                            <span className="block">Umesh</span>
                        </h1>
                    </div>
                    <div className="absolute inset-x-0 top-[66%] flex items-center justify-center gap-5 text-[#604b3a]">
                        <time dateTime="2026-11-25" className="font-[family-name:var(--editorial)] text-lg font-semibold tracking-[0.05em]">25.11.2026</time>
                    </div>
                </article>
            </section>

            <div className="invitation-background">
            <ScrollReveal />
            <section className="relative z-10 overflow-hidden px-6 py-20 text-center text-[#65503e] sm:py-28" aria-labelledby="family-invitation-names">
                <div className="mx-auto max-w-[760px]">
                    <p className="m-0 font-[family-name:var(--editorial)] text-[clamp(25px,6vw,38px)] font-semibold tracking-[0.15em] uppercase">A celebration of love</p>
                    <p className="mx-auto mb-0 mt-7 max-w-[680px] font-[family-name:var(--editorial)] text-[clamp(15px,3.5vw,19px)] leading-[1.7] font-medium tracking-[0.04em] uppercase">
                        Together with our parents<br />
                        Loving daughter of Mr. Saman Chandra Kelum &amp; Mrs. Padma Swarnalatha<br />
                        and<br />
                        Beloved son of Mr. Gamini Wijesinghe &amp; Mrs. Kanthi Jayathunga
                    </p>
                    <p className="mb-0 mt-8 font-[family-name:var(--editorial)] text-xl italic">For the wedding ceremony of</p>
                    <h2 id="family-invitation-names" className="mb-0 mt-5 font-[family-name:var(--script)] text-[clamp(58px,14vw,100px)] leading-[1.1] font-normal text-[#765333]">
                        Kelumi <span className="text-[0.65em]">&amp;</span> Umesh
                    </h2>
                    <p className="mb-0 mt-3 font-[family-name:var(--editorial)] text-sm tracking-[0.05em] uppercase">Captain of Sri Lanka Army</p>
                    <p className="mx-auto mb-0 mt-6 max-w-[600px] font-[family-name:var(--editorial)] text-sm leading-relaxed tracking-[0.04em] uppercase">Request the honour of your presence to grace the occasion of our wedding ceremony</p>
                    <span aria-hidden="true" className="mt-8 block text-2xl text-[#b38a52]">❧</span>
                </div>
            </section>

            <section className="relative z-10 px-6 pb-20 text-center text-[#604b3a] sm:py-28" aria-labelledby="save-date-title">
                <div className="mx-auto max-w-[480px]">
                    <h2 id="save-date-title" className="m-0 font-[family-name:var(--script)] text-5xl font-normal sm:text-6xl">Save the Date</h2>
                    <div className="mx-auto mt-10 max-w-[360px] font-[family-name:var(--editorial)] text-[#705b49]" aria-label="November 2026 calendar, wedding on Wednesday the 25th">
                        <div className="mb-4 flex items-center justify-between text-lg uppercase"><span>November</span><span>2026</span></div>
                        <div className="grid grid-cols-7 text-center text-sm">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => <span key={day} className="pb-3 text-xs tracking-wide uppercase">{day}</span>)}
                            {Array.from({ length: 30 }, (_, index) => {
                                const day = index + 1;
                                return <span key={day} className="grid h-10 place-items-center"><span className={`grid h-9 w-9 place-items-center ${day === 25 ? "rounded-full border border-[#aa8154] text-[#805326]" : ""}`}>{day}</span></span>;
                            })}
                        </div>
                    </div>
                    <span aria-hidden="true" className="mt-2 block text-3xl text-[#b59a79]">❧ ♥ ❧</span>
                    <p className="mb-0 mt-7 font-[family-name:var(--editorial)] text-base tracking-[0.08em] uppercase">From 5:00 pm · Poruwa ceremony at 5:04 pm</p>
                    <p className="mb-0 mt-1 font-[family-name:var(--editorial)] text-sm tracking-[0.08em] uppercase">Battaramulla, Sri Lanka</p>
                </div>
            </section>

            <Countdown />

            <section className="relative z-10 px-6 py-20 text-[#604b3a] sm:py-28" aria-labelledby="timeline-title">
                <h2 id="timeline-title" className="m-0 text-center font-[family-name:var(--editorial)] text-[clamp(38px,9vw,58px)] leading-tight font-normal">Program of the day</h2>
                <p className="mb-0 mt-3 text-center font-[family-name:var(--script)] text-3xl text-[#aa8c69] sm:text-4xl">We can&apos;t wait to celebrate with you</p>
                <div className="relative mx-auto mt-14 max-w-[560px] before:absolute before:bottom-8 before:left-[92px] before:top-2 before:w-px before:bg-[#bea078] sm:before:left-[115px]">
                    {[
                        ["5:00 pm", "Wedding celebration begins"],
                        ["5:04 pm", "Poruwa ceremony"],
                    ].map(([time, event]) => (
                        <div key={time} className="motion-item relative grid min-h-[108px] grid-cols-[76px_1fr] gap-9 sm:grid-cols-[96px_1fr] sm:gap-10">
                            <span aria-hidden="true" className="absolute left-[87px] top-2 h-[11px] w-[11px] rounded-full border-2 border-[#b59a76] bg-[#f7f0e5] sm:left-[110px]" />
                            <time className="text-right font-[family-name:var(--editorial)] text-xl leading-tight sm:text-2xl">{time}</time>
                            <p className="m-0 font-[family-name:var(--editorial)] text-[23px] leading-tight sm:text-3xl">{event}</p>
                        </div>
                    ))}
                </div>
                <div aria-hidden="true" className="text-center text-[#b4915c]">────── ❧ ──────</div>
            </section>

            <section id="venue" className="relative z-10 overflow-hidden px-5 pb-12 pt-20 text-center text-[#604b3a] sm:pb-20 sm:pt-24" aria-labelledby="venue-title">
                <p className="m-0 font-[family-name:var(--invitation-sans)] text-[10px] tracking-[0.3em] text-[#a4874a] uppercase">Where we celebrate</p>
                <h2 id="venue-title" className="mb-0 mt-4 font-[family-name:var(--editorial)] text-4xl font-semibold tracking-[0.08em] uppercase sm:text-5xl">The <span className="text-[#a4874a]">Venue</span></h2>
                <div aria-hidden="true" className="my-8 flex items-center justify-center gap-3 text-[#a4874a]"><span className="h-px w-12 bg-[#b6a47d]" />✦<span className="h-px w-12 bg-[#b6a47d]" /></div>
                <div className="mx-auto max-w-[650px] lg:grid lg:max-w-[1200px] lg:grid-cols-2 lg:items-stretch lg:gap-8">
                <div className="mx-auto w-full max-w-[650px] rounded-t-[90px] rounded-b-[20px] bg-[#fcf8f1] px-6 pb-10 pt-12 sm:rounded-t-[130px] sm:px-12">
                    <span aria-hidden="true" className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[#c8ad73] text-2xl">⌖</span>
                    <p className="mb-0 mt-4 font-[family-name:var(--script)] text-3xl text-[#a7875c]">Venue</p>
                    <h3 className="mb-0 mt-2 font-[family-name:var(--editorial)] text-3xl tracking-[0.08em] uppercase">Eagle Hall, Waters Edge</h3>
                    <p className="mb-0 mt-3 font-[family-name:var(--editorial)] text-lg">Battaramulla, Sri Lanka</p>
                    <a href={receptionMapUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block border-b border-[#a4874a] pb-1 font-[family-name:var(--invitation-sans)] text-[10px] tracking-[0.12em] text-[#805f3d] uppercase">Open in Maps ↗</a>
                    <Image src={locationIllustration} alt="Illustration of a wedding venue" sizes="(max-width: 650px) 90vw, 550px" className="mx-auto mt-8 h-auto w-full max-w-[550px]" />
                </div>
                <div className="relative mx-auto mt-6 mb-10 w-full max-w-[650px] overflow-hidden rounded-[20px] bg-[#e9dfd1] lg:my-0 lg:min-h-[500px]">
                    <iframe
                        title="Map showing Waters Edge in Battaramulla"
                        src="https://maps.google.com/maps?q=Waters%20Edge%2C%20Battaramulla%2C%20Sri%20Lanka&output=embed"
                        className="block h-[320px] w-full border-0 sm:h-[400px] lg:absolute lg:inset-0 lg:h-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                    <a href={receptionMapUrl} target="_blank" rel="noreferrer" className="absolute left-3 top-3 rounded bg-white px-3 py-2 font-[family-name:var(--invitation-sans)] text-xs font-medium text-[#3266b4] shadow-md">Open in Maps ↗</a>
                </div>
                </div>
            </section>

            <RsvpForm />

            <section className="relative z-10 px-6 py-20 text-center text-[#665c50] sm:py-24" aria-labelledby="thank-you-title">
                <p className="m-0 font-[family-name:var(--invitation-sans)] text-[10px] tracking-[0.25em] text-[#b2874e] uppercase">With love,</p>
                <p className="mb-0 mt-4 font-[family-name:var(--editorial)] text-3xl">Kelumi &amp; Umesh</p>
                <p className="mb-0 mt-3 font-[family-name:var(--editorial)] text-sm text-[#a47b42]">25 November 2026 · Eagle Hall, Waters Edge, Battaramulla</p>
                <div className="mt-7 flex flex-col items-center gap-3">
                    <a href="tel:0713677274" className="rounded-full border border-[#d9c4a3] px-6 py-2 font-[family-name:var(--editorial)] text-sm text-[#a47b42] transition-colors hover:bg-[#f1eee5]">☎ &nbsp; Call Kelumi</a>
                    <a href="tel:0777148344" className="rounded-full border border-[#d9c4a3] px-6 py-2 font-[family-name:var(--editorial)] text-sm text-[#a47b42] transition-colors hover:bg-[#f1eee5]">☎ &nbsp; Call Umesh</a>
                </div>
                <h2 id="thank-you-title" className="mb-0 mt-14 font-[family-name:var(--editorial)] text-3xl font-normal">Thank You</h2>
                <p className="mb-0 mt-3 font-[family-name:var(--editorial)] text-base text-[#a47b42]">Thank you for being a part of our special day!</p>
                <span aria-hidden="true" className="mt-5 block text-[#c99641]">♥</span>
            </section>

            </div>
        </main>
    );
}
