import { getCategories } from '@/lib/cosmic';
import CategoryCard from '@/components/CategoryCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Categories — Golden Hills Ranch',
  description: 'Browse our product categories including premium grass-fed beef, raw milk, and artisanal cheese.',
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero */}
      <section className="bg-sage-900 text-white section-padding">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Our Categories
          </h1>
          <p className="text-lg sm:text-xl text-sage-200 max-w-2xl mx-auto">
            Explore our range of naturally-sourced farm products, organized for easy browsing.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          {categories.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-earth-500 text-lg">No categories found. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}