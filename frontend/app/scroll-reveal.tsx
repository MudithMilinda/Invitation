"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>(".invitation-background section");
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("scroll-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach((section) => {
            if (section.getBoundingClientRect().top >= window.innerHeight) {
                section.classList.add("scroll-reveal");
                const items = section.querySelectorAll<HTMLElement>("h2, h3, p, form, iframe, time, .motion-item");
                items.forEach((item, index) => {
                    item.classList.add("scroll-reveal-item");
                    item.style.setProperty("--reveal-delay", `${Math.min(index * 90, 450)}ms`);
                });
                observer.observe(section);
            }
        });
        return () => observer.disconnect();
    }, []);

    return null;
}
