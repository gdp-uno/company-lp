const routineTasks = [
  { icon: "📧", label: "問い合わせ対応" },
  { icon: "📊", label: "月次集計・報告書" },
  { icon: "📄", label: "書類・請求書作成" },
  { icon: "✍️", label: "議事録・記録" },
  { icon: "🔔", label: "社内申請・承認" },
];

const strategicTasks = [
  { icon: "📈", label: "事業戦略の立案" },
  { icon: "🤝", label: "重要商談・提案" },
  { icon: "💡", label: "新規事業の企画" },
  { icon: "👥", label: "採用・組織づくり" },
];

export default function DxDiagram() {
  return (
    <div className="w-full max-w-lg mx-auto select-none">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center">

        {/* Before */}
        <div className="space-y-1.5">
          <p className="text-center text-xs font-bold text-red-300 mb-2 tracking-wider uppercase">Before</p>
          {routineTasks.map((task) => (
            <div
              key={task.label}
              className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-xs text-white"
            >
              <span className="text-base leading-none">{task.icon}</span>
              <span className="leading-tight">{task.label}</span>
            </div>
          ))}
          <div className="mt-3 bg-red-400/20 border border-red-400/40 rounded-lg px-3 py-2.5 text-center">
            <p className="text-xs text-red-200 font-bold">社長・責任者</p>
            <p className="text-[10px] text-red-300 mt-0.5">定型業務に追われる日々</p>
          </div>
        </div>

        {/* Center arrow + engine */}
        <div className="flex flex-col items-center gap-1 px-1">
          <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center shadow-lg">
            <span className="text-white text-lg">⚙</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-[#c9a227]/60" />
            <svg width="20" height="10" viewBox="0 0 20 10">
              <polygon points="0,0 20,0 10,10" fill="rgba(201,162,39,0.8)" />
            </svg>
          </div>
          <p className="text-[9px] text-[#f0d87a] font-bold text-center leading-tight">AI<br/>自動化</p>
        </div>

        {/* After */}
        <div className="space-y-1.5">
          <p className="text-center text-xs font-bold text-green-300 mb-2 tracking-wider uppercase">After</p>
          {strategicTasks.map((task) => (
            <div
              key={task.label}
              className="flex items-center gap-2 bg-white/15 border border-green-400/30 rounded-lg px-3 py-2 text-xs text-white"
            >
              <span className="text-base leading-none">{task.icon}</span>
              <span className="leading-tight">{task.label}</span>
            </div>
          ))}
          <div className="mt-3 bg-green-400/20 border border-green-400/40 rounded-lg px-3 py-2.5 text-center">
            <p className="text-xs text-green-200 font-bold">社長・責任者</p>
            <p className="text-[10px] text-green-300 mt-0.5">経営戦略に集中</p>
          </div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="mt-4 text-center">
        <p className="text-[10px] text-blue-300 tracking-wider">
          Powered by <span className="text-[#f0d87a] font-bold">Growth Design Partners</span>
        </p>
      </div>
    </div>
  );
}
