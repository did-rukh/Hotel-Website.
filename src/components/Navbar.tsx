import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar = ({ onOpenBooking }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ink/95 py-2.5 backdrop-blur shadow-md' : 'py-4 sm:py-5 bg-gradient-to-b from-ink/80 via-ink/30 to-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 text-ink-foreground">
          {/* Brand Logo (Enlarged, no text) */}
          <a
            href="#home"
            className="flex items-center group focus:outline-none"
            aria-label={hotelInfo.name}
          >
            <img
              src={hotelInfo.logo}
              alt={hotelInfo.name}
              className={`w-auto object-contain transition-all duration-300 group-hover:opacity-90 ${
                scrolled
                  ? 'h-11 sm:h-13 md:h-15'
                  : 'h-14 sm:h-18 md:h-22'
              }`}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-6 lg:gap-8 text-xs uppercase tracking-[0.2em] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-ink-foreground/80 hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${hotelInfo.phoneRaw}`}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-ink-foreground/80 hover:text-gold transition-colors"
              title="Call Grand Benale Front Desk"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{hotelInfo.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="btn-gold !px-5 !py-2.5 cursor-pointer"
            >
              Reserve
            </button>
          </div>

          {/* Mobile Menu Actions & Hamburger */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              onClick={onOpenBooking}
              className="btn-gold !px-3 !py-1.5 !text-[11px] cursor-pointer"
            >
              Reserve
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink-foreground hover:text-gold transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer (z-[100] covering homepage heading and logo) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-ink w-full h-full md:hidden flex flex-col justify-between overflow-y-auto"
        >
          <div className="p-6 flex flex-col justify-between min-h-full">
            <div>
              {/* Drawer Header with Logo & Close Button (No Grand Benale text) */}
              <div className="flex items-center justify-between pb-6 border-b border-ink-foreground/10">
                <img
                  src={hotelInfo.logo}
                  alt={hotelInfo.name}
                  className="h-12 sm:h-14 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded text-ink-foreground/80 hover:text-gold transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X className="w-7 h-7 text-gold" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="mt-8 flex flex-col space-y-4 text-xs uppercase tracking-[0.2em]">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 text-ink-foreground/85 hover:text-gold border-b border-ink-foreground/5 transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Contact & Action */}
            <div className="pt-8 border-t border-ink-foreground/10 space-y-4 mt-8 pb-4">
              <a
                href={`tel:${hotelInfo.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3.5 border border-ink-foreground/20 text-xs text-ink-foreground tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>{hotelInfo.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-gold w-full !py-3.5 cursor-pointer text-center"
              >
                Reserve Your Stay
              </button>

              <p className="eyebrow text-center !text-[10px] text-ink-foreground/50">
                Kakkad Road, Kannur, Kerala
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
