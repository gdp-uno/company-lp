"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProductphotoHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-10 inset-x-0 z-40 transition-all duration-200 ${
        scrolled ? "bg-[#0a1f3d]/95 backdrop-blur-md shadow-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        <Image
          src={scrolled ? "/logo-white.png" : "/logo-color.png"}
          alt="Growth Design Partners"
          width={160}
          height={40}
          className="h-8 w-auto"
          priority
        />
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-white/50">
          <a href="#problems" className="hover:text-white transition-colors">お悩み</a>
          <a href="#features" className="hover:text-white transition-colors">サービス</a>
          <a href="#pricing" className="hover:text-white transition-colors">料金</a>
          <a href="#flow" className="hover:text-white transition-colors">ご利用の流れ</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-[#E8602C] hover:bg-[#ff7240] text-white px-5 h-10 text-[13px] font-bold rounded-full transition-all hover:-translate-y-px shadow-[0_3px_0_#9c3c15] hover:shadow-none hover:translate-y-0.5"
        >
          無料相談・お見積り
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </header>
  );
}
