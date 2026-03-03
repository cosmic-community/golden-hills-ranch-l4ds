import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-earth-900 text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://imgix.cosmicjs.com/89e7e870-16b3-11f1-95d6-291bc45ac05c-autopilot-photo-1618164436241-4473940d1f5c-1772509579269.jpeg?w=1920&h=900&fit=crop&auto=format,compress"
          alt="Golden hills landscape"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-950/80 via-earth-900/60 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-ranch-600/90 text-cream-100 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
            Farm to Table Since 1985
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Premium{' '}
            <span className="text-ranch-400">Grass-Fed</span>
            <br />
            Ranch Products
          </h1>
          <p className="text-lg sm:text-xl text-earth-200 leading-relaxed mb-10 max-w-lg">
            Naturally raised beef, fresh raw milk, and handcrafted artisanal cheese — delivered directly from Golden Hills Ranch to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products" className="btn-primary text-base px-8 py-4 shadow-lg shadow-ranch-600/30">
              Shop Products
            </Link>
            <Link href="/categories" className="btn-outline border-white/40 text-white hover:bg-white/10 hover:border-white/60 text-base px-8 py-4">
              Browse Categories
            </Link>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="relative bg-earth-950/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-earth-300 text-sm">
              <span className="text-lg">🌿</span>
              <span>100% Grass-Fed</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-earth-300 text-sm">
              <span className="text-lg">🚚</span>
              <span>Free Shipping $100+</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-earth-300 text-sm">
              <span className="text-lg">❄️</span>
              <span>Cold-Chain Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-earth-300 text-sm">
              <span className="text-lg">✅</span>
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}