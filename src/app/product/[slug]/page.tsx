import path from "path";
import { promises as fs } from "fs";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import { MessageCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Product {
  name: string;
  slug: string;
  category: string;
  price: string;
  imageCount: number;
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Read products data
  const dataFilePath = path.join(process.cwd(), "data", "products.json");
  const fileContents = await fs.readFile(dataFilePath, "utf8");
  const products: Product[] = JSON.parse(fileContents);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Generate image paths
  const images = Array.from({ length: product.imageCount }).map(
    (_, i) => `/products/${product.category}/${product.slug}/${i + 1}.jpg`
  );

  return (
    <main className="min-h-screen pt-24 pb-24 bg-brand-ivory">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm tracking-widest uppercase mb-12 text-brand-black/60">
          <Link href="/" className="hover:text-brand-black transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link href="/#collections" className="hover:text-brand-black transition-colors">Collections</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-brand-black">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Gallery */}
          <div className="w-full">
            <ProductGallery images={images} productName={product.name} />
          </div>

          {/* Right: Info */}
          <div className="w-full flex flex-col pt-8 lg:pt-16">
            <h1 className="font-heading text-4xl lg:text-5xl text-brand-black mb-4">
              {product.name}
            </h1>
            
            <p className="text-2xl text-brand-black/80 mb-8 font-light">
              {product.price}
            </p>

            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest text-brand-black/50 block mb-2">Category</span>
              <span className="inline-block border border-brand-beige px-4 py-1 text-sm uppercase tracking-widest text-brand-black">
                {product.category}
              </span>
            </div>

            <div className="prose prose-sm text-brand-black/70 font-light leading-relaxed mb-12">
              <p>
                Experience unparalleled comfort and style with our {product.name}. 
                Crafted from premium materials, this piece embodies the Urban Vastra 
                philosophy of timeless elegance and modern durability.
              </p>
              <ul className="mt-4 space-y-2">
                <li>Premium tailored fit</li>
                <li>Exclusive Urban Vastra fabric</li>
                <li>Designed for modern luxury</li>
              </ul>
            </div>

            <div className="mt-auto pt-8 border-t border-brand-beige/50">
              <a
                href={`https://wa.me/919876543210?text=Hello, I'm interested in the ${product.name} (${product.price}).`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-black text-brand-ivory px-10 py-5 uppercase tracking-widest text-sm font-medium hover:bg-brand-gold hover:text-brand-black transition-colors duration-300"
              >
                <MessageCircle size={20} />
                Inquire via WhatsApp
              </a>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
