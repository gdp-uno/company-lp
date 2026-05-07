"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const SECTION_IDS = ["problem", "solution", "why", "plans", "flow", "faq", "cta"];
const DEPTH_THRESHOLDS = [25, 50, 75, 90];

export function useScrollTracking(eventCategory: string) {
  useEffect(() => {
    const depthTracked = new Set<number>();
    const sectionTracked = new Set<string>();

    // スクロール深度
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const pct = Math.round((window.scrollY / total) * 100);
      DEPTH_THRESHOLDS.forEach((threshold) => {
        if (pct >= threshold && !depthTracked.has(threshold)) {
          depthTracked.add(threshold);
          window.gtag?.("event", "scroll_depth", {
            event_category: eventCategory,
            event_label: `${threshold}%`,
            value: threshold,
          });
        }
      });
    };

    // セクション到達（IntersectionObserver）
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && id && !sectionTracked.has(id)) {
            sectionTracked.add(id);
            window.gtag?.("event", "section_view", {
              event_category: eventCategory,
              event_label: id,
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [eventCategory]);
}
