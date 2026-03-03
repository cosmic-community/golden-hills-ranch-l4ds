import Link from 'next/link';
import ReviewCard from '@/components/ReviewCard';
import StarRating from '@/components/StarRating';
import type { CustomerReview } from '@/types';

interface ReviewsSectionProps {
  reviews: CustomerReview[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  if (reviews.length === 0) return null;

  const avgRating =
    reviews.reduce((sum, r) => sum + (r.metadata?.rating ?? 0), 0) / reviews.length;

  return (
    <section className="section-padding bg-cream-100">
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="inline-block text-ranch-600 text-sm font-semibold uppercase tracking-wider mb-2">
            What Our Customers Say
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-900 mb-4">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <StarRating rating={Math.round(avgRating)} size="lg" />
            <span className="text-earth-600 font-medium">
              {avgRating.toFixed(1)} out of 5
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} showProduct={true} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/reviews" className="btn-outline">
            Read All Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}