"use client";

import { useState, useEffect } from "react";
import DxDiagram from "@/components/lp/DxDiagram";

declare global {
  interface Window { gtag?: (...args: unknown[]) => void; }
}
function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) window.gtag("event", name, params);
}

// ── Shared UI primitives ──────────────────────────────────────────────
function Ico({ d, size = 20, className = "" }: { d: string; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const I = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  check: "M4 12l5 5L20 6",
  clock: "M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3zM12 7v5l3 2",
  user: "M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 21c0-4 4-7 9-7s9 3 9 7",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M9 13h8M9 17h8M9 9h3",
  cog: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41",
  layers: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5",
  chart: "M3 3v18h18M7 14l4-4 3 3 6-7",
  brain: "M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3zM9 9h.01M15 9h.01M9 14c1.5 1.5 4.5 1.5 6 0",
  target: "M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3zM12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  star: "M12 2l2.6 6.5L22 9.5l-5.5 4.7L18 22l-6-3.5L6 22l1.5-7.8L2 9.5l7.4-1z",
  fire: "M12 2c0 4-5 6-5 11a5 5 0 0 0 10 0c0-2-1-3-2-4 0 2-1 3-2 3 0-4 1-6-1-10z",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7z",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z",
  mail: "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zM3 7l9 6 9-6",
};

function Kicker({ jp, en, color = "#15447b" }: { jp: string; en: string; color?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 mb-6">
      <div className="font-plex-mono text-[11px] tracking-[0.4em] font-bold" style={{ color }}>{en}</div>
      <div className="flex items-center gap-2">
        <span className="w-6 h-px" style={{ background: color }} />
        <span className="font-display font-bold text-[12px] tracking-[0.3em]" style={{ color }}>{jp}</span>
        <span className="w-6 h-px" style={{ background: color }} />
      </div>
    </div>
  );
}
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display font-black text-[#0a1f3d] text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.35] tracking-[-0.01em] text-center max-w-4xl mx-auto">
      {children}
    </h2>
  );
}
function Highlight({ children, color = "#fbbf24" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span className="absolute left-0 right-0 bottom-0 h-2.5 -z-0 opacity-60" style={{ background: color }} />
    </span>
  );
}

