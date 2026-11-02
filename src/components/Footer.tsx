import { useState } from 'react';
import { Phone, Mail, MapPin, Check, Send, Sparkles } from 'lucide-react';
import { hotelInfo, directBookingPerks } from '../data/hotelData';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-ink text-ink-foreground border-t border-ink-foreground/10 pt-20 pb-28 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Direct Booking Perks Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16 border-b border-ink-foreground/10 mb-16">
          {directBookingPerks.map((perk, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-sm bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-ink-foreground">{perk.title}</h4>
                <p className="text-xs text-ink-foreground/50 mt-0.5">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-ink-foreground/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src={hotelInfo.logo}
                alt={hotelInfo.name}
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="font-display text-lg tracking-wider block text-ink-foreground">
                  GRAND BENALE
                </span>
                <span className="eyebrow !text-gold !mb-0">
                  Kannur · Kerala
                </span>
              </div>
            </a>

            <p className="text-sm text-ink-foreground/60 leading-relaxed max-w-sm">
              Your home of comfort in Kannur. A serene boutique haven uniting modern luxury, culinary brilliance, and warm Malabar hospitality.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={hotelInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-ink-foreground/5 hover:bg-gold text-ink-foreground/60 hover:text-ink border border-ink-foreground/10 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={hotelInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-ink-foreground/5 hover:bg-gold text-ink-foreground/60 hover:text-ink border border-ink-foreground/10 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook Profile"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={`https://wa.me/${hotelInfo.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 h-10 rounded-sm bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 flex items-center gap-2 text-xs font-semibold transition-all duration-300"
              >
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="eyebrow !text-gold !mb-0">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'About', 'Rooms & Suites', 'Dining', 'Amenities', 'Gallery', 'Location'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                    className="text-ink-foreground/50 hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="eyebrow !text-gold !mb-0">
              Contact Concierge
            </h4>
            <div className="space-y-3 text-xs text-ink-foreground/50">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{hotelInfo.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${hotelInfo.phoneRaw}`} className="hover:text-ink-foreground transition-colors">
                  {hotelInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${hotelInfo.email}`} className="hover:text-ink-foreground transition-colors">
                  {hotelInfo.email}
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-ink-foreground/30">
              <span className="block">Check-in: {hotelInfo.checkInTime}</span>
              <span className="block">Check-out: {hotelInfo.checkOutTime}</span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="eyebrow !text-gold !mb-0">
              Privilege Club
            </h4>
            <p className="text-xs text-ink-foreground/50 leading-relaxed">
              Subscribe to receive exclusive seasonal retreat offers and festival dining packages in Kannur.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-sm bg-gold/15 border border-gold/30 text-xs text-gold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Thank you! You are on our VIP list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex rounded-sm overflow-hidden border border-ink-foreground/15 bg-ink-foreground/5 focus-within:border-gold">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-transparent text-ink-foreground focus:outline-none placeholder:text-ink-foreground/30"
                  />
                  <button
                    type="submit"
                    className="cursor-pointer px-4 bg-gold text-ink font-bold text-xs hover:brightness-110 transition-all flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-ink-foreground/30 block">
                  We respect your privacy. No spam ever.
                </span>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-foreground/30">
          <p>© {new Date().getFullYear()} Hotel Grand Benale. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-ink-foreground/40">Kannur, Kerala</span>
            <span>·</span>
            <span>4-Star Boutique Living</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
