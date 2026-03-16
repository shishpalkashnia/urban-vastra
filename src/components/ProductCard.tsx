"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  slug: string;
  category: string;
  price: string;
}

export default function ProductCard({ name, slug, category, price }: ProductCardProps) {
  const imageUrl = `/products/${category}/${slug}/1.jpg`;

  return (
    <Link href={`/product/${slug}`} className="group block w-full">
      <div className="relative overflow-hidden aspect-[3/4] bg-brand-beige/20 mb-4 group-hover:shadow-lg transition-shadow duration-500">
        <motion.div
          className="w-full h-full relative"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            loading="lazy"
          />
        </motion.div>
      </div>
      
      <div className="flex flex-col">
        <h3 className="font-heading text-lg text-brand-black mb-1 group-hover:text-brand-gold transition-colors duration-300">
          {name}
        </h3>
        <span className="text-brand-black/70 text-sm font-medium">{price}</span>
      </div>
    </Link>
  );
}
