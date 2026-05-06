"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

declare global {
  interface Window { gtag?: (...args: unknown[]) => void; }
}
function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) window.gtag("event", name, params);
}

function Ico({ d, size = 20, className = "" }: { d: string; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const I = {
  arrow:  "M5 12h14M13 6l6 6-6 6",
  check:  "M4 12l5 5L20 6",
  plus:   "M12 5v14M5 12h14",
  minus:  "M5 12h14",
};

// ── 01 FV ────────────────────────────────────────────────────────────
function FV() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0a1f3d] overflow-hidden">
      {/* grid overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      {/* large background number */}
      <div className="absolute bottom-[-2rem] left-4 sm:left-12 font-plex-mono font-black text-[20vw] leading-none text-white/[0.03] select-none pointer-events-none">
        01
      </div>

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-8 w-full pb-16 pt-8 grid lg:grid-cols-[1fr_460px] gap-12 items-center">
        {/* ── left: text ── */}
        <div>
          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-px bg-[#E8602C]" />
            <span className="font-plex-mono text-[11px] tracking-[0.4em] text-[#E8602C] font-bold uppercase">Photo Production Service</span>
          </div>

          {/* headline */}
          <h1 className="font-display font-black text-white leading-[1.1] tracking-[-0.03em]">
            <span className="block text-[clamp(3rem,7vw,6rem)]">撮影を、</span>
            <span className="block text-[clamp(3rem,7vw,6rem)] text-[#E8602C]">もっと自由に。</span>
          </h1>

          <p className="mt-8 text-[15px] sm:text-[17px] text-white/50 font-medium leading-[1.9] max-w-lg">
            月額定額で商品撮影を継続的に。<br />
            アパレルから雑貨まで、EC特化の撮影代行サービス。
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              onClick={() => trackEvent("click_cta_fv", { position: "fv" })}
              className="inline-flex items-center gap-3 bg-[#E8602C] hover:bg-[#ff7240] text-white h-14 px-8 font-bold text-[15px] rounded-full shadow-[0_6px_0_#9c3c15] hover:shadow-[0_3px_0_#9c3c15] hover:translate-y-[3px] transition-all"
            >
              無料相談・お見積り
              <Ico d={I.arrow} size={16} />
            </a>
            <p className="text-[12px] text-white/30">担当者よりご返信いたします</p>
          </div>

          {/* platform strip */}
          <div className="mt-16 pt-8 border-t border-white/8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-plex-mono text-[10px] tracking-[0.3em] text-white/25 uppercase">Platforms</span>
            {["楽天市場", "Amazon", "Yahoo! ショッピング", "Shopify", "BASE", "その他"].map((p) => (
              <span key={p} className="text-[12px] text-white/35 font-medium">{p}</span>
            ))}
          </div>
        </div>

        {/* ── right: studio photo ── */}
        <div className="hidden lg:block relative h-[580px] rounded-2xl overflow-hidden">
          <Image
            src="/images/productphoto/studio.jpg"
            alt="プロフェッショナルな商品撮影スタジオ"
            fill
            priority
            className="object-cover"
          />
          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d]/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f3d]/30 via-transparent to-transparent" />
          {/* coral accent line */}
          <div className="absolute top-6 right-6 w-px h-16 bg-[#E8602C]/60" />
          <div className="absolute top-6 right-6 w-16 h-px bg-[#E8602C]/60" />
          {/* caption */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <span className="font-plex-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">Studio Shot</span>
            <span className="text-[10px] text-white/25">Photo: Pexels</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Stats bar ────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { num: "3", unit: "ヶ月〜", label: "最低契約期間" },
    { num: "5-7", unit: "営業日", label: "撮影〜納品" },
    { num: "¥55,000", unit: "〜/月", label: "ライトプラン" },
    { num: "Full", unit: "Custom", label: "フルカスタム対応" },
  ];
  return (
    <div className="bg-[#15447b]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-7 text-center">
              <div className="font-plex font-black text-white text-[22px] sm:text-[28px] tabular-nums leading-none">
                {s.num}<span className="text-[#E8602C] text-[14px] ml-1">{s.unit}</span>
              </div>
              <div className="mt-2 text-[11px] text-white/40 tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── 02 Problems ──────────────────────────────────────────────────────
function Problems() {
  const problems = [
    { num: "01", title: "依頼先探しが毎回大変", desc: "新商品のたびにカメラマンを探して見積もりを取って。時間もコストもかかりすぎる。" },
    { num: "02", title: "必要なものだけを選べない", desc: "不要なオプションまで含んだパッケージしかなく、使わない分まで費用が発生している。" },
    { num: "03", title: "品質がばらついてブランドが統一できない", desc: "カメラマンが変わるたびにトーンが違う。ECページに一体感が出ない。" },
  ];

  return (
    <section id="problems" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        {/* section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-[#E8602C]" />
          <span className="font-plex-mono text-[11px] tracking-[0.4em] text-[#E8602C] font-bold uppercase">Pain Points</span>
        </div>

        <h2 className="font-display font-black text-[#0a1f3d] text-[28px] sm:text-[40px] leading-[1.2] tracking-[-0.02em] max-w-2xl">
          こんなお悩み、<br />ありませんか？
        </h2>

        <div className="mt-16 space-y-0 divide-y divide-[#E8EEF4]">
          {problems.map((p, i) => (
            <div key={p.num} className={`flex gap-8 sm:gap-16 py-10 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
              <div className="shrink-0 font-plex-mono font-black text-[#0a1f3d]/8 text-[5rem] sm:text-[7rem] leading-none select-none">{p.num}</div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-display font-black text-[#0a1f3d] text-[18px] sm:text-[22px] leading-[1.3] mb-3">{p.title}</h3>
                <p className="text-[14px] text-[#5a7089] leading-[1.9]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 03 Features ──────────────────────────────────────────────────────
function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-[#f0f5fa]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-[#E8602C]" />
          <span className="font-plex-mono text-[11px] tracking-[0.4em] text-[#E8602C] font-bold uppercase">Why Monthly</span>
        </div>

        <h2 className="font-display font-black text-[#0a1f3d] text-[28px] sm:text-[40px] leading-[1.2] tracking-[-0.02em] max-w-2xl mb-16">
          月額制だから、<br />撮影がシンプルになる。
        </h2>

        <div className="grid lg:grid-cols-3 gap-5">
          {[
            { n: "A", title: "送るだけで完結", desc: "依頼先を探す、見積もりを取る——その手間をすべて代行。商品を送るだけで、プロの撮影データが届きます。" },
            { n: "B", title: "内容を自由に組み替えられる", desc: "商品点数が少ない月はモデル撮影を増やしたり、SNS素材に充当したり。必要なものだけを選んで構成できます。" },
            { n: "C", title: "郵送 or 出張、どちらも対応", desc: "商品を送るだけのOKな郵送と、スタジオ・ロケ地への出張を状況に応じて選択可能。全国対応も承ります。" },
          ].map((f) => (
            <div key={f.n} className="group relative bg-white border border-[#dce8f2] rounded-2xl p-8 hover:border-[#15447b] hover:shadow-lg transition-all overflow-hidden">
              <div className="absolute top-4 right-6 font-plex-mono font-black text-[3.5rem] leading-none text-[#0a1f3d]/6 select-none group-hover:text-[#0a1f3d]/10 transition-colors">{f.n}</div>
              <div className="relative">
                <div className="w-1 h-10 bg-[#E8602C] rounded-full mb-6" />
                <h3 className="font-display font-black text-[#0a1f3d] text-[17px] sm:text-[19px] leading-[1.4] mb-3">{f.title}</h3>
                <p className="text-[13px] text-[#5a7089] leading-[1.9]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Gallery (Samples) ────────────────────────────────────────────────
function Gallery() {
  const photos = [
    { src: "/images/productphoto/sample1.jpg", alt: "コスメ スタイリング撮影", category: "コスメ" },
    { src: "/images/productphoto/sample2.jpg", alt: "スキンケア商品撮影", category: "スキンケア" },
    { src: "/images/productphoto/sample3.jpg", alt: "ビューティー商品撮影", category: "ビューティー" },
    { src: "/images/productphoto/sample4.jpg", alt: "フラットレイ撮影", category: "フラットレイ" },
    { src: "/images/productphoto/sample5.jpg", alt: "アパレル撮影", category: "アパレル" },
    { src: "/images/productphoto/sample6.jpg", alt: "バッグ・アクセサリー撮影", category: "バッグ・小物" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0a1f3d] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-[#E8602C]" />
          <span className="font-plex-mono text-[11px] tracking-[0.4em] text-[#E8602C] font-bold uppercase">Samples</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <h2 className="font-display font-black text-white text-[28px] sm:text-[40px] leading-[1.2] tracking-[-0.02em]">
            撮影サンプル
          </h2>
          <p className="text-[13px] text-white/35 max-w-xs leading-relaxed">
            コスメ・アパレル・雑貨まで幅広いジャンルに対応
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((p) => (
            <div key={p.src} className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d]/80 via-[#0a1f3d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[11px] text-white font-bold bg-[#E8602C] px-2.5 py-1 rounded-full">{p.category}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[10px] text-white/15 text-right">Photo: Pexels（イメージ画像）</p>
      </div>
    </section>
  );
}

// ── 04 Why ───────────────────────────────────────────────────────────
function Why() {
  return (
    <section className="py-20 sm:py-28 bg-[#0a1f3d] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(232,96,44,0.1) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(21,68,123,0.6) 0%, transparent 50%)" }} />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-[#E8602C]" />
          <span className="font-plex-mono text-[11px] tracking-[0.4em] text-[#E8602C] font-bold uppercase">Why Us</span>
        </div>

        <h2 className="font-display font-black text-white text-[28px] sm:text-[40px] leading-[1.2] tracking-[-0.02em] mb-16">
          選ばれる3つの理由
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden">
          {[
            { num: "01", title: "フルカスタム対応", desc: "固定パッケージはなし。毎月の商品ラインナップやブランドの世界観に合わせて撮影内容を一から設計します。" },
            { num: "02", title: "撮影×ブランディング設計", desc: "「売れる写真」より「ブランドとして一貫して見える写真」を重視。世界観・トーン・見せ方の設計から一緒に考えます。" },
            { num: "03", title: "定例MTGで継続改善", desc: "月1回の定例ミーティングで撮影内容を振り返り、次月の方針を一緒に設計。撮って終わりではなく、運用を伴走します。" },
          ].map((r) => (
            <div key={r.num} className="bg-[#0a1f3d] p-8 sm:p-10 hover:bg-[#0f2a4d] transition-colors">
              <div className="font-plex-mono text-[#E8602C] text-[11px] tracking-[0.3em] font-bold mb-6">{r.num}</div>
              <h3 className="font-display font-black text-white text-[17px] sm:text-[20px] leading-[1.35] mb-4">{r.title}</h3>
              <p className="text-[13px] text-white/45 leading-[1.9]">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 05 Pricing ───────────────────────────────────────────────────────
function Pricing() {
  const plans = [
    { name: "Light",     jpName: "ライト",      price: "55,000",  cuts: "110カット", detail: "商品のみ 約22点（5カット/点）", model: false },
    { name: "Standard",  jpName: "スタンダード", price: "110,000", cuts: "220カット", detail: "商品+モデル 約22点ずつ対応可",    model: true, featured: true },
    { name: "Premium",   jpName: "プレミアム",   price: "198,000", cuts: "400カット", detail: "商品+モデル 約40点ずつ対応可",    model: true },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-[#E8602C]" />
          <span className="font-plex-mono text-[11px] tracking-[0.4em] text-[#E8602C] font-bold uppercase">Pricing</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <h2 className="font-display font-black text-[#0a1f3d] text-[28px] sm:text-[40px] leading-[1.2] tracking-[-0.02em]">
            料金プラン
          </h2>
          <p className="text-[13px] text-[#5a7089] leading-[1.8] max-w-sm">
            下記は参考プランです。ヒアリング内容・ご予算に合わせて内容・金額を一緒に調整します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl overflow-hidden border-2 transition-all ${p.featured ? "border-[#E8602C] shadow-[0_0_0_4px_rgba(232,96,44,0.1)]" : "border-[#dce8f2] hover:border-[#15447b]"}`}>
              {p.featured && (
                <div className="bg-[#E8602C] text-white text-[11px] font-bold tracking-wider text-center py-2">人気プラン</div>
              )}
              <div className={`p-8 ${p.featured ? "bg-[#0a1f3d]" : "bg-white"}`}>
                <div className="flex items-baseline justify-between mb-1">
                  <span className={`font-plex-mono text-[11px] tracking-wider font-bold ${p.featured ? "text-[#E8602C]" : "text-[#15447b]"}`}>{p.name}</span>
                  <span className={`text-[12px] ${p.featured ? "text-white/30" : "text-[#5a7089]"}`}>{p.jpName}</span>
                </div>
                <div className={`font-plex font-black text-[34px] sm:text-[38px] tabular-nums leading-none mt-4 ${p.featured ? "text-white" : "text-[#0a1f3d]"}`}>
                  ¥{p.price}
                </div>
                <div className={`text-[12px] mt-1 ${p.featured ? "text-white/40" : "text-[#5a7089]"}`}>/月〜（税別）</div>
                <div className={`mt-5 pt-5 border-t ${p.featured ? "border-white/10" : "border-[#dce8f2]"}`}>
                  <div className={`font-bold text-[13px] mb-2 ${p.featured ? "text-[#E8602C]" : "text-[#0a1f3d]"}`}>{p.cuts}</div>
                  <p className={`text-[12px] leading-[1.8] ${p.featured ? "text-white/45" : "text-[#5a7089]"}`}>{p.detail}</p>
                  <div className={`mt-3 flex items-center gap-1.5 text-[11px] ${p.featured ? "text-white/30" : "text-[#5a7089]"}`}>
                    <Ico d={I.check} size={11} />
                    レタッチ込み・最低契約3ヶ月
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* custom note */}
        <div className="mt-8 border border-[#dce8f2] rounded-2xl p-7 flex flex-col sm:flex-row gap-6">
          <div className="shrink-0">
            <div className="w-10 h-10 bg-[#E8602C]/10 rounded-xl flex items-center justify-center">
              <span className="font-plex-mono text-[#E8602C] font-black text-[13px]">+</span>
            </div>
          </div>
          <div>
            <div className="font-display font-black text-[#0a1f3d] text-[15px] mb-2">上記はあくまで目安。内容はヒアリング後に一緒に設計します。</div>
            <p className="text-[13px] text-[#5a7089] leading-[1.8] mb-3">「もう少し予算を抑えたい」「モデル撮影を中心にしたい」といったご要望も歓迎。まずはお気軽にご相談ください。</p>
            <div className="flex flex-wrap gap-2">
              {["カット数の調整", "撮影スタイルの変更", "予算に合わせた組み替え", "オプションの追加・除外"].map((t) => (
                <span key={t} className="text-[11px] bg-[#f0f5fa] text-[#15447b] font-medium px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* options */}
        <div className="mt-8 divide-y divide-[#dce8f2]">
          <div className="font-plex-mono text-[10px] tracking-[0.3em] text-[#5a7089] pb-3">OPTIONS</div>
          {[
            { name: "出張撮影オプション（交通費別途実費）", price: "+¥30,000〜" },
            { name: "レタッチ強化（切り抜き・シワ取り・カラバリ展開 等）", price: "別途お見積り" },
            { name: "ECサイトアップロード代行", price: "別途お見積り" },
          ].map((o) => (
            <div key={o.name} className="flex justify-between items-center py-4 gap-4">
              <span className="text-[13px] text-[#0a1f3d]">{o.name}</span>
              <span className="text-[13px] font-bold text-[#E8602C] shrink-0">{o.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 06 Flow ──────────────────────────────────────────────────────────
function Flow() {
  const steps = [
    { n: "01", title: "無料相談", desc: "フォームからお気軽にご連絡ください。2営業日以内にご返信します。" },
    { n: "02", title: "ヒアリング・プラン決定", desc: "商品・ブランドのご要望を丁寧にヒアリングし、最適なプランをご提案します。" },
    { n: "03", title: "商品発送 or 日程調整", desc: "郵送 or 出張の日程をセット。関西圏外への出張対応も可能です。" },
    { n: "04", title: "撮影・納品・毎月継続", desc: "撮影完了から5〜7営業日以内に納品。毎月の定例MTGで改善を繰り返します。" },
  ];

  return (
    <section id="flow" className="py-20 sm:py-28 bg-[#f0f5fa]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-[#E8602C]" />
          <span className="font-plex-mono text-[11px] tracking-[0.4em] text-[#E8602C] font-bold uppercase">Flow</span>
        </div>
        <h2 className="font-display font-black text-[#0a1f3d] text-[28px] sm:text-[40px] leading-[1.2] tracking-[-0.02em] mb-4">
          ご利用の流れ
        </h2>
        <p className="text-[14px] text-[#5a7089] mb-16">お問い合わせから最短1週間でスタートできます</p>

        <div className="relative">
          {/* connecting line desktop */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-[#dce8f2]" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="flex lg:block items-start gap-5">
                  <div className="relative z-10 w-16 h-16 shrink-0 rounded-2xl bg-white border-2 border-[#dce8f2] flex items-center justify-center shadow-sm">
                    <span className="font-plex-mono font-black text-[#0a1f3d] text-[13px]">{s.n}</span>
                  </div>
                  <div className="lg:mt-6">
                    <h3 className="font-display font-black text-[#0a1f3d] text-[16px] leading-[1.4] mb-2">{s.title}</h3>
                    <p className="text-[12px] text-[#5a7089] leading-[1.8]">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 07 FAQ ───────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const items = [
    { q: "途中でプランの変更はできますか？", a: "はい、変更可能です。翌月分の変更は前月15日までにご連絡ください。" },
    { q: "撮影場所はどこですか？", a: "関西圏のスタジオ（または商品郵送）が基本です。出張オプションで全国対応も可能です（交通費実費別途）。" },
    { q: "モデルの手配はお願いできますか？", a: "可能です。キャスティング費用は別途お見積りになります。イメージに合うモデルをご提案します。" },
    { q: "納期はどのくらいかかりますか？", a: "撮影完了から通常5〜7営業日以内に納品します。レタッチオプションの内容によって前後する場合があります。" },
    { q: "最低何点から依頼できますか？", a: "点数制限はありません。アイテム数が少ない月は余ったカット数をモデル撮影や別素材に充当したり、割引のご提案も可能です。" },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[740px] mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-[#E8602C]" />
          <span className="font-plex-mono text-[11px] tracking-[0.4em] text-[#E8602C] font-bold uppercase">FAQ</span>
        </div>
        <h2 className="font-display font-black text-[#0a1f3d] text-[28px] sm:text-[36px] leading-[1.2] tracking-[-0.02em] mb-12">
          よくあるご質問
        </h2>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="border border-[#dce8f2] rounded-xl bg-white overflow-hidden hover:border-[#15447b] transition-colors">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display font-bold text-[14px] sm:text-[15px] text-[#0a1f3d]">{item.q}</span>
                <Ico d={open === i ? I.minus : I.plus} size={16} className="text-[#E8602C] shrink-0" />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[13px] text-[#5a7089] leading-[1.9] border-t border-[#dce8f2] pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 08 Special Offer ─────────────────────────────────────────────────
function SpecialOffer() {
  return (
    <section className="py-20 sm:py-28 bg-[#E8602C] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] rounded-full border-[60px] border-white/5 pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-white/50" />
          <span className="font-plex-mono text-[11px] tracking-[0.4em] text-white/70 font-bold uppercase">Limited Offer</span>
        </div>
        <h2 className="font-display font-black text-white text-[28px] sm:text-[44px] leading-[1.2] tracking-[-0.02em] mb-6">
          今だけ。先行3社限定の<br className="hidden sm:block" />特別特典。
        </h2>
        <p className="text-[15px] text-white/70 leading-[1.8] max-w-xl mb-12">
          サービス開始にあたり、最初の3社様に限り通常プランに下記の特典をご用意しています。
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { title: "専任ディレクター付き", period: "初回2ヶ月間", desc: "撮影方針のご提案・ブランディング設計のサポート" },
            { title: "出張撮影オプション料 無料", period: "初回2ヶ月間", desc: "※交通費は別途実費請求" },
            { title: "レタッチ強化オプション 無料", period: "初回2ヶ月間", desc: "切り抜き・シワ取り・カラバリ展開など" },
          ].map((p, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-colors">
              <div className="inline-block bg-white/20 text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full mb-4">{p.period}</div>
              <h3 className="font-display font-black text-white text-[16px] leading-[1.4] mb-2">{p.title}</h3>
              <p className="text-[12px] text-white/60 leading-[1.8]">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 inline-flex items-center gap-3 bg-white text-[#E8602C] rounded-full px-6 py-3">
          <div className="w-2 h-2 rounded-full bg-[#E8602C] animate-pulse" />
          <span className="font-bold text-[14px]">残り受付枠 あと3社</span>
        </div>
      </div>
    </section>
  );
}

// ── 09 CTA ───────────────────────────────────────────────────────────
function CTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    trackEvent("submit_form_productphoto", { position: "cta" });
    if (submitted) e.preventDefault();
    else setSubmitted(true);
  }

  const inputCls = "w-full bg-white border-2 border-[#dce8f2] focus:border-[#15447b] text-[#0a1f3d] px-4 h-12 text-[14px] outline-none transition placeholder:text-[#a0b4c8] rounded-xl";

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f0f5fa]">
      <div className="max-w-[700px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <span className="w-8 h-px bg-[#E8602C]" />
            <span className="font-plex-mono text-[11px] tracking-[0.4em] text-[#E8602C] font-bold uppercase">Contact</span>
            <span className="w-8 h-px bg-[#E8602C]" />
          </div>
          <h2 className="font-display font-black text-[#0a1f3d] text-[28px] sm:text-[40px] leading-[1.2] tracking-[-0.02em] mb-4">
            まずは無料相談から。
          </h2>
          <p className="text-[14px] text-[#5a7089] leading-[1.9] max-w-md mx-auto">
            撮影内容・ご予算・商品ジャンルなど、どんなことでもお気軽にご相談ください。
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-[#dce8f2] shadow-sm">
          <form
            action="https://formsubmit.co/info@gdesign-partners.co.jp"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input type="hidden" name="_subject" value="【商品撮影LP】無料相談・お見積もり" />
            <input type="hidden" name="_next" value="https://gdesign-partners.co.jp/lp/productphoto/thanks" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="flex items-center gap-1.5 mb-1.5">
                  <span className="font-display font-bold text-[12px] text-[#0a1f3d]">お名前</span>
                  <span className="text-[10px] text-white bg-[#E8602C] px-1.5 py-0.5 rounded font-bold">必須</span>
                </label>
                <input name="name" type="text" required placeholder="山田 太郎" className={inputCls} />
              </div>
              <div>
                <label className="flex items-center gap-1.5 mb-1.5">
                  <span className="font-display font-bold text-[12px] text-[#0a1f3d]">会社名</span>
                  <span className="text-[10px] text-white bg-[#E8602C] px-1.5 py-0.5 rounded font-bold">必須</span>
                </label>
                <input name="company" type="text" required placeholder="株式会社〇〇" className={inputCls} />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-1.5 mb-1.5">
                <span className="font-display font-bold text-[12px] text-[#0a1f3d]">メールアドレス</span>
                <span className="text-[10px] text-white bg-[#E8602C] px-1.5 py-0.5 rounded font-bold">必須</span>
              </label>
              <input name="email" type="email" required placeholder="name@company.co.jp" className={inputCls} />
            </div>

            <div>
              <label className="block font-display font-bold text-[12px] text-[#0a1f3d] mb-1.5">月間アイテム数（目安）</label>
              <select name="items" className={inputCls}>
                <option value="">まだ決めていない</option>
                <option value="〜20点">〜20点</option>
                <option value="21〜50点">21〜50点</option>
                <option value="51〜100点">51〜100点</option>
                <option value="100点以上">100点以上</option>
              </select>
            </div>

            <div>
              <label className="block font-display font-bold text-[12px] text-[#0a1f3d] mb-1.5">ご質問・ご要望</label>
              <textarea name="message" rows={4}
                placeholder="例：アパレル中心で月30点ほど。モデル撮影も検討したい、など"
                className="w-full bg-white border-2 border-[#dce8f2] focus:border-[#15447b] text-[#0a1f3d] px-4 py-3 text-[14px] outline-none transition placeholder:text-[#a0b4c8] resize-none rounded-xl" />
            </div>

            <button type="submit"
              className="w-full h-14 bg-[#E8602C] hover:bg-[#ff7240] text-white font-bold text-[16px] rounded-full shadow-[0_6px_0_#9c3c15] hover:shadow-[0_3px_0_#9c3c15] hover:translate-y-[3px] transition-all flex items-center justify-center gap-3 mt-2">
              無料相談・お見積りはこちら
              <Ico d={I.arrow} size={18} />
            </button>
            <p className="text-[11px] text-[#a0b4c8] text-center">送信後、担当者より2営業日以内にご連絡します</p>
          </form>
        </div>
      </div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────
export default function ProductphotoLpPage() {
  useEffect(() => {
    trackEvent("page_view_lp_productphoto", { page: "/lp/productphoto" });
  }, []);

  return (
    <>
      <FV />
      <StatsBar />
      <Problems />
      <Features />
      <Gallery />
      <Why />
      <Pricing />
      <Flow />
      <FAQ />
      <SpecialOffer />
      <CTA />
    </>
  );
}
