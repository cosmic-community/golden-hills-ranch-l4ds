// app/products/[slug]/page.tsx
import { getProductBySlug, getReviewsByProduct, getProducts } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import StarRating from '@/components/StarRating';
import ReviewCard from '@/components/ReviewCard';
import ProductCard from '@/components/ProductCard';
import { getMetafieldValue } from '@/types';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found — Golden Hills Ranch' };
  }

  return {
    title: `${product.metadata?.name || product.title} — Golden Hills Ranch`,
    description: product.metadata?.description?.slice(0, 160) || '',
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const reviews = await getReviewsByProduct(product.id);
  const allProducts = await getProducts();
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const name = product.metadata?.name || product.title;
  const description = product.metadata?.description || '';
  const price = product.metadata?.price;
  const compareAtPrice = product.metadata?.compare_at_price;
  const weightSize = product.metadata?.weight_size || '';
  const inventoryStatus = getMetafieldValue(product.metadata?.inventory_status);
  const featuredImage = product.metadata?.featured_image;
  const gallery = product.metadata?.gallery;
  const category = product.metadata?.category;

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + (r.metadata?.rating ?? 0), 0) / reviews.length
      : 0;

  const inventoryColor =
    inventoryStatus === 'In Stock'
      ? 'bg-sage-100 text-sage-800'
      : inventoryStatus === 'Low Stock'
        ? 'bg-ranch-100 text-ranch-800'
        : inventoryStatus === 'Out of Stock'
          ? 'bg-red-100 text-red-800'
          : 'bg-cream-200 text-earth-700';

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-cream-200">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-earth-500">
            <Link href="/" className="hover:text-ranch-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-ranch-600 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-earth-800 font-medium">{name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              {featuredImage && (
                <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
                  <img
                    src={`${featuredImage.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
                    alt={name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {gallery && gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-3">
                  {gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded-lg overflow-hidden bg-white shadow-sm"
                    >
                      <img
                        src={`${img.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                        alt={`${name} gallery ${idx + 1}`}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              {category && (
                <Link
                  href={`/categories/${category.slug}`}
                  className="inline-block text-sm font-semibold text-ranch-600 uppercase tracking-wider hover:text-ranch-700 transition-colors"
                >
                  {category.metadata?.name || category.title}
                </Link>
              )}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-900">
                {name}
              </h1>

              {reviews.length > 0 && (
                <div className="flex items-center gap-3">
                  <StarRating rating={Math.round(averageRating)} size="md" />
                  <span className="text-earth-500 text-sm">
                    ({reviews.length} review{reviews.length !== 1 ? 's' : ''})
                  </span>
                </div>
              )}

              <div className="flex items-baseline gap-4">
                {price !== undefined && price !== null && (
                  <span className="text-3xl font-bold text-earth-900">
                    ${Number(price).toFixed(2)}
                  </span>
                )}
                {compareAtPrice !== undefined && compareAtPrice !== null && compareAtPrice > (price ?? 0) && (
                  <span className="text-lg text-earth-400 line-through">
                    ${Number(compareAtPrice).toFixed(2)}
                  </span>
                )}
              </div>

              {weightSize && (
                <p className="text-earth-600">
                  <span className="font-medium">Weight/Size:</span> {weightSize}
                </p>
              )}

              {inventoryStatus && (
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${inventoryColor}`}>
                  {inventoryStatus}
                </span>
              )}

              {description && (
                <div className="prose prose-earth max-w-none">
                  <p className="text-earth-600 leading-relaxed text-base">{description}</p>
                </div>
              )}

              <div className="pt-4 space-y-3">
                <button className="btn-primary w-full text-base py-4">
                  Add to Cart
                </button>
                <p className="text-center text-xs text-earth-400">
                  Free shipping on orders over $100
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      {reviews.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <h2 className="text-3xl font-bold text-earth-900 mb-8">
              Customer Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} showProduct={false} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-3xl font-bold text-earth-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}