import { Users, Presentation, Music, Award, ArrowUpRight } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

interface EventsProps {
  onOpenBooking: () => void;
}

export const Events = ({ onOpenBooking }: EventsProps) => {
  return (
    <section id="events" className="py-16 sm:py-24 lg:py-32 bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Image composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden border border-border bg-card rounded-sm">
              <img
                src={hotelInfo.eventsImage}
                alt="Hotel Grand Benale Banquets and Event Hall"
                className="w-full aspect-[4/3] sm:aspect-[16/11] object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-ink/90 text-ink-foreground px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs tracking-[0.2em] uppercase rounded-sm">
                Grand Benale Banquets · Kannur
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-6">
            <p className="eyebrow">Gatherings & Celebrations</p>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-display leading-tight">
              Prestigious occasions, flawlessly hosted
            </h2>

            <p className="mt-5 sm:mt-6 text-sm text-muted-foreground leading-relaxed">
              From high-level corporate seminars and leadership summits to joyous wedding receptions and family milestones, Hotel Grand Benale provides versatile hall arrangements, modern audiovisual projection, and bespoke banquet catering in Kannur.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-border bg-card p-5 sm:p-6 rounded-sm">
                <Users className="w-5 h-5 text-gold mb-3" />
                <h4 className="text-base font-display text-foreground font-semibold">Up to 250+ Guests</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Flexible theater, banquet cluster, and boardroom layouts.</p>
              </div>

              <div className="border border-border bg-card p-5 sm:p-6 rounded-sm">
                <Presentation className="w-5 h-5 text-gold mb-3" />
                <h4 className="text-base font-display text-foreground font-semibold">Audiovisual Technology</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">High-definition projection, sound system, and podium setup.</p>
              </div>

              <div className="border border-border bg-card p-5 sm:p-6 rounded-sm">
                <Music className="w-5 h-5 text-gold mb-3" />
                <h4 className="text-base font-display text-foreground font-semibold">Social Celebrations</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Engagements, wedding banquets, birthdays, and anniversaries.</p>
              </div>

              <div className="border border-border bg-card p-5 sm:p-6 rounded-sm">
                <Award className="w-5 h-5 text-gold mb-3" />
                <h4 className="text-base font-display text-foreground font-semibold">Bespoke Catering</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Multi-course gourmet regional and continental menus.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="btn-gold justify-center cursor-pointer"
              >
                <span>Inquire for Events</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${hotelInfo.phoneRaw}`}
                className="btn-outline-dark justify-center cursor-pointer text-center"
              >
                Speak with Event Manager
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
