import {
  Wifi,
  Car,
  Utensils,
  Clock,
  Wind,
  Calendar,
  ArrowUpDown,
  Shirt,
  Zap,
  Sparkles,
  ShieldCheck,
  Luggage,
} from 'lucide-react';

const fullAmenities = [
  { icon: Wifi, name: 'High-Speed Wi-Fi', desc: 'Uncapped fiber internet in every room and common area.' },
  { icon: Car, name: 'Ample Car Parking', desc: 'Spacious, secure dedicated on-site parking with 24/7 CCTV.' },
  { icon: Utensils, name: 'Multi-Cuisine Dining', desc: 'In-house restaurant with Malabar delicacies & world flavors.' },
  { icon: Clock, name: '24/7 Front Desk', desc: 'Round-the-clock reception for local tips, cabs, and assistance.' },
  { icon: Wind, name: 'Quiet Climate Control', desc: 'Individual temperature adjustment in every guest room.' },
  { icon: Calendar, name: 'Banquet & Events', desc: 'Conference and event hall with full AV equipment.' },
  { icon: ArrowUpDown, name: 'Modern Elevator', desc: 'Smooth lift access to all guest floors with luggage room.' },
  { icon: Shirt, name: 'Express Laundry', desc: 'Same-day washing, dry cleaning, and steam pressing.' },
  { icon: Zap, name: '100% Power Backup', desc: 'Automatic generator power ensuring zero interruption.' },
  { icon: Sparkles, name: 'Daily Housekeeping', desc: 'Fresh linens, sanitization, and premium bath amenities.' },
  { icon: Luggage, name: 'Luggage Storage', desc: 'Secure baggage keeping for early arrivals & late departures.' },
  { icon: ShieldCheck, name: '24/7 Security', desc: 'Trained staff, fire safety equipment, and CCTV monitoring.' },
];

export const Amenities = () => {
  return (
    <section id="amenities" className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow">The little things matter</p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display">
            Everything for an effortless stay
          </h2>
          <p className="mt-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Thoughtfully considered facilities designed to provide comfort, connectivity, and peace of mind.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-l border-t border-border">
          {fullAmenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex min-h-44 flex-col items-center justify-center gap-4 border-b border-r border-border px-4 py-8 text-center transition-all duration-300 hover:bg-secondary"
              >
                <Icon
                  className="w-7 h-7 text-gold transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.25}
                />
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                  {item.name}
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed max-w-[160px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
