"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  slug: string;
  category: string;
  price: string;
  imageCount: number;
}

interface ProductGridProps {
  products: Product[];
  initialCategory?: string;
}

const filters = ["All", "Men", "Women", "Wedding", "Lingerie"];

export default function ProductGrid({ products, initialCategory = "All" }: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  
  // Sync if initialCategory prop changes (e.g. from CategoryGrid click in a parent component)
  useEffect(() => {
    setActiveFilter(initialCategory);
  }, [initialCategory]);

  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="product-grid" className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-heading text-4xl md:text-5xl text-brand-black text-center mb-12">
          Featured Pieces
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border text-sm uppercase tracking-widest transition-colors duration-300 ${
                activeFilter.toLowerCase() === filter.toLowerCase()
                  ? "bg-brand-black text-brand-ivory border-brand-black"
                  : "bg-transparent text-brand-black border-brand-beige hover:border-brand-black"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.slug}
              >
                <ProductCard 
                  name={product.name}
                  slug={product.slug}
                  category={product.category}
                  price={product.price}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
