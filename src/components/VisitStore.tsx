"use client";

import Link from "next/link";
import { Copy, MapPin, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function VisitStore() {
  return (
    <section id="visit-store" className="py-24 md:py-32 bg-brand-black text-brand-ivory">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            Visit Our Boutique
          </h2>
          <p className="text-brand-beige text-lg font-light tracking-wide max-w-2xl mx-auto">
            Experience the exquisite fabrics and tailoring in person. Our style consultants are ready to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-10 border border-brand-beige/20 p-10 lg:p-16"
          >

            <div className="flex items-start gap-4">
              <MapPin className="text-brand-gold mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-heading text-2xl mb-2">Address</h3>
                <p className="text-brand-beige font-light leading-relaxed">
                  Urban Vastra Flagship Store<br />
                  123 Fashion Avenue, Style District<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-brand-gold mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-heading text-2xl mb-2">Contact</h3>
                <p className="text-brand-beige font-light mb-1">+91 70826 04232</p>
                <p className="text-brand-beige font-light">mr.sudeshkasnia@gmail.com</p>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://wa.me/917082604232"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-brand-gold text-brand-black px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-ivory transition-colors duration-300"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>

          </motion.div>

          {/* Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-brand-beige/10 min-h-[400px] flex items-center justify-center border border-brand-beige/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-brand-ivory text-brand-ivory px-6 py-3 uppercase tracking-widest text-xs hover:bg-brand-ivory hover:text-brand-black transition-colors duration-300"
              >
                <MapPin size={16} /> Get Directions
              </a>
            </div>
            <div className="text-brand-beige/40 font-heading tracking-widest uppercase text-xl text-center">
              [ Map Integration ]
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
