import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-900 text-earth-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-ranch-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🐄</span>
              </div>
              <div>
                <span className="block text-lg font-serif font-bold text-white leading-tight">
                  Golden Hills
                </span>
                <span className="block text-xs font-semibold text-ranch-400 uppercase tracking-widest">
                  Ranch
                </span>
              </div>
            </div>
            <p className="text-earth-400 text-sm leading-relaxed">
              Premium grass-fed beef, raw milk, and artisanal cheese delivered from our ranch directly to your table.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-earth-400 hover:text-ranch-400 text-sm transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-earth-400 hover:text-ranch-400 text-sm transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-earth-400 hover:text-ranch-400 text-sm transition-colors">
                  Customer Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-earth-400">
              <li>🌿 100% Grass-Fed</li>
              <li>🚚 Free Shipping Over $100</li>
              <li>❄️ Cold-Chain Delivery</li>
              <li>✅ Satisfaction Guaranteed</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-earth-400">
              <li>📧 hello@goldenhillsranch.com</li>
              <li>📞 (555) 123-4567</li>
              <li>📍 Golden Hills, Montana</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-earth-500 text-sm">
            © {currentYear} Golden Hills Ranch. All rights reserved.
          </p>
          <p className="text-earth-600 text-xs">
            Made with ❤️ on the ranch
          </p>
        </div>
      </div>
    </footer>
  );
}