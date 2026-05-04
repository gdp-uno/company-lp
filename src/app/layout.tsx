import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "株式会社Growth Design Partners | ブランディング・DX・業務設計",
    template: "%s | Growth Design Partners",
  },
  description:
    "中小企業・スタートアップの成長を支援。ブランドパッケージ・DX推進・eラーニング・撮影代行など、ビジネスの課題をワンストップで解決します。大阪市北区拠点。",
  keywords: "ブランディング,DX,業務設計,大阪,スタートアップ,中小企業",
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社Growth Design Partners",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        {children}
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
