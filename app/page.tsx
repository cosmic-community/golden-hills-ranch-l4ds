import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryShowcase from '@/components/CategoryShowcase';
import ReviewsSection from '@/components/ReviewsSection';
import { getProducts, getCategories, getReviews } from '@/lib/cosmic';

export default async function HomePage() {
  const [products, categories, reviews] = await Promise.all([
    getProducts(),
    getCategories(),
    getReviews(),
  ]);

  const featuredProducts = products.slice(0, 6);
  const topReviews = reviews
    .filter((r) => (r.metadata?.rating ?? 0) >= 4)
    .slice(0, 3);

  return (
    <>
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
      <CategoryShowcase categories={categories} />
      <ReviewsSection reviews={topReviews.length > 0 ? topReviews : reviews.slice(0, 3)} />
    </>
  );
}