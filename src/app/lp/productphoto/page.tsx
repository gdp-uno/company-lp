"use client";

import { useState, useEffect } from "react";

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
  camera: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  refresh:"M23 4v6h-6M1 20v-6h6M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15",
  star:   "M12 2l2.6 6.5L22 9.5l-5.5 4.7L18 22l-6-3.5L6 22l1.5-7.8L2 9.5l7.4-1z",
  users:  "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  package:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12",
  layers: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5",
  map:    "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  gift:   "M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",
  plus:   "M12 5v14M5 12h14",
  minus:  "M5 12h14",
  mail:   "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zM3 7l9 6 9-6",
};

// ── Shared ────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-plex-mono text-[10px] sm:text-[11px] tracking-[0.35em] font-bold text-[#C4973E] mb-4 uppercase">{children}</div>
  );
}
function SectionTitle({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h2 className={`font-display font-black text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.3] tracking-[-0.01em] ${dark ? "text-white" : "text-[#1C1C1A]"}`}>
      {children}
    </h2>
  );
}

// ── 01 FV ────────────────────────────────────────────────────────────
function FV() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-[#2C2520] via-[#3C3028] to-[#1A1410] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: "radial-gradient(circle at 70% 40%, rgba(196,151,62,0.35) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-8 bg-white/8 border border-white/15 px-4 py-1.5 rounded-full">
            <Ico d={I.camera} size={13} className="text-[#C4973E]" />
            <span className="font-plex text-[11px] sm:text-[12px] tracking-[0.25em] text-white/70 font-medium">月額定額 商品撮影代行 — EC特化</span>
          </div>

          <h1 className="font-display font-black text-white leading-[1.2] tracking-[-0.02em] text-[40px] sm:text-[56px] lg:text-[64px]">
            撮影を、<br />
            <em className="not-italic text-[#C4973E]">もっと自由に。</em>
          </h1>

          <p className="mt-6 text-[15px] sm:text-[17px] text-white/60 font-medium leading-[1.8] max-w-xl">
            月額定額で商品撮影を継続的に。<br className="hidden sm:block" />
            アパレルから雑貨まで、EC特化の撮影代行サービス。
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={() => trackEvent("click_cta_fv", { position: "fv" })}
              className="inline-flex items-center gap-3 bg-[#C4973E] hover:bg-[#D4A74E] text-[#1A1816] h-14 px-8 font-bold text-[15px] rounded-full shadow-[0_6px_0_#8C6A20] hover:shadow-[0_3px_0_#8C6A20] hover:translate-y-[3px] transition-all"
            >
              無料相談・お見積りはこちら
              <Ico d={I.arrow} size={16} />
            </a>
            <p className="text-[12px] text-white/40">担当者よりご返信いたします</p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-[11px] text-white/30 tracking-[0.2em] font-medium mb-4">対応プラットフォーム</p>
            <div className="flex flex-wrap gap-2">
              {["楽天市場", "Amazon", "Yahoo! ショッピング", "Shopify", "BASE", "その他もご相談可"].map((p) => (
                <span key={p} className="text-[11px] text-white/50 border border-white/15 px-3 py-1 rounded-full">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 02 Problems ──────────────────────────────────────────────────────
function Problems() {
  const problems = [
    {
      num: "01",
      title: "依頼先探しが\n毎回大変",
      desc: "新商品のたびにカメラマンを探して見積もりを取って。その繰り返しに、時間もコストもかかりすぎている。",
    },
    {
      num: "02",
      title: "必要なものだけを\n選べない",
      desc: "不要なオプションまで含んだパッケージしかなく、使わない分まで費用が発生している。",
    },
    {
      num: "03",
      title: "品質がばらついて\nブランドが統一できない",
      desc: "カメラマンが変わるたびにトーンが違う。ECページに一体感が出ず、ブランドイメージが損なわれる。",
    },
  ];

  return (
    <section id="problems" className="py-20 sm:py-28 bg-[#FAFAF8]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <Label>Pain Points</Label>
        <SectionTitle>こんなお悩み、ありませんか？</SectionTitle>
        <p className="mt-4 text-[14px] sm:text-[15px] text-[#6B6760] leading-[1.8]">EC事業者の「撮影あるある」をまとめました</p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.num} className="bg-white border border-[#E0DAD2] rounded-2xl p-8 hover:border-[#C4973E]/50 hover:shadow-md transition-all">
              <div className="font-plex-mono text-[#C4973E]/50 text-[32px] font-bold leading-none mb-5">{p.num}</div>
              <h3 className="font-display font-black text-[#1C1C1A] text-[18px] leading-[1.4] mb-4 whitespace-pre-line">{p.title}</h3>
              <p className="text-[13px] text-[#6B6760] leading-[1.8]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 03 Features ──────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      icon: I.package,
      title: "送るだけで完結",
      desc: "依頼先を探す、見積もりを取る、段取りをする——その手間をすべて代行。商品を送るだけで、プロの撮影データが届きます。",
    },
    {
      icon: I.layers,
      title: "内容を自由に組み替えられる",
      desc: "商品点数が少ない月はモデル撮影のカット数を増やしたり、SNS素材の制作に充当したり。必要なものだけを選んでプランを構成できます。",
    },
    {
      icon: I.map,
      title: "郵送 or 出張、どちらも対応",
      desc: "商品を送るだけのOKな郵送と、スタジオ・ロケ地への出張（オプション）を状況に応じて選択可能。関西圏外への対応も承ります。",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#F2EDE6]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <Label>Why Monthly</Label>
        <SectionTitle>月額制だから、撮影がシンプルになる</SectionTitle>
        <p className="mt-4 text-[14px] sm:text-[15px] text-[#6B6760] leading-[1.8]">定額×カスタマイズで、EC撮影の課題をまるごと解決</p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-[#E0DAD2]">
              <div className="w-11 h-11 bg-[#1A1816] rounded-xl flex items-center justify-center mb-6">
                <Ico d={f.icon} size={20} className="text-[#C4973E]" />
              </div>
              <h3 className="font-display font-black text-[#1C1C1A] text-[17px] leading-[1.4] mb-3">{f.title}</h3>
              <p className="text-[13px] text-[#6B6760] leading-[1.8]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 04 Why ───────────────────────────────────────────────────────────
function Why() {
  const reasons = [
    {
      num: "01",
      title: "フルカスタム対応",
      desc: "固定パッケージはなし。毎月の商品ラインナップやブランドの世界観に合わせて撮影内容を一から設計します。",
    },
    {
      num: "02",
      title: "撮影×ブランディング設計のノウハウ",
      desc: "「売れる写真」より「ブランドとして一貫して見える写真」を重視。世界観・トーン・見せ方の設計から一緒に考えます。",
    },
    {
      num: "03",
      title: "定例MTGで継続的に改善",
      desc: "月1回の定例ミーティングで撮影内容を振り返り、次月の方針を一緒に設計。撮って終わりではなく、運用を伴走します。",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#1A1816]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <Label>Why Us</Label>
        <SectionTitle dark>選ばれる理由</SectionTitle>

        <div className="mt-14 space-y-4">
          {reasons.map((r) => (
            <div key={r.num} className="flex gap-6 sm:gap-10 p-7 sm:p-8 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/6 transition-colors">
              <div className="font-plex-mono text-[#C4973E]/40 text-[28px] font-bold leading-none shrink-0 pt-1">{r.num}</div>
              <div>
                <h3 className="font-display font-black text-white text-[17px] sm:text-[19px] leading-[1.4] mb-2">{r.title}</h3>
                <p className="text-[13px] sm:text-[14px] text-white/50 leading-[1.8]">{r.desc}</p>
              </div>
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
    { name: "ライト",      price: "55,000",  cuts: "110カット", note: "商品のみ 約22点（5カット/点）", model: false },
    { name: "スタンダード", price: "110,000", cuts: "220カット", note: "商品のみ 約44点 / 商品+モデル 約22点", model: true, featured: true },
    { name: "プレミアム",  price: "198,000", cuts: "400カット", note: "商品のみ 約80点 / 商品+モデル 約40点", model: true },
  ];
  const options = [
    { name: "出張撮影オプション（交通費別途実費）", price: "+¥30,000〜" },
    { name: "レタッチ強化（切り抜き・シワ取り・カラバリ展開 等）", price: "別途お見積り" },
    { name: "ECサイトアップロード代行", price: "別途お見積り" },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#FAFAF8]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <Label>Pricing</Label>
        <SectionTitle>料金プラン</SectionTitle>
        <p className="mt-4 text-[14px] sm:text-[15px] text-[#6B6760] leading-[1.8] max-w-2xl">
          下記は参考プランです。ヒアリング内容・ご予算に合わせて内容・金額を一緒に調整します。
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl p-8 border-2 ${p.featured ? "bg-[#1A1816] border-[#C4973E]" : "bg-white border-[#E0DAD2] hover:border-[#C4973E]/40"} transition-all`}>
              {p.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C4973E] text-[#1A1816] px-4 py-1 rounded-full font-bold text-[11px] tracking-wider">人気プラン</div>
              )}
              <div className={`font-display font-bold text-[13px] tracking-wider mb-4 ${p.featured ? "text-[#C4973E]" : "text-[#6B6760]"}`}>{p.name}</div>
              <div className={`font-plex font-black text-[36px] tabular-nums leading-none mb-1 ${p.featured ? "text-white" : "text-[#1C1C1A]"}`}>
                ¥{p.price}
                <span className={`text-[13px] font-medium ml-1 ${p.featured ? "text-white/40" : "text-[#A09C98]"}`}>/月〜（税別）</span>
              </div>
              <div className={`text-[12px] font-bold mt-3 mb-2 ${p.featured ? "text-[#C4973E]" : "text-[#1C1C1A]"}`}>{p.cuts}</div>
              <p className={`text-[12px] leading-[1.7] ${p.featured ? "text-white/50" : "text-[#6B6760]"}`}>{p.note}</p>
              <div className={`mt-4 flex items-center gap-2 text-[11px] ${p.featured ? "text-white/40" : "text-[#A09C98]"}`}>
                <Ico d={I.check} size={12} />
                レタッチ込み・最低契約3ヶ月
              </div>
              {!p.model && (
                <div className={`mt-1 flex items-center gap-2 text-[11px] ${p.featured ? "text-white/30" : "text-[#A09C98]"}`}>
                  <span className="w-3 h-3 inline-block" />
                  モデル撮影なし
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#F2EDE6] border border-[#E0DAD2] rounded-2xl p-7">
          <div className="font-display font-black text-[#1C1C1A] text-[15px] mb-2">上記はあくまで目安です。詳細はヒアリング後にご提案します。</div>
          <p className="text-[13px] text-[#6B6760] leading-[1.8] mb-4">商品ジャンル・月間アイテム数・ご予算をヒアリングし、内容と金額を一緒に調整します。「もう少し予算を抑えたい」「モデル撮影を中心にしたい」といったご要望も、まずはお気軽にご相談ください。</p>
          <div className="flex flex-wrap gap-2">
            {["カット数の調整", "撮影スタイルの変更", "予算に合わせた組み替え", "オプションの追加・除外"].map((t) => (
              <span key={t} className="text-[11px] bg-white border border-[#E0DAD2] text-[#6B6760] px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="font-display font-bold text-[13px] text-[#6B6760] tracking-wider mb-4">オプション</div>
          <div className="space-y-2">
            {options.map((o) => (
              <div key={o.name} className="flex items-center justify-between gap-4 py-3 border-b border-[#E0DAD2]">
                <span className="text-[13px] text-[#1C1C1A]">{o.name}</span>
                <span className="text-[13px] font-bold text-[#C4973E] shrink-0">{o.price}</span>
              </div>
            ))}
          </div>
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
    <section id="flow" className="py-20 sm:py-28 bg-[#F2EDE6]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <Label>Flow</Label>
        <SectionTitle>ご利用の流れ</SectionTitle>
        <p className="mt-4 text-[14px] sm:text-[15px] text-[#6B6760] leading-[1.8]">お問い合わせから最短1週間でスタートできます</p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%+10px)] w-[calc(100%-20px)] h-px bg-[#E0DAD2] z-0" />
              )}
              <div className="relative bg-white rounded-2xl p-7 border border-[#E0DAD2] hover:border-[#C4973E]/40 transition-colors z-10">
                <div className="font-plex-mono text-[#C4973E] text-[11px] tracking-[0.3em] font-bold mb-4">STEP {s.n}</div>
                <h3 className="font-display font-black text-[#1C1C1A] text-[16px] leading-[1.4] mb-3">{s.title}</h3>
                <p className="text-[12px] text-[#6B6760] leading-[1.8]">{s.desc}</p>
              </div>
            </div>
          ))}
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
    { q: "最低何点から依頼できますか？", a: "点数制限はありません。月々のアイテム数が少ない場合は、余ったカット数をモデル撮影や別素材の制作に充当したり、割引のご提案も可能です。お気軽にご相談ください。" },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAFAF8]">
      <div className="max-w-[740px] mx-auto px-4 sm:px-8">
        <Label>FAQ</Label>
        <SectionTitle>よくあるご質問</SectionTitle>

        <div className="mt-12 space-y-2">
          {items.map((item, i) => (
            <div key={i} className="border border-[#E0DAD2] rounded-xl bg-white overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display font-bold text-[14px] sm:text-[15px] text-[#1C1C1A]">{item.q}</span>
                <Ico d={open === i ? I.minus : I.plus} size={16} className="text-[#C4973E] shrink-0" />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[13px] text-[#6B6760] leading-[1.9] border-t border-[#E0DAD2] pt-4">
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
  const perks = [
    { icon: I.users,   title: "専任ディレクター付き", desc: "撮影方針のご提案・ブランディング設計のサポート（初回2ヶ月間）" },
    { icon: I.map,     title: "出張撮影オプション料 無料", desc: "初回2ヶ月間。交通費のみ別途実費請求" },
    { icon: I.star,    title: "レタッチ強化オプション 無料", desc: "切り抜き・シワ取り・カラバリ展開など。初回2ヶ月間" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#2C2520] via-[#3C3028] to-[#1A1410] overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-15"
        style={{ backgroundImage: "radial-gradient(circle at 30% 60%, rgba(196,151,62,0.4) 0%, transparent 50%)" }} />
      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-8">
        <Label>Limited Offer</Label>
        <SectionTitle dark>今だけ。先行3社限定の<br className="hidden sm:block" />特別特典。</SectionTitle>
        <p className="mt-5 text-[14px] sm:text-[15px] text-white/50 leading-[1.8] max-w-xl">
          サービス開始にあたり、最初の3社様に限り通常プランに下記の特典をご用意しています。
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {perks.map((p, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors">
              <div className="w-10 h-10 bg-[#C4973E]/15 rounded-xl flex items-center justify-center mb-5">
                <Ico d={p.icon} size={18} className="text-[#C4973E]" />
              </div>
              <h3 className="font-display font-black text-white text-[15px] leading-[1.4] mb-2">{p.title}</h3>
              <p className="text-[12px] text-white/45 leading-[1.8]">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 inline-flex items-center gap-3 bg-[#C4973E]/15 border border-[#C4973E]/30 rounded-full px-6 py-3">
          <div className="w-2 h-2 rounded-full bg-[#C4973E] animate-pulse" />
          <span className="text-[#C4973E] font-bold text-[13px]">残り受付枠 あと3社</span>
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

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F2EDE6]">
      <div className="max-w-[680px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-10">
          <Label>Contact</Label>
          <SectionTitle>まずは無料相談から。</SectionTitle>
          <p className="mt-4 text-[14px] sm:text-[15px] text-[#6B6760] leading-[1.9] max-w-lg mx-auto">
            撮影内容・ご予算・商品ジャンルなど、どんなことでもお気軽にご相談ください。
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-[#E0DAD2] shadow-sm">
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
                  <span className="font-display font-bold text-[12px] text-[#1C1C1A]">お名前</span>
                  <span className="text-[10px] text-white bg-[#1A1816] px-1.5 py-0.5 rounded font-bold">必須</span>
                </label>
                <input name="name" type="text" required placeholder="山田 太郎"
                  className="w-full bg-white border-2 border-[#E0DAD2] focus:border-[#C4973E] text-[#1C1C1A] px-4 h-12 text-[14px] outline-none transition placeholder:text-[#A09C98] rounded-xl" />
              </div>
              <div>
                <label className="flex items-center gap-1.5 mb-1.5">
                  <span className="font-display font-bold text-[12px] text-[#1C1C1A]">会社名</span>
                  <span className="text-[10px] text-white bg-[#1A1816] px-1.5 py-0.5 rounded font-bold">必須</span>
                </label>
                <input name="company" type="text" required placeholder="株式会社〇〇"
                  className="w-full bg-white border-2 border-[#E0DAD2] focus:border-[#C4973E] text-[#1C1C1A] px-4 h-12 text-[14px] outline-none transition placeholder:text-[#A09C98] rounded-xl" />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-1.5 mb-1.5">
                <span className="font-display font-bold text-[12px] text-[#1C1C1A]">メールアドレス</span>
                <span className="text-[10px] text-white bg-[#1A1816] px-1.5 py-0.5 rounded font-bold">必須</span>
              </label>
              <input name="email" type="email" required placeholder="name@company.co.jp"
                className="w-full bg-white border-2 border-[#E0DAD2] focus:border-[#C4973E] text-[#1C1C1A] px-4 h-12 text-[14px] outline-none transition placeholder:text-[#A09C98] rounded-xl" />
            </div>

            <div>
              <label className="block font-display font-bold text-[12px] text-[#1C1C1A] mb-1.5">月間アイテム数（目安）</label>
              <select name="items"
                className="w-full bg-white border-2 border-[#E0DAD2] focus:border-[#C4973E] text-[#1C1C1A] px-4 h-12 text-[14px] outline-none transition rounded-xl">
                <option value="">まだ決めていない</option>
                <option value="〜20点">〜20点</option>
                <option value="21〜50点">21〜50点</option>
                <option value="51〜100点">51〜100点</option>
                <option value="100点以上">100点以上</option>
              </select>
            </div>

            <div>
              <label className="block font-display font-bold text-[12px] text-[#1C1C1A] mb-1.5">ご質問・ご要望</label>
              <textarea name="message" rows={4}
                placeholder="例：アパレル中心で月30点ほど。モデル撮影も検討したい、など"
                className="w-full bg-white border-2 border-[#E0DAD2] focus:border-[#C4973E] text-[#1C1C1A] px-4 py-3 text-[14px] outline-none transition placeholder:text-[#A09C98] resize-none rounded-xl" />
            </div>

            <button type="submit"
              className="w-full h-14 bg-[#1A1816] hover:bg-[#2C2926] text-white font-bold text-[15px] rounded-full shadow-[0_6px_0_#0A0806] hover:shadow-[0_3px_0_#0A0806] hover:translate-y-[3px] transition-all flex items-center justify-center gap-3 mt-2">
              無料相談・お見積りはこちら
              <Ico d={I.arrow} size={18} className="text-[#C4973E]" />
            </button>
            <p className="text-[11px] text-[#A09C98] text-center">送信後、担当者より2営業日以内にご連絡します</p>
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
      <Problems />
      <Features />
      <Why />
      <Pricing />
      <Flow />
      <FAQ />
      <SpecialOffer />
      <CTA />
    </>
  );
}
