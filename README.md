# Golden Hills Ranch — Premium Farm-to-Table Online Store

![App Preview](https://imgix.cosmicjs.com/89e7e870-16b3-11f1-95d6-291bc45ac05c-autopilot-photo-1618164436241-4473940d1f5c-1772509579269.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautifully designed online storefront for Golden Hills Ranch — a premium farm-to-table business specializing in grass-fed beef, raw milk, and artisanal cheese products. Built with Next.js 16, Tailwind CSS, and Cosmic CMS.

## Features

- 🏠 **Stunning Homepage** — Hero banner, featured products, category showcase, and customer testimonials
- 🥩 **Product Catalog** — Browse all products with category filtering, pricing, and inventory status
- 📄 **Product Detail Pages** — Rich product pages with image galleries, reviews, and related products
- 🏷️ **Category Pages** — Browse products organized by category with descriptions
- ⭐ **Customer Reviews** — Star ratings, verified purchase badges, and product-linked reviews
- 📱 **Fully Responsive** — Looks great on mobile, tablet, and desktop
- 🚀 **Server-Side Rendered** — Next.js 16 App Router for optimal performance and SEO
- 🎨 **Modern Rustic Design** — Warm earth-tone palette with elegant typography

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=69a6592642ed116de4c9f32b&clone_repository=69a65a8742ed116de4c9f357)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online store with products (including images, pricing, description, and inventory status), product categories, and customer reviews. User instructions: Golden Hills Ranch is an online store specializing in premium grass-fed beef, raw milk, and artisanal cheese products. The business connects consumers directly with high-quality, naturally-sourced farm products delivered online."

### Code Generation Prompt

> "Build a Next.js application for an online business called "Golden Hills Ranch". The content is managed in Cosmic CMS with the following object types: product-categories, products, customer-reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: Golden Hills Ranch is an online store specializing in premium grass-fed beef, raw milk, and artisanal cheese products. The business connects consumers directly with high-quality, naturally-sourced farm products delivered online."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Cosmic](https://www.cosmicjs.com) — Headless CMS ([docs](https://www.cosmicjs.com/docs))
- [Playfair Display + Inter](https://fonts.google.com/) — Typography

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with the Golden Hills Ranch bucket

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd golden-hills-ranch

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Cosmic credentials

# Start development server
bun dev
```

### Environment Variables

Create a `.env.local` file with:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

### Fetching Products

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Product by Slug

```typescript
const { object: product } = await cosmic.objects
  .findOne({ type: 'products', slug: 'grass-fed-ribeye' })
  .props(['id', 'title', 'slug', 'metadata', 'created_at'])
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with three Cosmic object types:

| Object Type | Slug | Description |
|---|---|---|
| 🏷️ Product Categories | `product-categories` | Categories like Beef, Dairy, Cheese |
| 🥩 Products | `products` | Individual products with pricing and images |
| ⭐ Customer Reviews | `customer-reviews` | Customer testimonials and ratings |

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the repository in [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy!

<!-- README_END -->