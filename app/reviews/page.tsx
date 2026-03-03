import { getReviews } from '@/lib/cosmic';
import ReviewCard from '@/components/ReviewCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Reviews — Golden Hills Ranch',
  description: 'Read what our customers say about our premium grass-fed beef, raw milk, and artisanal cheese.',
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + (r.metadata?.rating ?? 0), 0) / reviews.length
      : 0;

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero */}
      <section className="bg-ranch-800 text-white section-padding">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Customer Reviews
          </h1>
          <p className="text-lg sm:text-xl text-ranch-200 max-w-2xl mx-auto mb-6">
            Hear what our customers have to say about Golden Hills Ranch products.
          </p>
          {reviews.length > 0 && (
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-6 h-6 ${star <= Math.round(averageRating) ? 'text-ranch-300' : 'text-ranch-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-ranch-200 font-medium">
                {averageRating.toFixed(1)} average from {reviews.length} review
                {reviews.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          {reviews.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-earth-500 text-lg">No reviews yet. Be the first to share your experience!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} showProduct={true} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}