"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ElearningHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-10 inset-x-0 z-40 transition-all duration-200 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        <Image
          src="/logo-color.png"
          alt="Growth Design Partners"
          width={180}
          height={46}
          className="h-10 w-auto"
          priority
        />
        <nav className="hidden lg:flex items-center gap-7 text-[13px] text-[#0a1f3d]/75 font-medium">
          <a href="#problem" className="hover:text-[#15447b] transition-colors">課題</a>
          <a href="#features" className="hover:text-[#15447b] transition-colors">コンテンツ</a>
          <a href="#results" className="hover:text-[#15447b] transition-colors">導入効果</a>
          <a href="#pricing" className="hover:text-[#15447b] transition-colors">料金</a>
          <a href="#flow" className="hover:text-[#15447b] transition-colors">導入の流れ</a>
          <a href="#faq" className="hover:text-[#15447b] transition-colors">FAQ</a>
        </nav>
        <a
          href="#cta"
          className="inline-flex items-center gap-2 bg-gradient-to-b from-[#fbbf24] to-[#c9a227] hover:from-[#f0d87a] hover:to-[#fbbf24] text-[#0a1f3d] px-5 h-11 text-[13px] font-bold rounded-full shadow-[0_4px_0_#92760e] hover:shadow-[0_2px_0_#92760e] hover:translate-y-[2px] transition-all"
        >
          無料で資料請求
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </header>
  );
}
