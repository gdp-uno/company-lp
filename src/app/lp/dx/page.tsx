"use client";

import { useEffect } from "react";
import DxDiagram from "@/components/lp/DxDiagram";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

const spotPlans = [
  {
    name: "スポット①",
    price: "¥200,000",
    target: "初めて業務効率化やDXに取り組む企業様向け",
    period: "0.5〜1.0カ月",
    hours: "15時間",
    contents: [
      "業務ヒアリング（2時間）",
      "簡易効率化（10時間）",
      "操作マニュアル作成（2時間）",
      "現場レクチャー（1時間）",
    ],
  },
  {
    name: "スポット②",
    price: "¥450,000",
    target: "複数の既存業務の効率化を目指す企業様向け",
    period: "1.5〜2.0カ月",
    hours: "35時間",
    highlight: true,
    contents: [
      "業務ヒアリング（3時間）",
      "Asis/ToBe分析（2時間）",
      "標準効率化（25時間）",
      "操作マニュアル作成（3.5時間）",
      "現場レクチャー（1.5時間）",
    ],
  },
  {
    name: "スポット③",
    price: "¥900,000",
    target: "部門・組織全体の変革を目指す企業様向け",
    period: "1.5〜2.0カ月",
    hours: "75時間",
    contents: [
      "複数部門の業務ヒアリング（6時間）",
      "Asis/ToBe分析（6時間）",
      "複雑業務の効率化（56時間）",
      "操作マニュアル作成（5時間）",
      "現場レクチャー（2時間）",
    ],
  },
];

const subscPlans = [
  {
    name: "サブスク①",
    price: "¥50,000",
    salePrice: "¥45,000",
    period: "縛りなし",
    hours: "—",
    target: "自社で管理するため、アドバイスをもらえるだけで良い企業様向け",
    contents: ["月次動作確認MTG（月1回）", "問い合わせ対応（メール/電話/Web）", "月2回回答（営業日）"],
  },
  {
    name: "サブスク②",
    price: "¥120,000",
    salePrice: "¥105,000",
    period: "3カ月〜",
    hours: "10時間/月",
    target: "エラー改修によって仕組みを維持するだけで良い企業様向け",
    contents: ["サブスク①の内容すべて", "既存システムの軽微なバグ修正・改修・拡張", "既存システムの監視"],
  },
  {
    name: "サブスク③",
    price: "¥300,000",
    salePrice: "¥250,000",
    period: "3カ月〜",
    hours: "30時間/月",
    highlight: true,
    target: "仕組みを維持しつつ、少しずつ効率化範囲を広げたい企業様向け",
    contents: ["サブスク②の内容すべて", "月1回の改善提案・棚卸し", "新規効率化提案（スポット①相当）"],
  },
  {
    name: "サブスク④",
    price: "¥500,000",
    salePrice: "¥420,000",
    period: "3カ月〜",
    hours: "50時間/月",
    target: "仕組みを維持しつつ、より多く効率化範囲を広げたい企業様向け",
    contents: ["サブスク②の内容すべて", "月1回の改善提案・棚卸し", "新規効率化提案（スポット②相当）"],
  },
];

const differences = [
  {
    icon: "🤖",
    title: "AI活用自動化",
    body: "Claude Code活用自動化で、従来の1/3〜1/5の工数を実現。最先端のAIを現場に直結させます。",
  },
  {
    icon: "🏭",
    title: "業界特化（準備中）",
    body: "製造業の生産管理・不動産の物件管理など、業種特化テンプレートとノウハウで即戦力の仕組みを提供。",
  },
  {
    icon: "📚",
    title: "内製化支援",
    body: "導入後、クライアント自身が拡張・改修できるよう教育・マニュアル化を徹底。依存関係を作りません。",
  },
  {
    icon: "📊",
    title: "実績の可視化",
    body: "過去プロジェクトで平均○○%の業務効率化を実現。定量的な根拠で効果を提示します。",
  },
  {
    icon: "🤝",
    title: "伴走型支援",
    body: "導入支援から内製化完了まで継続サポート。「入れたら終わり」ではなく、定着するまで一緒に走ります。",
  },
];

const flow = [
  { step: "01", title: "無料相談（Formで事前回答）", body: "まずフォームにご記入ください。事前情報を基に準備して臨みます。" },
  { step: "02", title: "情報収集ヒアリング＋方針意見交換", body: "オンラインで業務課題を深掘り。方向性を口頭で合わせます（簡易ヒアリング）。" },
  { step: "03", title: "プランご提案", body: "ヒアリング内容をもとに最適なプランと概算をご提案します。" },
  { step: "04", title: "面談後、生成AIで議事録＋簡易レポート提出", body: "面談後ベライチで「課題整理・方針まとめ」レポートを無料提出。そのまま依頼しなくてもOK。" },
  { step: "05", title: "ご契約・キックオフ", body: "ご納得いただけたらご契約。すぐに構築を開始します。" },
];

