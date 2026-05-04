const beforeItems = ["請求書発行", "経費精算", "受発注", "顧客リスト管理", "日次レポート"];
const afterItems = [
  { label: "請求書発行", done: true },
  { label: "経費精算", done: true },
  { label: "受発注", done: true },
  { label: "顧客リスト管理", done: true },
  { label: "経営戦略", focus: true },
];

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12l5 5L20 6" />
  </svg>
);
const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  </svg>
);
const TargetIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function DxDiagram() {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-3">
        {/* Before */}
        <div>
          <div className="text-center pb-2.5 mb-3 border-b-2 border-[#94a3b8]">
            <div className="font-plex-mono text-[10px] tracking-[0.3em] text-[#64748b]">BEFORE</div>
            <div className="font-display font-bold text-[#475569] text-[14px] mt-1">現状（手動）</div>
          </div>
          <div className="space-y-1.5">
            {beforeItems.map((item) => (
              <div key={item} className="flex items-center gap-2 px-2.5 py-2 bg-[#f1f5f9] border border-[#e2e8f0] text-[12px] text-[#475569] rounded">
                <span className="text-[#94a3b8] shrink-0"><ClockIcon /></span>
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t-2 border-dashed border-[#cbd5e1]">
            <div className="font-plex-mono text-[9px] text-[#64748b]">月の合計工数</div>
            <div className="font-plex font-black text-[#475569] text-[28px] tabular-nums leading-none">
              84<span className="text-[12px] font-bold text-[#94a3b8] ml-1">時間</span>
            </div>
          </div>
        </div>

        {/* After */}
        <div>
          <div className="text-center pb-2.5 mb-3 border-b-2 border-[#c9a227]">
            <div className="font-plex-mono text-[10px] tracking-[0.3em] text-[#c9a227]">AFTER</div>
            <div className="font-display font-bold text-[#15447b] text-[14px] mt-1">仕組み化</div>
          </div>
          <div className="space-y-1.5">
            {afterItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-2.5 py-2 text-[12px] rounded border ${
                  item.focus
                    ? "bg-[#15447b] border-[#15447b] text-white font-bold"
                    : "bg-[#f0f6fc] border-[#15447b]/15 text-[#475569]"
                }`}
              >
                <span className={item.focus ? "text-[#fbbf24]" : "text-[#22c55e]"}>
                  {item.focus ? <TargetIcon /> : <CheckIcon />}
                </span>
                <span className={`truncate ${item.done ? "line-through opacity-60" : ""}`}>{item.label}</span>
                {item.focus && <span className="ml-auto text-[#fbbf24] text-[10px] font-bold">集中</span>}
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t-2 border-dashed border-[#c9a227]">
            <div className="font-plex-mono text-[9px] text-[#dc2626]">月の削減工数</div>
            <div className="font-plex font-black text-[#dc2626] text-[28px] tabular-nums leading-none">
              -72<span className="text-[12px] font-bold text-[#dc2626]/70 ml-1">時間</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center arrow */}
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center w-10 h-10 bg-[#fbbf24] rounded-full shadow-lg ring-4 ring-white">
        <span className="text-[#0a1f3d]"><ArrowIcon /></span>
      </div>
    </div>
  );
}
