"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#15447b] shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-[#15447b] font-bold text-xs leading-none">gdp</span>
          </div>
          <span className="text-white font-bold text-sm sm:text-base leading-tight">
            Growth Design Partners
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white">
          <Link href="#services" className="hover:text-blue-200 transition-colors">サービス</Link>
          <Link href="#flow" className="hover:text-blue-200 transition-colors">ご利用の流れ</Link>
          <Link href="#faq" className="hover:text-blue-200 transition-colors">よくある質問</Link>
          <Link
            href="#contact"
            className="bg-[#c9a227] hover:bg-[#d4b444] text-white px-4 py-2 rounded font-bold transition-colors"
          >
            お問い合わせ
          </Link>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0d2a52] px-4 py-4 flex flex-col gap-4 text-white text-sm">
          <Link href="#services" onClick={() => setMenuOpen(false)} className="hover:text-blue-200">サービス</Link>
          <Link href="#flow" onClick={() => setMenuOpen(false)} className="hover:text-blue-200">ご利用の流れ</Link>
          <Link href="#faq" onClick={() => setMenuOpen(false)} className="hover:text-blue-200">よくある質問</Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#c9a227] text-white px-4 py-2 rounded font-bold text-center"
          >
            お問い合わせ
          </Link>
        </div>
      )}
    </header>
  );
}
