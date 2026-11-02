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
          scrolled ? 'bg-ink/95 py-3 backdrop-blur shadow-md' : 'py-6 bg-gradient-to-b from-ink/70 via-ink/20 to-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-ink-foreground">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Hotel Grand Benale"
          >
            <img
              src={hotelInfo.logo}
              alt={hotelInfo.name}
              className="h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
            <span className="font-display text-xl sm:text-2xl tracking-[0.25em] text-ink-foreground">
              GRAND BENALE
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] md:flex">
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

          {/* Actions */}
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
              className="btn-gold !px-5 !py-2.5"
            >
              Reserve
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenBooking}
              className="btn-gold !px-3 !py-1.5 !text-[11px]"
            >
              Reserve
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink-foreground hover:text-gold transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/90 backdrop-blur-md md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-ink border-l border-ink-foreground/10 p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-ink-foreground/10">
                <span className="font-display text-lg tracking-[0.25em] text-ink-foreground">
                  GRAND BENALE
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-ink-foreground/60 hover:text-gold"
                >
                  <X className="w-5 h-5 text-gold" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-4 text-xs uppercase tracking-[0.2em]">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 text-ink-foreground/80 hover:text-gold border-b border-ink-foreground/5 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-ink-foreground/10 space-y-4">
              <a
                href={`tel:${hotelInfo.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 border border-ink-foreground/20 text-xs text-ink-foreground tracking-[0.15em] uppercase"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>{hotelInfo.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-gold w-full"
              >
                Reserve Your Stay
              </button>

              <p className="eyebrow text-center !text-[10px]">
                Kakkad Road, Kannur, Kerala
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
