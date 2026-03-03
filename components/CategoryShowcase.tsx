import Link from 'next/link';
import CategoryCard from '@/components/CategoryCard';
import type { ProductCategory } from '@/types';

interface CategoryShowcaseProps {
  categories: ProductCategory[];
}

export default function CategoryShowcase({ categories }: CategoryShowcaseProps) {
  if (categories.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="inline-block text-sage-600 text-sm font-semibold uppercase tracking-wider mb-2">
            Shop by Category
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-900 mb-4">
            Browse Our Range
          </h2>
          <p className="text-earth-500 max-w-xl mx-auto text-lg">
            From premium cuts of grass-fed beef to fresh dairy and artisan cheese.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/categories" className="btn-secondary">
            Explore All Categories →
          </Link>
        </div>
      </div>
    </section>
  );
}