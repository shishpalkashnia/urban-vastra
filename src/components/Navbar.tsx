"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleHomeClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleMobileHomeClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On home page, navbar is transparent at top and ivory on scroll. On other pages, it's always ivory.
  const navbarBg = isHome && !isScrolled ? "bg-transparent text-white" : "bg-brand-ivory text-brand-black shadow-sm";

  return (
    <nav className={clsx("fixed top-0 left-0 w-full z-50 transition-colors duration-300", navbarBg)}>
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link href="/" onClick={handleHomeClick} className="font-heading text-2xl tracking-widest uppercase">
          Urban Vastra
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wider font-medium">
          <Link href="/" onClick={handleHomeClick} className="hover:text-brand-gold transition-colors">Home</Link>
          <Link href="/#collections" className="hover:text-brand-gold transition-colors">Collections</Link>
          <Link href="/#about" className="hover:text-brand-gold transition-colors">About</Link>
          <Link href="/#visit-store" className="hover:text-brand-gold transition-colors">Visit Store</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-ivory text-brand-black absolute top-20 left-0 w-full shadow-md py-6 px-6 flex flex-col space-y-6 text-sm uppercase tracking-wider font-medium">
          <Link href="/" onClick={handleMobileHomeClick}>Home</Link>
          <Link href="/#collections" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
          <Link href="/#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/#visit-store" onClick={() => setMobileMenuOpen(false)}>Visit Store</Link>
        </div>
      )}
    </nav>
  );
}
