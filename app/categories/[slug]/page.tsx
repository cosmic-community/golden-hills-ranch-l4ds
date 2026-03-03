// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getProductsByCategory } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return { title: 'Category Not Found — Golden Hills Ranch' };
  }

  return {
    title: `${category.metadata?.name || category.title} — Golden Hills Ranch`,
    description: category.metadata?.description?.slice(0, 160) || '',
  };
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(category.id);

  const name = category.metadata?.name || category.title;
  const description = category.metadata?.description || '';
  const image = category.metadata?.image;

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-earth-900 text-white overflow-hidden">
        {image && (
          <div className="absolute inset-0">
            <img
              src={`${image.imgix_url}?w=1920&h=600&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        )}
        <div className="relative section-padding">
          <div className="container-wide text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-earth-300 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
              <span>/</span>
              <span className="text-white">{name}</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{name}</h1>
            {description && (
              <p className="text-lg sm:text-xl text-earth-200 max-w-2xl mx-auto">{description}</p>
            )}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <p className="text-earth-600">
              {products.length} product{products.length !== 1 ? 's' : ''} in this category
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-earth-500 text-lg mb-4">
                No products in this category yet.
              </p>
              <Link href="/products" className="btn-primary">
                Browse All Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}