// ── FV ───────────────────────────────────────────────────────────────
function FV() {
  return (
    <section className="relative pt-16 sm:pt-20 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-br from-[#e0f2fe] via-[#f0f6fc] to-[#dbeafe]">
      {/* Decorative bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#bae6fd]/60 to-transparent blur-3xl" />
        <div className="absolute top-40 right-10 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-[#fde68a]/40 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[260px] h-[260px] rounded-full bg-gradient-to-br from-[#c7d2fe]/50 to-transparent blur-3xl" />
      </div>
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #15447b 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left copy */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 mb-6 bg-white border-2 border-[#15447b] px-4 py-1.5 rounded-full shadow-sm">
            <Ico d={I.bolt} size={14} className="text-[#fbbf24] fill-[#fbbf24]" />
            <span className="font-display font-bold text-[12px] sm:text-[13px] text-[#15447b]">スタートアップ・少人数組織のためのDX伴走</span>
          </div>

          <h1 className="font-display font-black text-[#0a1f3d] leading-[1.25] tracking-[-0.01em] text-[32px] sm:text-[44px] lg:text-[54px]">
            定型業務は、<br />
            <Highlight color="#fbbf24">仕組みに任せて</Highlight>ください。
          </h1>

          <ul className="mt-7 space-y-3">
            {[
              "請求・経費・受発注など、定型業務を自動化",
              "ノーコード × SaaS で初期投資ほぼゼロ",
              "業務マニュアル一式まで納品、属人化を解消",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] sm:text-[15px] text-[#0a1f3d] font-medium">
                <span className="shrink-0 w-6 h-6 bg-gradient-to-b from-[#22c55e] to-[#15803d] rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                  <Ico d={I.check} size={14} className="text-white" />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              onClick={() => trackEvent("click_cta_fv", { position: "fv" })}
              className="group inline-flex items-center gap-3 bg-gradient-to-b from-[#fbbf24] to-[#c9a227] hover:from-[#f0d87a] hover:to-[#fbbf24] text-[#0a1f3d] h-14 px-7 font-black text-[15px] rounded-full shadow-[0_6px_0_#92760e,0_8px_24px_rgba(201,162,39,0.4)] hover:shadow-[0_3px_0_#92760e,0_4px_12px_rgba(201,162,39,0.4)] hover:translate-y-[3px] transition-all"
            >
              30秒で無料相談を申し込む
              <Ico d={I.arrow} size={16} />
            </a>
            <a href="#plans" className="inline-flex items-center gap-2 text-[#15447b] font-bold text-[14px] underline underline-offset-4 decoration-2 decoration-[#15447b]/30 hover:decoration-[#15447b] transition">
              料金プランを見る
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[#475569]">
            <div className="flex items-center gap-1.5">
              <Ico d={I.star} size={14} className="text-[#fbbf24] fill-[#fbbf24]" />
              <span><span className="font-bold text-[#0a1f3d]">12社</span>支援実績</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Ico d={I.shield} size={14} className="text-[#15447b]" />
              <span>NDA締結対応</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Ico d={I.fire} size={14} className="text-[#dc2626]" />
              <span>残り<span className="font-bold text-[#dc2626]">6社</span>枠</span>
            </div>
          </div>
        </div>

        {/* Right: diagram card */}
        <div className="lg:col-span-6 relative">
          <div className="absolute -top-6 -right-3 sm:-right-5 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#dc2626] to-[#ef4444] text-white flex flex-col items-center justify-center shadow-xl rotate-[8deg] ring-4 ring-white">
            <span className="font-display font-black text-[20px] sm:text-[22px] leading-none">月72h</span>
            <span className="font-bold text-[10px] sm:text-[11px] mt-1">削減実績!</span>
          </div>
          <div className="relative bg-white border border-[#15447b]/10 p-6 sm:p-8 rounded-2xl shadow-[0_20px_50px_-15px_rgba(21,68,123,0.35)]">
            <div className="flex items-center justify-between mb-6">
              <span className="font-display font-bold text-[#0a1f3d] text-[15px] sm:text-[16px]">時間配分シミュレーション</span>
              <span className="font-plex-mono text-[10px] text-[#15447b] bg-[#e0f2fe] px-2 py-0.5 rounded">DX MODEL</span>
            </div>
            <DxDiagram />
          </div>
          <p className="mt-3 text-center text-[11px] text-[#64748b]">※ 実支援先12社の平均値（2024-2025）</p>
        </div>
      </div>
    </section>
  );
}

// ── Seat Bar ─────────────────────────────────────────────────────────
function SeatBar() {
  return (
    <section className="bg-[#0a1f3d] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: "linear-gradient(135deg, transparent 30%, rgba(220,38,38,0.4) 100%)" }}
      />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-7 grid sm:grid-cols-[auto_1fr_auto] items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e] shadow-[0_0_12px_#22c55e]" />
            </span>
            <span className="font-plex-mono text-[10px] tracking-[0.3em] text-[#22c55e] font-bold">LIVE・受付中</span>
          </div>
          <div className="font-display font-bold text-white text-[18px] sm:text-[20px] leading-tight">
            年間<span className="text-[#fbbf24] tabular-nums"> 10社 </span>限定
            <span className="text-white/70 text-[14px] font-medium ml-1">/ 4社契約済</span>
          </div>
        </div>
        <div>
          <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#fbbf24] to-[#dc2626] rounded-full" style={{ width: "40%" }}>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_16px_#fbbf24] ring-2 ring-[#fbbf24]" />
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <span key={i} className="absolute top-0 bottom-0 w-px bg-[#0a1f3d]/40" style={{ left: `${i * 10}%` }} />
            ))}
          </div>
        </div>
        <div className="text-right border-l border-white/15 pl-6">
          <div className="font-plex-mono text-[10px] tracking-[0.25em] text-[#fbbf24] mb-0.5">残り</div>
          <div className="font-display font-black text-[#fbbf24] text-[44px] sm:text-[56px] tabular-nums leading-none drop-shadow-[0_0_24px_rgba(251,191,36,0.4)]">
            6<span className="text-lg font-bold text-white/80 ml-1">社</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Problem ───────────────────────────────────────────────────────────
const PROBLEMS = [
  { icon: I.clock, text: "毎月の請求・経費処理に追われ、戦略を考える時間が取れない" },
  { icon: I.layers, text: "業務がバラバラのツールに散らばり、全体が見えない" },
  { icon: I.user, text: "属人化が進み、担当が抜けると業務が止まる" },
  { icon: I.doc, text: "毎回ゼロから資料を作っていて、知見が蓄積されない" },
  { icon: I.cog, text: "ツールは入れたが使いこなせず、結局Excelに戻る" },
  { icon: I.brain, text: "「何から手をつけるべきか」自体が判断できない" },
];
function Problem() {
  return (
    <section id="problem" className="relative py-16 sm:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <Kicker jp="お悩み" en="PROBLEM" color="#dc2626" />
        <SectionTitle>
          こんなお悩み、<Highlight color="#fecaca">ありませんか？</Highlight>
        </SectionTitle>
        <p className="text-center text-[14px] sm:text-[15px] text-[#475569] mt-5 leading-[2] max-w-2xl mx-auto">
          スタートアップ・少人数組織でよく耳にする、6つの「詰まり」。<br className="hidden sm:block" />
          一つでも当てはまるなら、仕組み化のタイミングです。
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PROBLEMS.map((p, i) => (
            <div key={i} className="relative bg-[#f8fafc] border-2 border-[#e2e8f0] hover:border-[#15447b] hover:bg-white transition-all rounded-2xl p-6 group">
              <div className="absolute -top-3 -left-3 w-9 h-9 bg-gradient-to-br from-[#15447b] to-[#0a1f3d] text-white rounded-full flex items-center justify-center font-display font-black text-[14px] tabular-nums shadow-md">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex items-start gap-4 pl-3">
                <div className="w-12 h-12 bg-[#fef2f2] border border-[#fecaca] rounded-xl flex items-center justify-center text-[#dc2626] shrink-0">
                  <Ico d={p.icon} size={22} />
                </div>
                <p className="text-[14px] leading-[1.85] text-[#0a1f3d] font-medium pt-1.5">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge bubble */}
        <div className="mt-16 max-w-3xl mx-auto relative">
          <div className="bg-gradient-to-br from-[#15447b] to-[#0a1f3d] text-white px-8 py-7 rounded-2xl shadow-xl text-center relative">
            <div className="font-display font-bold text-[18px] sm:text-[22px] leading-[1.6]">
              そのお悩み、<span className="text-[#fbbf24]">Growth Design Partners</span> が解決します。
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0a1f3d] rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Solution ──────────────────────────────────────────────────────────
function Solution() {
  const steps = [
    { n: "01", title: "現状ヒアリング & 業務棚卸し", desc: "1〜2週間で業務フローを可視化し、自動化候補をスコアリング。", icon: I.target, days: "1〜2週間" },
    { n: "02", title: "仕組み設計 & ツール構築", desc: "ノーコード/SaaSを組み合わせ、最小コストで運用できる業務基盤を設計。", icon: I.cog, days: "1〜2ヶ月" },
    { n: "03", title: "運用定着 & 改善伴走", desc: "マニュアル化・トレーニング・月次レビューで現場に定着させます。", icon: I.chart, days: "3ヶ月〜" },
  ];
  const bonuses = [
    { title: "業務マニュアル一式を納品", desc: "属人化を防ぐ手順書・運用ルールを成果物として残します。", icon: I.doc },
    { title: "3ヶ月のフォロー伴走", desc: "導入後の調整・追加要望にも、定額内で対応します。", icon: I.shield },
  ];

  return (
    <section id="solution" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#f0f6fc] to-[#e0f2fe]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <Kicker jp="解決策" en="SOLUTION" color="#15447b" />
        <SectionTitle>
          <Highlight>3ステップ</Highlight>で、業務を「動く仕組み」に変える
        </SectionTitle>
        <p className="text-center text-[14px] sm:text-[15px] text-[#475569] mt-5 leading-[2] max-w-2xl mx-auto">
          ヒアリングから運用定着まで。診断・設計・実装・伴走を、一気通貫でご支援します。
        </p>

        <div className="mt-14 relative grid lg:grid-cols-3 gap-5 lg:gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {i < 2 && (
                <div className="hidden lg:flex absolute top-[88px] -right-7 z-10 items-center justify-center w-12 h-12 -translate-y-1/2">
                  <div className="w-12 h-12 bg-[#fbbf24] text-[#0a1f3d] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(201,162,39,0.4)] ring-4 ring-white">
                    <Ico d={I.arrow} size={20} />
                  </div>
                </div>
              )}
              <div className="relative bg-white rounded-3xl p-7 lg:p-9 shadow-xl border border-[#15447b]/10 h-full overflow-hidden">
                <div className="absolute -top-4 -right-2 font-display font-black text-[#15447b]/[0.06] text-[140px] leading-none tabular-nums select-none">{s.n}</div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex flex-col items-center justify-center w-14 h-14 bg-gradient-to-br from-[#15447b] to-[#0a1f3d] text-white rounded-2xl shadow-lg">
                      <span className="font-plex-mono text-[8px] tracking-widest opacity-70 leading-none">STEP</span>
                      <span className="font-display font-black text-[18px] tabular-nums leading-none mt-0.5">{s.n}</span>
                    </div>
                    <div>
                      <div className="font-plex-mono text-[10px] tracking-[0.2em] text-[#dc2626] font-bold">{s.days}</div>
                      <Ico d={s.icon} size={20} className="text-[#fbbf24]" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-[#0a1f3d] text-[19px] sm:text-[20px] leading-[1.45] mb-3">{s.title}</h3>
                  <p className="text-[13.5px] text-[#475569] leading-[1.95]">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#fbbf24] text-[#0a1f3d] px-5 py-1.5 rounded-full font-display font-black text-[13px] shadow-md">
              <Ico d={I.star} size={14} className="fill-[#0a1f3d]" />
              <span>全プラン共通の特典</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {bonuses.map((b, i) => (
              <div key={i} className="bg-white border-2 border-[#fbbf24]/40 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                <div className="w-12 h-12 bg-[#fef9c3] border border-[#fbbf24] rounded-xl flex items-center justify-center text-[#c9a227] shrink-0">
                  <Ico d={b.icon} size={22} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#0a1f3d] text-[16px] mb-1.5">{b.title}</h4>
                  <p className="text-[13px] text-[#475569] leading-[1.85]">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Why Us ────────────────────────────────────────────────────────────
function WhyUs() {
  const reasons = [
    { n: "01", title: "戦略 × 実装、両方できる少数精鋭", desc: "ブランディングコンサルとエンジニアが同じチームに在籍。「絵に描いた餅」で終わらせません。", stat: "12社", statL: "支援実績" },
    { n: "02", title: "大阪拠点 × 全国オンライン対応", desc: "対面でもオンラインでも。関西圏は訪問、それ以外は週次MTGで密に伴走します。", stat: "100%", statL: "リモート可" },
    { n: "03", title: "ノーコード × SaaSの最小構成主義", desc: "「いきなり開発」はしません。既存SaaS・ノーコードを最大限活かし、初期投資を抑えます。", stat: "¥0", statL: "初期開発費" },
    { n: "04", title: "属人化させない、納品物の手厚さ", desc: "業務マニュアル・運用ルール・引き継ぎ動画まで。担当が抜けても止まらない仕組みに。", stat: "30+", statL: "ドキュメント" },
    { n: "05", title: "経営者目線の伴走者", desc: "ご支援先の多くが社長直下。「忙しい経営者の代わりに考える」スタンスで提案します。", stat: "1on1", statL: "毎週実施" },
  ];

  return (
    <section id="why" className="relative py-16 sm:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <Kicker jp="選ばれる理由" en="WHY US" color="#15447b" />
        <SectionTitle>
          なぜ、<Highlight>Growth Design Partners</Highlight>が選ばれるのか
        </SectionTitle>
        <p className="text-center text-[14px] sm:text-[15px] text-[#475569] mt-5 leading-[2] max-w-2xl mx-auto">
          ツール導入だけで終わらせない。経営の時間を取り戻すパートナーとして、5つの強みでご支援します。
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`relative bg-white border-2 border-[#e2e8f0] hover:border-[#15447b] rounded-2xl p-7 transition-all shadow-sm hover:shadow-xl ${
                i === 0 ? "lg:col-span-2 bg-gradient-to-br from-[#f0f6fc] to-white border-[#15447b]/30" : ""
              }`}
            >
              <div className="flex items-baseline justify-between mb-5">
                <div className="inline-flex items-center gap-2 bg-[#15447b] text-white px-3 py-1 rounded-full">
                  <span className="font-plex-mono text-[10px] tracking-widest font-bold">REASON</span>
                  <span className="font-display font-black text-[14px] tabular-nums">{r.n}</span>
                </div>
              </div>
              <h3 className="font-display font-bold text-[#0a1f3d] text-[19px] sm:text-[20px] leading-[1.45] mb-3">{r.title}</h3>
              <p className="text-[13.5px] text-[#475569] leading-[1.95] mb-5">{r.desc}</p>
              <div className="pt-5 border-t border-[#e2e8f0] flex items-baseline gap-3">
                <span className="font-display font-black text-[#dc2626] text-[32px] tabular-nums leading-none">{r.stat}</span>
                <span className="font-plex-mono text-[11px] tracking-wider text-[#64748b] font-medium">{r.statL}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Plans ─────────────────────────────────────────────────────────────
function Plans() {
  const spots = [
    {
      code: "DIAGNOSIS", name: "業務診断", price: "200,000",
      desc: "1〜2週間。業務棚卸し＆改善ロードマップ。",
      items: ["業務フロー可視化", "自動化候補リスト", "改善優先度マップ"],
    },
    {
      code: "BUILD", name: "仕組み構築", price: "600,000",
      desc: "1〜2ヶ月。1業務領域を完全に仕組み化。",
      items: ["ツール選定・初期設定", "業務マニュアル一式", "1ヶ月の運用フォロー"],
      featured: true,
    },
    {
      code: "REBUILD", name: "全社DX再設計", price: "1,200,000",
      desc: "3ヶ月。基幹業務を横断的に再設計。",
      items: ["全社業務フロー再設計", "5領域のツール構築", "3ヶ月の運用伴走"],
    },
  ];
  const subs = [
    { code: "LIGHT", name: "ライト伴走", price: "50,000", items: ["月1回 戦略MTG", "ツール質問チャット", "月次レポート"] },
    { code: "STANDARD", name: "スタンダード伴走", price: "120,000", items: ["月2回 戦略MTG", "1業務領域の改善", "ドキュメント更新"], featured: true },
    { code: "PRO", name: "プロ伴走", price: "240,000", items: ["週1回 戦略MTG", "複数業務の並行改善", "優先サポート"] },
    { code: "ENTERPRISE", name: "経営パートナー", price: "ASK", items: ["週2回 経営MTG", "全社DX伴走", "専任チーム配置"] },
  ];

  return (
    <section id="plans" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#e0f2fe] to-[#f0f6fc]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#dc2626] to-[#ef4444] text-white px-5 py-2 rounded-full shadow-xl border-2 border-white">
            <Ico d={I.fire} size={14} />
            <span className="font-display font-black text-[12px] tracking-wider">先着10社限定・残り 6社</span>
          </div>
        </div>
        <Kicker jp="料金プラン" en="PLANS" color="#15447b" />
        <SectionTitle>
          スポット導入も、月額伴走も。<br className="sm:hidden" />組織に合わせて<Highlight>選べる</Highlight>
        </SectionTitle>
        <p className="text-center text-[14px] sm:text-[15px] text-[#475569] mt-5 leading-[2] max-w-2xl mx-auto">
          まずは1業務だけスポットで試す。軌道に乗ったら月額伴走で全社展開。段階的にDXを広げられます。
        </p>

        {/* Spot */}
        <div className="mt-14">
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="w-10 h-px bg-[#15447b]/30" />
            <span className="font-display font-bold text-[15px] text-[#15447b]">単発導入プラン（スポット）</span>
            <span className="w-10 h-px bg-[#15447b]/30" />
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {spots.map((s) => (
              <div
                key={s.code}
                className={`relative rounded-3xl p-7 transition-all ${
                  s.featured
                    ? "bg-gradient-to-b from-[#fef9c3] to-white border-2 border-[#fbbf24] shadow-[0_20px_50px_-15px_rgba(201,162,39,0.45)] md:scale-[1.04] md:-mt-3"
                    : "bg-white border-2 border-[#e2e8f0] hover:border-[#15447b] shadow-sm"
                }`}
              >
                {s.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#dc2626] text-white px-4 py-1 rounded-full font-display font-black text-[11px] tracking-wider shadow-lg">★ 一番人気</div>
                )}
                <div className="font-plex-mono text-[10px] tracking-[0.3em] text-[#dc2626] font-bold mb-2">{s.code}</div>
                <h3 className="font-display font-black text-[#0a1f3d] text-[22px] mb-3">{s.name}</h3>
                <p className="text-[13px] text-[#475569] leading-[1.85] mb-5 min-h-[3.5em]">{s.desc}</p>
                <div className="pb-5 mb-5 border-b border-[#e2e8f0]">
                  <span className="text-[12px] text-[#64748b] mr-1">¥</span>
                  <span className="font-display font-black text-[#0a1f3d] text-[40px] tabular-nums">{s.price}</span>
                  <span className="text-[12px] text-[#64748b] ml-1">〜（税別）</span>
                </div>
                <ul className="space-y-2.5 mb-7">
                  {s.items.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#0a1f3d]">
                      <span className="shrink-0 w-5 h-5 bg-[#22c55e] rounded-full flex items-center justify-center mt-0.5">
                        <Ico d={I.check} size={12} className="text-white" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  onClick={() => trackEvent("click_plan", { plan: s.name })}
                  className={`block text-center w-full h-12 leading-[3rem] font-bold text-[13px] rounded-full transition-all ${
                    s.featured
                      ? "bg-gradient-to-b from-[#fbbf24] to-[#c9a227] text-[#0a1f3d] shadow-[0_4px_0_#92760e]"
                      : "bg-[#0a1f3d] text-white hover:bg-[#15447b]"
                  }`}
                >
                  このプランで相談する
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="w-10 h-px bg-[#15447b]/30" />
            <span className="font-display font-bold text-[15px] text-[#15447b]">月額伴走プラン（サブスク）</span>
            <span className="w-10 h-px bg-[#15447b]/30" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {subs.map((s) => (
              <div
                key={s.code}
                className={`relative rounded-3xl p-7 transition-all ${
                  s.featured
                    ? "bg-gradient-to-br from-[#15447b] to-[#0a1f3d] text-white border-2 border-[#fbbf24] shadow-2xl md:col-span-2 lg:col-span-1"
                    : "bg-white border-2 border-[#e2e8f0] hover:border-[#15447b] shadow-sm"
                }`}
              >
                {s.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fbbf24] text-[#0a1f3d] px-4 py-1 rounded-full font-display font-black text-[11px] tracking-wider shadow-lg">⭐ 最も人気</div>
                )}
                <div className={`font-plex-mono text-[10px] tracking-[0.3em] font-bold mb-3 ${s.featured ? "text-[#fbbf24]" : "text-[#dc2626]"}`}>{s.code}</div>
                <h3 className={`font-display font-black mb-4 ${s.featured ? "text-white text-[22px]" : "text-[#0a1f3d] text-[18px]"}`}>{s.name}</h3>
                <div className={`pb-4 mb-5 border-b ${s.featured ? "border-white/15" : "border-[#e2e8f0]"}`}>
                  {s.price === "ASK" ? (
                    <span className={`font-display font-black text-[24px] ${s.featured ? "text-white" : "text-[#0a1f3d]"}`}>お問い合わせ</span>
                  ) : (
                    <>
                      <span className={`text-[12px] mr-1 ${s.featured ? "text-white/60" : "text-[#64748b]"}`}>¥</span>
                      <span className={`font-display font-black tabular-nums ${s.featured ? "text-white text-[40px]" : "text-[#0a1f3d] text-[36px]"}`}>{s.price}</span>
                      <span className={`text-[12px] ml-1 ${s.featured ? "text-white/60" : "text-[#64748b]"}`}>/月</span>
                    </>
                  )}
                </div>
                <ul className="space-y-2.5 mb-6">
                  {s.items.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-[13px] ${s.featured ? "text-white/90" : "text-[#0a1f3d]"}`}>
                      <span className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${s.featured ? "bg-[#fbbf24]" : "bg-[#22c55e]"}`}>
                        <Ico d={I.check} size={12} className={s.featured ? "text-[#0a1f3d]" : "text-white"} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  onClick={() => trackEvent("click_plan", { plan: s.name })}
                  className={`block text-center w-full h-11 leading-[2.75rem] font-bold text-[13px] rounded-full transition-all ${
                    s.featured
                      ? "bg-gradient-to-b from-[#fbbf24] to-[#c9a227] text-[#0a1f3d] shadow-[0_4px_0_#92760e]"
                      : "bg-[#0a1f3d] text-white hover:bg-[#15447b]"
                  }`}
                >
                  {s.featured ? "このプランで申し込む →" : "詳細を相談する"}
                </a>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-[11px] text-[#64748b]">※ 表示価格はすべて税抜。最低契約期間：3ヶ月（以降1ヶ月単位で更新）</p>
      </div>
    </section>
  );
}

// ── Flow ──────────────────────────────────────────────────────────────
function Flow() {
  const flows = [
    { n: "01", title: "お問い合わせ・無料相談（30分）", desc: "現状の業務体制と、解決したい課題をヒアリング。プランのご提案までいたします。", time: "DAY 0" },
    { n: "02", title: "業務ヒアリング & 棚卸し（1〜2週間）", desc: "実業務に張り付き、ボトルネック・属人箇所・自動化候補をスコアリング。", time: "WEEK 1–2" },
    { n: "03", title: "改善ロードマップ提示", desc: "優先度・期待効果・コストをまとめた、A4 5枚程度のロードマップをご提示。", time: "WEEK 3" },
    { n: "04", title: "仕組み構築 & 運用テスト", desc: "ツール構築・マニュアル整備・現場テスト。並走しながら微調整します。", time: "MONTH 1–2" },
    { n: "05", title: "運用定着 & 改善伴走", desc: "月次レビューで定量効果を確認しながら、次の改善テーマへ。", time: "MONTH 3+" },
  ];

  return (
    <section id="flow" className="relative py-16 sm:py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-8">
        <Kicker jp="ご相談の流れ" en="FLOW" color="#15447b" />
        <SectionTitle>
          お問い合わせから<Highlight>3ヶ月</Highlight>で、業務が動き始めます
        </SectionTitle>

        <div className="mt-12 relative">
          <div className="absolute left-7 sm:left-10 top-3 bottom-3 w-[3px] bg-gradient-to-b from-[#fbbf24] via-[#15447b] to-[#15447b]/20 rounded-full" />
          <ol className="space-y-4">
            {flows.map((f, i) => (
              <li key={i} className="relative pl-20 sm:pl-28">
                <div className="absolute left-0 top-0 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-[#15447b] to-[#0a1f3d] rounded-full flex flex-col items-center justify-center text-white shadow-lg ring-4 ring-white">
                  <span className="font-plex-mono text-[8px] tracking-widest opacity-70 leading-none">STEP</span>
                  <span className="font-display font-black text-[18px] sm:text-[24px] tabular-nums leading-none mt-0.5">{f.n}</span>
                </div>
                <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] rounded-2xl p-5 sm:p-6 hover:border-[#15447b] hover:bg-white transition-all">
                  <div className="flex items-baseline justify-between gap-3 mb-2 flex-wrap">
                    <h3 className="font-display font-bold text-[#0a1f3d] text-[16px] sm:text-[18px] leading-[1.5]">{f.title}</h3>
                    <span className="font-plex-mono text-[10px] tracking-wider text-[#dc2626] font-bold bg-[#fef2f2] px-2 py-0.5 rounded">{f.time}</span>
                  </div>
                  <p className="text-[13.5px] text-[#475569] leading-[1.95]">{f.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────
const FAQS = [
  { q: "本当に少人数の組織でも依頼できますか？", a: "はい。むしろ5〜30名規模のスタートアップ・少人数組織を主なご支援対象としています。社長や責任者の時間が一番貴重なフェーズだからこそ、仕組み化の効果が大きく出ます。" },
  { q: "全国どこからでも相談できますか？", a: "はい。大阪拠点ですが、関西圏以外のお客様も全国対応しています。週1回のオンラインMTGをベースに、必要に応じて訪問もいたします。" },
  { q: "既存ツール（Salesforce・kintone等）を使い続けたいのですが？", a: "問題ありません。「いきなり乗り換え」は推奨していません。既存ツールを活かしつつ、足りない部分を補う設計を優先します。" },
  { q: "途中解約はできますか？", a: "サブスクプランは最低3ヶ月、以降1ヶ月単位で解約・プラン変更が可能です。ご利用状況に合わせ柔軟に調整できます。" },
  { q: "業務の中身を共有するのが不安です。", a: "ご契約前にNDA（秘密保持契約）を締結いたします。アクセス権限も最小限に絞り、データの取り扱いも明文化のうえで進めます。" },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#f0f6fc] to-[#e0f2fe]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8">
        <Kicker jp="よくある質問" en="FAQ" color="#15447b" />
        <SectionTitle>気になる<Highlight>ご質問</Highlight></SectionTitle>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`bg-white rounded-2xl border-2 transition-all ${isOpen ? "border-[#15447b] shadow-lg" : "border-[#e2e8f0] hover:border-[#15447b]/40"}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full text-left flex items-start justify-between gap-4 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="shrink-0 w-9 h-9 bg-[#dc2626] text-white rounded-full flex items-center justify-center font-display font-black text-[14px]">Q</span>
                    <span className="font-display font-bold text-[#0a1f3d] text-[15px] sm:text-[16px] leading-[1.6] pt-1">{f.q}</span>
                  </div>
                  <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-[#15447b] text-white rotate-180" : "bg-[#f0f6fc] text-[#15447b]"}`}>
                    <Ico d={isOpen ? I.minus : I.plus} size={16} />
                  </div>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6">
                      <div className="flex items-start gap-4 pl-[52px] sm:pl-[60px]">
                        <span className="shrink-0 w-9 h-9 bg-[#15447b] text-white rounded-full flex items-center justify-center font-display font-black text-[14px] -ml-[52px] sm:-ml-[60px]">A</span>
                        <p className="text-[13.5px] text-[#475569] leading-[1.95]">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── CTA / Contact ─────────────────────────────────────────────────────
function CTA() {
  function handleSubmit() {
    trackEvent("generate_lead", { event_category: "lp_dx", event_label: "contact_form_submit" });
  }
  return (
    <section id="cta" className="relative py-16 sm:py-24 bg-gradient-to-br from-[#15447b] via-[#0a1f3d] to-[#060d1c] overflow-hidden">
      <div
        className="absolute inset-0 opacity-15"
        style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(251,191,36,0.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(220,38,38,0.3), transparent 40%)" }}
      />
      <div className="relative max-w-[1080px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-4 py-1.5 rounded-full mb-5 font-display font-black text-[12px] tracking-wider shadow-lg">
            <Ico d={I.fire} size={14} />残り 6社限定！
          </div>
          <h2 className="font-display font-black text-white text-[28px] sm:text-[40px] leading-[1.3]">
            まずは <span className="text-[#fbbf24]">30分の無料相談</span> から、<br />はじめませんか？
          </h2>
          <p className="mt-4 text-[14px] text-white/75 leading-[1.95]">
            2営業日以内にご返信いたします。営業や売り込みは一切ありません。
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-2xl">
          <form
            action="https://formsubmit.co/info@gdesign-partners.co.jp"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input type="hidden" name="_subject" value="【DX LP】無料相談お申込み" />
            <input type="hidden" name="_next" value="https://gdesign-partners.co.jp/lp/dx/thanks" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="flex items-center gap-1.5 mb-1.5">
                  <span className="font-display font-bold text-[12px] text-[#0a1f3d]">お名前</span>
                  <span className="text-[10px] text-white bg-[#dc2626] px-1.5 py-0.5 rounded font-bold">必須</span>
                </label>
                <input name="name" type="text" required placeholder="山田 太郎"
                  className="w-full bg-white border-2 border-[#e2e8f0] focus:border-[#15447b] text-[#0a1f3d] px-4 h-12 text-[14px] outline-none transition placeholder:text-[#94a3b8] rounded-xl" />
              </div>
              <div>
                <label className="flex items-center gap-1.5 mb-1.5">
                  <span className="font-display font-bold text-[12px] text-[#0a1f3d]">会社名</span>
                  <span className="text-[10px] text-white bg-[#dc2626] px-1.5 py-0.5 rounded font-bold">必須</span>
                </label>
                <input name="company" type="text" required placeholder="株式会社〇〇"
                  className="w-full bg-white border-2 border-[#e2e8f0] focus:border-[#15447b] text-[#0a1f3d] px-4 h-12 text-[14px] outline-none transition placeholder:text-[#94a3b8] rounded-xl" />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-1.5 mb-1.5">
                <span className="font-display font-bold text-[12px] text-[#0a1f3d]">メールアドレス</span>
                <span className="text-[10px] text-white bg-[#dc2626] px-1.5 py-0.5 rounded font-bold">必須</span>
              </label>
              <input name="email" type="email" required placeholder="name@company.co.jp"
                className="w-full bg-white border-2 border-[#e2e8f0] focus:border-[#15447b] text-[#0a1f3d] px-4 h-12 text-[14px] outline-none transition placeholder:text-[#94a3b8] rounded-xl" />
            </div>

            <div>
              <label className="block font-display font-bold text-[12px] text-[#0a1f3d] mb-1.5">ご希望プラン</label>
              <select name="plan"
                className="w-full bg-white border-2 border-[#e2e8f0] focus:border-[#15447b] text-[#0a1f3d] px-4 h-12 text-[14px] outline-none transition rounded-xl">
                <option value="">まだ決めていない</option>
                <option value="業務診断（¥200,000〜）">業務診断（¥200,000〜）</option>
                <option value="仕組み構築（¥600,000〜）">仕組み構築（¥600,000〜）</option>
                <option value="全社DX再設計（¥1,200,000〜）">全社DX再設計（¥1,200,000〜）</option>
                <option value="月額伴走（¥50,000〜/月）">月額伴走（¥50,000〜/月）</option>
              </select>
            </div>

            <div>
              <label className="block font-display font-bold text-[12px] text-[#0a1f3d] mb-1.5">現状の課題・ご相談内容</label>
              <textarea name="challenge" rows={4}
                placeholder="例：請求業務に毎月20時間以上かかっており、自動化を検討中..."
                className="w-full bg-white border-2 border-[#e2e8f0] focus:border-[#15447b] text-[#0a1f3d] px-4 py-3 text-[14px] outline-none transition placeholder:text-[#94a3b8] resize-none rounded-xl" />
            </div>

            <button type="submit"
              className="group w-full h-14 bg-gradient-to-b from-[#fbbf24] to-[#c9a227] hover:from-[#f0d87a] hover:to-[#fbbf24] text-[#0a1f3d] font-black text-[16px] rounded-full shadow-[0_6px_0_#92760e,0_8px_24px_rgba(201,162,39,0.4)] hover:shadow-[0_3px_0_#92760e,0_4px_12px_rgba(201,162,39,0.4)] hover:translate-y-[3px] transition-all flex items-center justify-center gap-3 mt-2">
              無料相談を申し込む
              <Ico d={I.arrow} size={18} />
            </button>
            <p className="text-[11px] text-[#94a3b8] text-center">送信後、2営業日以内にご連絡します</p>
          </form>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center text-sm text-blue-200">
          <a href="tel:080-3777-5996" className="hover:text-white transition-colors">📞 080-3777-5996</a>
          <a href="mailto:info@gdesign-partners.co.jp" className="hover:text-white transition-colors">✉ info@gdesign-partners.co.jp</a>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────
export default function DxLpPage() {
  useEffect(() => {
    trackEvent("page_view_lp_dx", { page: "/lp/dx" });
  }, []);

  return (
    <>
      <FV />
      <SeatBar />
      <Problem />
      <Solution />
      <WhyUs />
      <Plans />
      <Flow />
      <FAQ />
      <CTA />
    </>
  );
}
