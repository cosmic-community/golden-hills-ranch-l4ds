import Link from 'next/link';
import type { Product } from '@/types';
import { getMetafieldValue } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const name = product.metadata?.name || product.title;
  const price = product.metadata?.price;
  const compareAtPrice = product.metadata?.compare_at_price;
  const inventoryStatus = getMetafieldValue(product.metadata?.inventory_status);
  const featuredImage = product.metadata?.featured_image;
  const category = product.metadata?.category;
  const weightSize = product.metadata?.weight_size;

  const isOnSale = compareAtPrice !== undefined && compareAtPrice !== null && price !== undefined && price !== null && compareAtPrice > price;

  const statusColor =
    inventoryStatus === 'In Stock'
      ? 'bg-sage-100 text-sage-800'
      : inventoryStatus === 'Low Stock'
        ? 'bg-ranch-100 text-ranch-800'
        : inventoryStatus === 'Out of Stock'
          ? 'bg-red-100 text-red-800'
          : 'bg-cream-200 text-earth-700';

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-cream-200"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-100">
        {featuredImage ? (
          <img
            src={`${featuredImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-earth-300">
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {isOnSale && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            SALE
          </span>
        )}

        {inventoryStatus && (
          <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor}`}>
            {inventoryStatus}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {category && (
          <span className="text-xs font-semibold text-ranch-600 uppercase tracking-wider mb-1.5">
            {category.metadata?.name || category.title}
          </span>
        )}

        <h3 className="text-lg font-serif font-bold text-earth-900 group-hover:text-ranch-700 transition-colors mb-2 line-clamp-2">
          {name}
        </h3>

        {weightSize && (
          <p className="text-earth-400 text-sm mb-3">{weightSize}</p>
        )}

        <div className="mt-auto flex items-baseline gap-2 pt-2 border-t border-cream-100">
          {price !== undefined && price !== null && (
            <span className="text-xl font-bold text-earth-900">
              ${Number(price).toFixed(2)}
            </span>
          )}
          {isOnSale && compareAtPrice !== undefined && compareAtPrice !== null && (
            <span className="text-sm text-earth-400 line-through">
              ${Number(compareAtPrice).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}