import Link from 'next/link';
import type { ProductCategory } from '@/types';

interface CategoryFilterProps {
  categories: ProductCategory[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  if (categories.length === 0) return null;

  return (
    <div className="mb-10">
      <h3 className="text-sm font-semibold text-earth-500 uppercase tracking-wider mb-4">
        Filter by Category
      </h3>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/products"
          className="px-4 py-2 rounded-full bg-ranch-600 text-white text-sm font-medium hover:bg-ranch-700 transition-colors"
        >
          All Products
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="px-4 py-2 rounded-full bg-white border border-cream-300 text-earth-700 text-sm font-medium hover:bg-ranch-50 hover:border-ranch-300 hover:text-ranch-700 transition-colors"
          >
            {category.metadata?.name || category.title}
          </Link>
        ))}
      </div>
    </div>
  );
}