const faqs = [
  {
    q: "ITの知識がなくても大丈夫ですか？",
    a: "大丈夫です。業務の流れさえ教えていただければ、技術的な部分は全て当社が担当します。完成後の操作マニュアルと現場レクチャーも含まれています。",
  },
  {
    q: "どんな業務を効率化できますか？",
    a: "メール・チャット対応の自動化、データ集計・レポート作成、書類作成、社内申請ワークフロー、顧客管理など、繰り返し発生するデジタル業務全般が対象です。",
  },
  {
    q: "上限時間を超えた場合はどうなりますか？",
    a: "スポットプランは¥12,000/時間、サブスクプランは¥10,000/時間で別途精算となります。事前にご連絡の上、超過する場合はご確認をとってから進めます。",
  },
  {
    q: "スポットとサブスクの違いは何ですか？",
    a: "スポットは「初期構築」に特化した一度きりのプランです。サブスクは構築後の保守・改善・拡張を継続的に行うプランです。両方を同時に申し込むと初回割引が適用されます。",
  },
  {
    q: "リモートのみの対応ですか？",
    a: "基本はリモート対応です。ただし対面が必要な場合は別途ご相談ください。問い合わせ対応に現地訪問が必要な場合は移動時間も対応時間に含みます。",
  },
];

