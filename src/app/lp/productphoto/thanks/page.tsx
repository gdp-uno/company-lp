"use client";

import { useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window { gtag?: (...args: unknown[]) => void; }
}

export default function ProductphotoThanksPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        event_category: "lp_productphoto",
        event_label: "form_complete",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f5fa] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-[#dce8f2] p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-[#E8602C]/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8602C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12l5 5L20 6" /></svg>
        </div>
        <h1 className="text-2xl font-bold text-[#0a1f3d] mb-3">
          送信完了しました
        </h1>
        <p className="text-[#5a7089] text-sm leading-relaxed mb-6">
          ご相談・お見積もりのご依頼ありがとうございます。<br />
          担当者より2営業日以内にご連絡いたします。<br />
          しばらくお待ちください。
        </p>
        <Link
          href="/lp/productphoto"
          className="inline-block bg-[#E8602C] hover:bg-[#ff7240] text-white font-bold px-6 py-3 rounded-full text-sm transition-colors shadow-[0_3px_0_#9c3c15] hover:shadow-none hover:translate-y-0.5"
        >
          商品撮影サービスページに戻る
        </Link>
      </div>
    </div>
  );
}
