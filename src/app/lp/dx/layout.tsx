import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DX・業務効率化支援 | 生成AI×ノーコードで現場を変える",
  description:
    "Claude Code活用で従来の1/3〜1/5の工数を実現。業務ヒアリングから自動化構築・内製化支援まで一気通貫。スポット¥200,000〜、サブスク¥50,000〜。まずは無料相談。",
};

export default function DxLpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#15447b]/95 backdrop-blur-sm shadow-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <Link href="/">
            <Image
              src="/logo-black.png"
              alt="Growth Design Partners"
              width={150}
              height={38}
              className="h-7 w-auto"
              style={{ filter: "invert(1)" }}
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
      <main className="pt-14">{children}</main>
      <footer className="bg-[#0a1f3d] text-blue-300 text-xs text-center py-4">
        © {new Date().getFullYear()} 株式会社Growth Design Partners
      </footer>
    </>
  );
}
