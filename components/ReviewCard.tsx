import Link from 'next/link';
import StarRating from '@/components/StarRating';
import type { CustomerReview } from '@/types';

interface ReviewCardProps {
  review: CustomerReview;
  showProduct?: boolean;
}

export default function ReviewCard({ review, showProduct = true }: ReviewCardProps) {
  const reviewerName = review.metadata?.reviewer_name || 'Anonymous';
  const rating = review.metadata?.rating ?? 5;
  const reviewText = review.metadata?.review || '';
  const verifiedPurchase = review.metadata?.verified_purchase ?? false;
  const product = review.metadata?.product;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-200 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-ranch-100 flex items-center justify-center flex-shrink-0">
            <span className="text-ranch-700 font-bold text-sm">
              {reviewerName.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <p className="font-semibold text-earth-900 text-sm">{reviewerName}</p>
            {verifiedPurchase && (
              <span className="inline-flex items-center gap-1 text-xs text-sage-700 font-medium">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified Purchase
              </span>
            )}
          </div>
        </div>
        <StarRating rating={rating} size="sm" />
      </div>

      {/* Review Text */}
      {reviewText && (
        <p className="text-earth-600 text-sm leading-relaxed flex-1 mb-4">
          &ldquo;{reviewText}&rdquo;
        </p>
      )}

      {/* Product Link */}
      {showProduct && product && (
        <div className="mt-auto pt-4 border-t border-cream-100">
          <Link
            href={`/products/${product.slug}`}
            className="text-xs text-ranch-600 hover:text-ranch-700 font-medium transition-colors"
          >
            Re: {product.metadata?.name || product.title} →
          </Link>
        </div>
      )}
    </div>
  );
}