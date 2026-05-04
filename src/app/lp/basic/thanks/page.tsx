"use client";

import { useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function BasicThanksPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        event_category: "lp_basic",
        event_label: "form_complete",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f6fc] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-[#ddeaf8] p-10 max-w-md w-full text-center">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-[#15447b] mb-3">
          送信完了しました
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          お問い合わせありがとうございます。<br />
          2営業日以内にご連絡いたします。<br />
          しばらくお待ちください。
        </p>
        <Link
          href="/lp/basic"
          className="inline-block bg-[#15447b] hover:bg-[#1a5494] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors"
        >
          基本パッケージページに戻る
        </Link>
      </div>
    </div>
  );
}