export default function DxLpPage() {
  useEffect(() => {
    trackEvent("page_view_lp_dx", { page: "/lp/dx" });
  }, []);

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    trackEvent("generate_lead", {
      event_category: "lp_dx",
      event_label: "contact_form_submit",
    });
    // formsubmitはデフォルト送信なのでpreventDefaultしない
    void e;
  }

  return (
    <>
      {/* FV */}
      <section className="relative bg-[#15447b] text-white overflow-hidden min-h-screen flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 0% 100%, rgba(74,133,196,0.25) 0%, transparent 55%), radial-gradient(ellipse at 100% 0%, rgba(201,162,39,0.15) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full px-4 py-1.5 mb-8 text-sm">
                <span className="text-[#f0d87a] font-medium">★ 初回相談1時間無料 ＋ 簡易レポート進呈</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold leading-[1.2] mb-5">
                定型業務は、<br />
                <span className="text-[#f0d87a]">仕組みに任せて</span><br />
                ください。
              </h1>

              <p className="text-blue-100 text-xl font-medium mb-4 leading-relaxed">
                社長・責任者の時間を、<br className="hidden sm:block" />
                本質的な経営戦略に取り戻す。
              </p>

              <p className="text-blue-200 text-sm leading-relaxed mb-8 max-w-md">
                スタートアップ・少人数組織の社長・責任者は、本来やるべき戦略や営業ではなく、
                日々の定型業務に時間を奪われています。
                その仕組みを設計・自動化し、経営に集中できる環境をつくります。
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="#contact"
                  onClick={() => trackEvent("click_cta_fv", { position: "fv" })}
                  className="inline-block bg-[#c9a227] hover:bg-[#d4b444] text-white font-bold px-8 py-4 rounded-lg text-base transition-colors text-center shadow-lg"
                >
                  無料で相談してみる
                </a>
                <a
                  href="#plans"
                  className="inline-block border-2 border-white/40 hover:border-white/80 text-white px-8 py-4 rounded-lg text-base transition-colors text-center"
                >
                  料金プランを見る
                </a>
              </div>

              <div className="flex flex-wrap gap-6">
                {[
                  { num: "¥200,000〜", label: "スポット" },
                  { num: "¥50,000〜/月", label: "サブスク" },
                  { num: "初回無料", label: "相談+レポート" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-[#f0d87a] font-bold text-lg">{item.num}</div>
                    <div className="text-blue-300 text-xs mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: diagram */}
            <div className="hidden md:flex justify-center">
              <DxDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-4">
            <p className="text-xs font-bold text-[#15447b] tracking-widest uppercase mb-2">PROBLEM</p>
            <h2 className="section-title">
              少人数組織の社長・責任者が<br className="hidden sm:block" />
              陥りがちな「時間の罠」
            </h2>
          </div>
          <p className="text-center text-gray-500 text-sm mb-10">
            スタートアップや少人数チームほど、一人が複数の役割を担います。<br className="hidden sm:block" />
            その結果、本来やるべき仕事に集中できない状態が続きます。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { task: "問い合わせ対応", body: "毎日届くメールや問い合わせの返信・振り分けに1〜2時間消える" },
              { task: "月次集計・報告書", body: "Excelでの手作業集計と報告書作成で月に丸1〜2日かかっている" },
              { task: "書類・請求書作成", body: "フォーマットがバラバラで、都度作り直す非効率が続いている" },
              { task: "議事録・記録", body: "会議のたびに誰かが時間を割いて記録・共有しなければならない" },
              { task: "社内申請・承認", body: "担当者が不在だと承認が止まり、業務全体が滞る" },
              { task: "本来やりたい仕事", body: "「大事なのは分かっている」のに、戦略・営業・採用に手が回らない", highlight: true },
            ].map((item) => (
              <div
                key={item.task}
                className={`flex gap-3 rounded-xl p-4 border ${
                  item.highlight
                    ? "bg-[#15447b] border-[#15447b] text-white"
                    : "bg-[#f8f9fc] border-gray-100"
                }`}
              >
                <span className={`text-lg mt-0.5 flex-shrink-0 ${item.highlight ? "text-[#f0d87a]" : "text-red-400"}`}>
                  {item.highlight ? "→" : "！"}
                </span>
                <div>
                  <p className={`text-sm font-bold mb-0.5 ${item.highlight ? "text-[#f0d87a]" : "text-[#15447b]"}`}>
                    {item.task}
                  </p>
                  <p className={`text-xs leading-relaxed ${item.highlight ? "text-blue-200" : "text-gray-600"}`}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-[#15447b] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-bold text-[#f0d87a] tracking-widest uppercase mb-2">SOLUTION</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            生成AI×業務設計で<br />「現場で動く仕組み」を作ります
          </h2>
          <p className="text-blue-100 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Claude Codeを活用した自動化で、従来の1/3〜1/5の工数を実現。
            ただ作って渡すだけでなく、現場に定着・内製化できるところまで伴走します。
          </p>
          <div className="grid sm:grid-cols-3 gap-5 text-left">
            {[
              { step: "STEP 1", title: "業務ヒアリング", desc: "現場の業務フローを可視化し、自動化・効率化できる箇所を特定" },
              { step: "STEP 2", title: "Asis/ToBe分析", desc: "現状と理想の状態を整理し、最短で効果が出る優先順位を設計" },
              { step: "STEP 3", title: "構築・実装", desc: "AIやノーコードツールを使い、実際の業務で動く仕組みを構築" },
            ].map((item) => (
              <div key={item.step} className="bg-white/10 rounded-xl p-5 border border-white/20">
                <p className="text-[#f0d87a] text-xs font-bold tracking-wider mb-1">{item.step}</p>
                <p className="font-bold text-lg mb-2">{item.title}</p>
                <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-left">
            {[
              { title: "マニュアル作成", desc: "操作方法を分かりやすく文書化" },
              { title: "現場レクチャー", desc: "担当者が自信を持って使えるまで直接指導" },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-xl p-5 border border-white/20 flex gap-3">
                <span className="text-[#c9a227] text-xl">✓</span>
                <div>
                  <p className="font-bold mb-0.5">{item.title}</p>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differences */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#15447b] tracking-widest uppercase mb-2">WHY US</p>
            <h2 className="section-title">他社との5つの違い</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differences.map((d) => (
              <div key={d.title} className="border border-[#ddeaf8] rounded-xl p-6">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="font-bold text-[#15447b] mb-2">{d.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-20 bg-[#f0f6fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#15447b] tracking-widest uppercase mb-2">PLANS</p>
            <h2 className="section-title">料金プラン</h2>
            <p className="text-gray-500 text-sm mt-2">スポットとサブスクを同時申込で初回割引適用</p>
          </div>

          {/* Spot Plans */}
          <h3 className="text-xl font-bold text-[#15447b] mb-2">
            スポットプラン <span className="text-sm font-normal text-gray-500">【初期構築・スポット開発】※1.2〜1.33万円/時ベース</span>
          </h3>
          <p className="text-xs text-gray-500 mb-6">
            ※上限時間超過分は¥12,000/時で別途精算。納品後2ヶ月のバグ修正無料（2回まで）。
          </p>
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {spotPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 flex flex-col ${
                  plan.highlight
                    ? "bg-[#15447b] text-white border-2 border-[#c9a227] shadow-xl"
                    : "bg-white border border-[#ddeaf8] shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block text-xs font-bold bg-[#c9a227] text-white px-2 py-0.5 rounded mb-3 self-start">
                    おすすめ
                  </span>
                )}
                <p className={`text-sm font-bold mb-1 ${plan.highlight ? "text-blue-200" : "text-[#15447b]"}`}>{plan.name}</p>
                <p className={`text-3xl font-bold mb-1 ${plan.highlight ? "text-[#f0d87a]" : "text-[#15447b]"}`}>{plan.price}</p>
                <p className={`text-xs mb-4 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>
                  期間：{plan.period}　上限：{plan.hours}
                </p>
                <p className={`text-xs leading-relaxed mb-4 ${plan.highlight ? "text-blue-100" : "text-gray-600"}`}>
                  {plan.target}
                </p>
                <ul className="space-y-1.5 mt-auto">
                  {plan.contents.map((c) => (
                    <li key={c} className={`text-xs flex items-start gap-1.5 ${plan.highlight ? "text-blue-100" : "text-gray-700"}`}>
                      <span className={plan.highlight ? "text-[#f0d87a]" : "text-[#c9a227]"}>✓</span>
                      {c}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={() => trackEvent("click_plan", { plan: plan.name })}
                  className={`mt-5 block text-center text-sm font-bold py-2 rounded-lg transition-colors ${
                    plan.highlight
                      ? "bg-[#c9a227] hover:bg-[#d4b444] text-white"
                      : "bg-[#15447b] hover:bg-[#1a5494] text-white"
                  }`}
                >
                  このプランで相談する
                </a>
              </div>
            ))}
          </div>

          {/* Subscription Plans */}
          <h3 className="text-xl font-bold text-[#15447b] mb-2">
            サブスクプラン <span className="text-sm font-normal text-gray-500">【継続改善・運用】※1.0〜1.2万円/時ベース</span>
          </h3>
          <p className="text-xs text-gray-500 mb-2">
            ※上限時間超過分は¥10,000/時で別途精算。前月未消化の50%翌月繰越可。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800 mb-6">
            <span className="font-bold">同時申込割引：</span>
            スポットプランと同時申込でサブスクの初回契約金額を割引。
            サブスク①▲¥5,000 / ②▲¥15,000 / ③▲¥50,000 / ④▲¥80,000
            <span className="text-amber-600 ml-1">※更新時は正規料金に戻ります</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subscPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-5 flex flex-col ${
                  plan.highlight
                    ? "bg-[#15447b] text-white border-2 border-[#c9a227] shadow-xl"
                    : "bg-white border border-[#ddeaf8] shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block text-xs font-bold bg-[#c9a227] text-white px-2 py-0.5 rounded mb-2 self-start">
                    おすすめ
                  </span>
                )}
                <p className={`text-sm font-bold mb-0.5 ${plan.highlight ? "text-blue-200" : "text-[#15447b]"}`}>{plan.name}</p>
                <p className={`text-2xl font-bold ${plan.highlight ? "text-[#f0d87a]" : "text-[#15447b]"}`}>{plan.price}<span className="text-sm font-normal">/月</span></p>
                <p className={`text-xs mb-1 line-through ${plan.highlight ? "text-blue-300" : "text-gray-400"}`}>
                  同時申込：{plan.salePrice}/月
                </p>
                <p className={`text-xs mb-3 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>
                  {plan.period}　{plan.hours !== "—" && `上限：${plan.hours}`}
                </p>
                <p className={`text-xs leading-relaxed mb-3 ${plan.highlight ? "text-blue-100" : "text-gray-600"}`}>
                  {plan.target}
                </p>
                <ul className="space-y-1 mt-auto">
                  {plan.contents.map((c) => (
                    <li key={c} className={`text-xs flex items-start gap-1.5 ${plan.highlight ? "text-blue-100" : "text-gray-700"}`}>
                      <span className={plan.highlight ? "text-[#f0d87a]" : "text-[#c9a227]"}>✓</span>
                      {c}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={() => trackEvent("click_plan", { plan: plan.name })}
                  className={`mt-4 block text-center text-xs font-bold py-2 rounded-lg transition-colors ${
                    plan.highlight
                      ? "bg-[#c9a227] hover:bg-[#d4b444] text-white"
                      : "bg-[#15447b] hover:bg-[#1a5494] text-white"
                  }`}
                >
                  相談する
                </a>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white rounded-xl border border-[#ddeaf8] p-5 text-sm text-gray-600 leading-relaxed">
            <p className="font-bold text-[#15447b] mb-2">🎁 全プラン特典</p>
            <p>生成AI学習カリキュラムを追加料金0円で視聴可能。社内でのAI活用・定着をさらに加速させます。</p>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#15447b] tracking-widest uppercase mb-2">FLOW</p>
            <h2 className="section-title">ご利用の流れ</h2>
          </div>
          <div className="space-y-0">
            {flow.map((f, i) => (
              <div key={f.step} className="flex gap-5 relative">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#15447b] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10">
                    {f.step}
                  </div>
                  {i < flow.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#ddeaf8] my-1 min-h-[2rem]" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-[#15447b] mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f0f6fc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#15447b] tracking-widest uppercase mb-2">FAQ</p>
            <h2 className="section-title">よくある質問</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl border border-[#ddeaf8] group">
                <summary className="flex items-start gap-3 px-5 py-4 cursor-pointer font-medium text-[#15447b] list-none select-none text-sm">
                  <span className="text-[#c9a227] font-bold flex-shrink-0">Q.</span>
                  {faq.q}
                  <span className="ml-auto text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 text-xs">▼</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-[#f0f6fc] pt-3 flex gap-3">
                  <span className="text-[#15447b] font-bold flex-shrink-0">A.</span>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 bg-[#15447b] text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-bold text-[#f0d87a] tracking-widest uppercase mb-2">FREE CONSULTATION</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
            まずは無料相談から<br />
            <span className="text-blue-200 text-xl">1時間迄＋簡易レポート提出</span>
          </h2>
          <p className="text-blue-100 text-sm mb-8 leading-relaxed">
            フォームにご記入いただくと、事前情報をもとにした状態でヒアリングに臨めます。<br />
            面談後、生成AIで議事録まとめ＋簡易レポートを無料提出。依頼しなくてもOKです。
          </p>

          <form
            action="https://formsubmit.co/info@gdesign-partners.co.jp"
            method="POST"
            onSubmit={handleFormSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 text-left text-gray-800"
          >
            <input type="hidden" name="_subject" value="【DX LP】無料相談お申込み" />
            <input type="hidden" name="_next" value="https://gdesign-partners.co.jp/lp/dx/thanks" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium text-[#15447b] mb-1">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input type="text" name="name" required placeholder="山田 太郎"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#15447b] focus:ring-1 focus:ring-[#15447b]" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#15447b] mb-1">会社名</label>
                <input type="text" name="company" placeholder="株式会社〇〇"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#15447b] focus:ring-1 focus:ring-[#15447b]" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-medium text-[#15447b] mb-1">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input type="email" name="email" required placeholder="example@company.co.jp"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#15447b] focus:ring-1 focus:ring-[#15447b]" />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-medium text-[#15447b] mb-1">
                気になるプラン
              </label>
              <select name="plan"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#15447b] bg-white">
                <option value="">まだ決まっていない</option>
                <option value="スポット①（¥200,000）">スポット①（¥200,000）</option>
                <option value="スポット②（¥450,000）">スポット②（¥450,000）</option>
                <option value="スポット③（¥900,000）">スポット③（¥900,000）</option>
                <option value="サブスク①（¥50,000/月）">サブスク①（¥50,000/月）</option>
                <option value="サブスク②（¥120,000/月）">サブスク②（¥120,000/月）</option>
                <option value="サブスク③（¥300,000/月）">サブスク③（¥300,000/月）</option>
                <option value="サブスク④（¥500,000/月）">サブスク④（¥500,000/月）</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-medium text-[#15447b] mb-1">
                現在の課題・効率化したい業務
              </label>
              <textarea name="challenge" rows={3} placeholder="例：毎月のExcel集計に3日かかっている、問い合わせ対応を自動化したい"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#15447b] resize-none" />
            </div>

            <div className="mb-5">
              <label className="block text-xs font-medium text-[#15447b] mb-1">希望の連絡方法</label>
              <div className="flex gap-4 text-sm">
                {["メール", "電話", "どちらでも"].map((opt) => (
                  <label key={opt} className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="contact_method" value={opt} defaultChecked={opt === "どちらでも"} />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <button type="submit"
              className="w-full bg-[#c9a227] hover:bg-[#d4b444] text-white font-bold py-3 rounded-lg text-base transition-colors">
              無料相談を申し込む
            </button>
            <p className="text-xs text-gray-400 text-center mt-2">
              送信後、2営業日以内にご連絡します
            </p>
          </form>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center text-sm text-blue-200">
            <a href="tel:080-3777-5996" className="hover:text-white transition-colors">📞 080-3777-5996</a>
            <a href="mailto:info@gdesign-partners.co.jp" className="hover:text-white transition-colors">✉ info@gdesign-partners.co.jp</a>
          </div>
        </div>
      </section>
    </>
  );
}
