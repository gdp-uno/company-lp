"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPInit() {
  const pathname = usePathname();

  useEffect(() => {
    // すでに適用済みのトリガーをリセット
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const ctx = gsap.context(() => {
      // ── セクションコンテンツを fade-up（FV・SeatBar 除外）──
      gsap.utils.toArray<HTMLElement>("section[id] > div").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 52 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 87%",
              once: true,
            },
          }
        );
      });

      // ── グリッド内カードを stagger ──
      gsap.utils.toArray<HTMLElement>("section[id] .grid").forEach((grid) => {
        const cards = Array.from(grid.children) as HTMLElement[];
        if (cards.length < 2) return;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: grid,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // ── data-animate="fade-up" ──
      gsap.utils.toArray<HTMLElement>("[data-animate='fade-up']").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // ── data-animate="fade-in" ──
      gsap.utils.toArray<HTMLElement>("[data-animate='fade-in']").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // ── data-animate="stagger" ──
      gsap.utils.toArray<HTMLElement>("[data-animate='stagger']").forEach((el) => {
        const children = Array.from(el.children) as HTMLElement[];
        gsap.fromTo(
          children,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return null;
}
