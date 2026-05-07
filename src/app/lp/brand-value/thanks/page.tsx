"use client";

import { useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function BrandValueThanksPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        event_category: "lp_brand_value",
        event_label: "form_complete",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f6fc] flex items-center justify-center px-4 py-20">
      <div className="bg-white rounded-2xl shadow-sm border border-[#ddeaf8] p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-[#e8f0fb] flex items-center justify-center mx-auto mb-5">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#15447b]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[#0a1f3d] mb-3">
          送信完了しました
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-2">
          無料相談のお申し込みありがとうございます。
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          担当者より<span className="font-semibold text-[#15447b]">2営業日以内</span>にご連絡いたします。<br />
          しばらくお待ちください。
        </p>
        <div className="bg-[#f8fafd] rounded-xl p-4 mb-8 text-left">
          <p className="text-xs text-gray-500 font-semibold mb-2">次のステップ</p>
          <ul className="space-y-1.5 text-sm text-gray-600">
            <li className="flex items-start gap-2"><span className="text-[#15447b] font-bold mt-0.5">1.</span>担当者からメールまたはお電話でご連絡</li>
            <li className="flex items-start gap-2"><span className="text-[#15447b] font-bold mt-0.5">2.</span>30分の無料ヒアリング日程を調整</li>
            <li className="flex items-start gap-2"><span className="text-[#15447b] font-bold mt-0.5">3.</span>競合分析・ポジショニング診断をご提案</li>
          </ul>
        </div>
        <Link
          href="/lp/brand-value"
          className="inline-block bg-[#15447b] hover:bg-[#1a5494] text-white font-bold px-8 py-3 rounded-lg text-sm transition-colors"
        >
          ページに戻る
        </Link>
      </div>
    </div>
  );
}
