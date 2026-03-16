"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-beige/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Editorial Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 aspect-[4/5] bg-brand-beige relative overflow-hidden flex items-center justify-center text-brand-black/40 text-sm tracking-widest uppercase font-medium"
          >
            <img
              src="/editorial/editorial.jpg"
              alt="Urban Vastra Editorial"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-black leading-tight"
            >
              The Essence of <br />
              <span className="text-brand-gold italic">Modern Elegance</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-brand-black/80 text-lg leading-relaxed font-light"
            >
              Founded on the principles of minimalist design and premium craftsmanship, Urban Vastra is a destination for those who appreciate understated luxury. We believe in the power of timeless silhouettes and exceptional fabrics.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-brand-black/80 text-lg leading-relaxed font-light"
            >
              Every garment in our collection is thoughtfully designed to transcend seasons, offering versatile elegance that effortlessly elevates your everyday wardrobe.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <span className="block w-24 h-px bg-brand-gold mb-8"></span>
              <p className="font-heading text-xl text-brand-black tracking-widest uppercase">
                Est. 2024
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
