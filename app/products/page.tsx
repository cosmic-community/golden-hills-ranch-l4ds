import { getProducts, getCategories } from '@/lib/cosmic';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products — Golden Hills Ranch',
  description: 'Browse our selection of premium grass-fed beef, raw milk, and artisanal cheese products.',
};

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero */}
      <section className="bg-earth-900 text-white section-padding">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-lg sm:text-xl text-earth-200 max-w-2xl mx-auto">
            Naturally raised, carefully crafted. From our ranch to your table.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <CategoryFilter categories={categories} />

          {products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-earth-500 text-lg">No products found. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}