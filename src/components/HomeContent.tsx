"use client";

import { useState } from "react";
import CategoryGrid from "./CategoryGrid";
import ProductGrid from "./ProductGrid";

interface Product {
  name: string;
  slug: string;
  category: string;
  price: string;
  imageCount: number;
}

export default function HomeContent({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <CategoryGrid onSelectCategory={setSelectedCategory} />
      <ProductGrid products={products} initialCategory={selectedCategory} />
    </>
  );
}
