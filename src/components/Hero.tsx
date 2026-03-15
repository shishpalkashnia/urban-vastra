"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-black">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/hero/hero-poster.jpg"
      >
        <source src="/hero/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-brand-ivory mb-6 tracking-wide"
        >
          Refined Fabrics. <br className="hidden md:block" /> Timeless Style.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-brand-beige text-lg md:text-xl max-w-2xl mb-10 tracking-wide font-light"
        >
          Premium fabrics and garments crafted for modern elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#collections"
            className="inline-block border border-brand-gold text-brand-gold px-10 py-4 uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-brand-black transition-colors duration-300"
          >
            Explore Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
}
