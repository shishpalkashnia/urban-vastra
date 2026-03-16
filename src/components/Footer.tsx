import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-ivory py-12 md:py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-12">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <Link href="/" className="font-heading text-2xl tracking-widest uppercase">
            Urban Vastra
          </Link>
          <p className="mt-4 text-sm tracking-wide text-brand-beige max-w-xs text-center md:text-left">
            Premium fabrics and garments crafted for modern elegance.
          </p>
        </div>

        <div className="flex flex-col text-center md:text-left space-y-3">
          <h3 className="font-heading text-lg mb-2 text-brand-gold">Navigation</h3>
          <Link href="/" className="text-sm hover:text-brand-gold transition-colors">Home</Link>
          <Link href="/#collections" className="text-sm hover:text-brand-gold transition-colors">Collections</Link>
          <Link href="/#about" className="text-sm hover:text-brand-gold transition-colors">About</Link>
          <Link href="/#visit-store" className="text-sm hover:text-brand-gold transition-colors">Visit Store</Link>
        </div>

        <div className="flex flex-col text-center md:text-left space-y-3">
          <h3 className="font-heading text-lg mb-2 text-brand-gold">Contact</h3>
          <p className="text-sm">123 Fashion Avenue, Style District</p>
          <p className="text-sm">+91 70826 04232</p>
          <p className="text-sm">mr.sudeshkasnia@gmail.com</p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-brand-beige/20 text-center text-xs tracking-wider text-brand-beige/60">
        &copy; {new Date().getFullYear()} URBAN VASTRA. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
