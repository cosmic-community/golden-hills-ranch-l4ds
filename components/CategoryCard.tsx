import Link from 'next/link';
import type { ProductCategory } from '@/types';

interface CategoryCardProps {
  category: ProductCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const name = category.metadata?.name || category.title;
  const description = category.metadata?.description || '';
  const image = category.metadata?.image;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] flex items-end"
    >
      {/* Background Image */}
      {image ? (
        <img
          src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
          alt={name}
          width={400}
          height={300}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-sage-600 to-sage-800" />
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 via-earth-900/30 to-transparent" />

      {/* Content */}
      <div className="relative w-full p-6">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1 group-hover:text-ranch-300 transition-colors">
          {name}
        </h3>
        {description && (
          <p className="text-earth-200 text-sm line-clamp-2">{description}</p>
        )}
        <span className="inline-flex items-center text-ranch-300 text-sm font-medium mt-3 group-hover:gap-2 gap-1 transition-all duration-200">
          Shop Now
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}