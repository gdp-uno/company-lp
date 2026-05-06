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
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-[#E0DAD2] p-10 max-w-md w-full text-center">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-[#1A1816] mb-3">
          送信完了しました
        </h1>
        <p className="text-[#6B6760] text-sm leading-relaxed mb-6">
          ご相談・お見積もりのご依頼ありがとうございます。<br />
          担当者より2営業日以内にご連絡いたします。<br />
          しばらくお待ちください。
        </p>
        <Link
          href="/lp/productphoto"
          className="inline-block bg-[#1A1816] hover:bg-[#2C2926] text-white font-medium px-6 py-3 rounded-full text-sm transition-colors"
        >
          商品撮影サービスページに戻る
        </Link>
      </div>
    </div>
  );
}
