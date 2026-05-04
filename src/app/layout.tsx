import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "株式会社Growth Design Partners | ブランディング・DX・業務設計",
  description:
    "中小企業・スタートアップの成長を支援。ブランドパッケージ・DX推進・eラーニング・撮影代行など、ビジネスの課題をワンストップで解決します。大阪市北区拠点。",
  keywords: "ブランディング,DX,業務設計,大阪,スタートアップ,中小企業,ロゴ制作,LP制作",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社Growth Design Partners",
    title: "株式会社Growth Design Partners | ブランディング・DX・業務設計",
    description:
      "中小企業・スタートアップの成長を支援。ブランドパッケージ・DX推進・eラーニング・撮影代行など、ビジネスの課題をワンストップで解決します。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
