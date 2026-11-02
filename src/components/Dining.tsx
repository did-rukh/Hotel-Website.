import { Clock, ChefHat, Coffee, Wine } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

interface DiningProps {
  onOpenBooking: () => void;
}

const venues = [
  {
    name: 'Malabar Coastal Specialties',
    desc: 'Fresh Arabian Sea catches, fragrant spices, and heritage Kannur seafood recipes',
    time: 'Lunch & Dinner · 12:30 PM - 11:00 PM',
    icon: ChefHat,
  },
  {
    name: 'Gourmet Morning Breakfast',
    desc: 'Complimentary buffet with traditional Kerala appam, stew, and South Indian filter coffee',
    time: 'Breakfast · 07:30 AM - 10:30 AM',
    icon: Coffee,
  },
  {
    name: 'In-Room Private Dining',
    desc: 'Prompt, discreet around-the-clock culinary service delivered directly to your chamber',
    time: 'All Day & Late Night · 24 Hours',
    icon: Wine,
  },
];

export const Dining = ({ onOpenBooking }: DiningProps) => {
  return (
    <section id="dining" className="bg-background border-t border-border">
      {/* Visual Scrim Hero Strip */}
      <div className="relative flex h-[50vh] min-h-[380px] items-end overflow-hidden">
        <img
          src={hotelInfo.diningAtmosphere}
          alt="Fine Dining at Hotel Grand Benale"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 text-ink-foreground">
          <p className="eyebrow">Savour</p>
          <h2 className="mt-3 text-4xl sm:text-6xl font-display">
            The Signature Dining Experience
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Text */}
          <div className="lg:col-span-5">
            <p className="eyebrow">Culinary Artistry</p>
            <h3 className="mt-4 text-3xl sm:text-5xl font-display">
              Where coastal tradition meets fine dining
            </h3>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Embark on an exquisite culinary journey celebrating the legendary gastronomy of the Malabar coast. Savor fiery fish curries, succulent seafood grills, and aromatic biryanis prepared with local spices, alongside continental staples and comforting South Indian dishes.
            </p>

            <div className="mt-8 p-6 bg-secondary/50 border border-border">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground font-medium mb-3">
                <Clock className="w-4 h-4 text-gold" />
                <span>Restaurant Operating Hours</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Breakfast Buffet: <strong>07:30 AM – 10:30 AM</strong>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Lunch & Dinner: <strong>12:30 PM – 11:00 PM</strong>
              </p>
              <p className="text-xs text-gold mt-2 font-medium">
                In-Room Dining available 24 hours daily
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={`tel:${hotelInfo.phoneRaw}`}
                className="btn-gold"
              >
                Reserve a Table
              </a>
              <button
                onClick={onOpenBooking}
                className="btn-outline-dark"
              >
                Stay & Dine
              </button>
            </div>
          </div>

          {/* Right Menu List (Lovable style divide-y) */}
          <div className="lg:col-span-7 divide-y divide-border border-y border-border">
            {venues.map((venue, idx) => {
              const Icon = venue.icon;
              return (
                <div key={idx} className="py-8 flex flex-col justify-between gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-gold shrink-0" />
                      <h4 className="text-2xl sm:text-3xl font-display text-foreground">
                        {venue.name}
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                    {venue.desc}
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-gold pl-8 font-medium">
                    {venue.time}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
