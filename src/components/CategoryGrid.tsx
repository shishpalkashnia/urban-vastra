"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [
  { id: "men", name: "Men" },
  { id: "women", name: "Women" },
  { id: "wedding", name: "Wedding" },
  { id: "lingerie", name: "Lingerie" }
];

interface CategoryGridProps {
  onSelectCategory: (category: string) => void;
}

export default function CategoryGrid({ onSelectCategory }: CategoryGridProps) {
  return (
    <section id="collections" className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-heading text-4xl md:text-5xl text-brand-black text-center mb-16">
          Collections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden aspect-[4/5] md:aspect-[3/4] bg-brand-beige/30"
              onClick={() => {
                onSelectCategory(cat.id);
                document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <motion.div
                className="w-full h-full relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Fallback color if image not found, but we will use Next Image */}
                <Image
                  src={`/categories/${cat.id}/cover.jpg`}
                  alt={`${cat.name} Collection`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              <div className="absolute bottom-8 left-8">
                <h3 className="font-heading text-3xl text-brand-ivory tracking-wider">
                  {cat.name}
                </h3>
                <span className="mt-2 text-brand-gold text-sm uppercase tracking-widest flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Shop Now <span className="ml-2">→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
