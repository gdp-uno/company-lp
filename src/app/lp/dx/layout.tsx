import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DX・業務効率化支援 | 定型業務から解放されて経営戦略に集中する",
  description:
    "スタートアップ・少人数組織の社長・責任者へ。定型業務をAIで自動化し、経営戦略に集中できる環境をつくります。初回相談1時間無料＋簡易レポート進呈。限定10社。",
};

export default function DxLpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 限定枠バナー */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#c9a227] text-white text-xs font-bold text-center py-1.5 tracking-wide">
        ⚡ 限定10社・現在4社決定済み — 残り6社のみ受付中
      </div>

      <header className="fixed top-7 left-0 right-0 z-50 bg-[#15447b]/95 backdrop-blur-sm shadow-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <Link href="/">
            <Image
              src="/logo-white.png"
              alt="Growth Design Partners"
              width={150}
              height={38}
              className="h-7 w-auto"
              priority
            />
          </Link>
          <a
            href="#contact"
            className="bg-[#c9a227] hover:bg-[#d4b444] text-white text-sm font-bold px-4 py-2 rounded transition-colors"
          >
            無料相談する
          </a>
        </div>
      </header>

      <main className="pt-[calc(1.75rem+3.5rem)]">{children}</main>

      <footer className="bg-[#0a1f3d] text-blue-300 text-xs text-center py-4">
        © {new Date().getFullYear()} 株式会社Growth Design Partners
      </footer>
    </>
  );
}
