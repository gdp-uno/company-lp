import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a1f3d] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-[#15447b] font-bold text-xs">gdp</span>
              </div>
              <span className="font-bold text-sm">Growth Design Partners</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              中小企業・スタートアップの成長を<br />
              デザインの力で支える会社です。
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-3 text-blue-200 uppercase tracking-wider">サービス</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link href="#services" className="hover:text-white transition-colors">DX・業務設計</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">定額ブランドパッケージ</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">eラーニング</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">撮影代行</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-3 text-blue-200 uppercase tracking-wider">会社情報</h3>
            <address className="text-sm text-blue-100 not-italic space-y-1 leading-relaxed">
              <p>株式会社Growth Design Partners</p>
              <p>〒530-0057</p>
              <p>大阪府大阪市北区曽根崎2-16-19</p>
              <p>メッセージ梅田ビル1階 On the UMEDA内</p>
              <p className="mt-2">
                <a href="tel:080-3777-5996" className="hover:text-white transition-colors">TEL: 080-3777-5996</a>
              </p>
              <p>
                <a href="mailto:info@gdesign-partners.co.jp" className="hover:text-white transition-colors">
                  info@gdesign-partners.co.jp
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-[#1a5494] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} 株式会社Growth Design Partners. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link href="/terms" className="hover:text-white transition-colors">利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
