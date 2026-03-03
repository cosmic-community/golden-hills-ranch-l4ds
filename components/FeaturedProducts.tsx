import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/types';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="inline-block text-ranch-600 text-sm font-semibold uppercase tracking-wider mb-2">
            From Our Ranch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-900 mb-4">
            Featured Products
          </h2>
          <p className="text-earth-500 max-w-xl mx-auto text-lg">
            Hand-selected premium products, raised naturally on our Montana ranch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/products" className="btn-outline">
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}