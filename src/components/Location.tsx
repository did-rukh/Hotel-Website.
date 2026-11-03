import { MapPin, Navigation, ArrowUpRight, Clock } from 'lucide-react';
import { hotelInfo, kannurAttractions } from '../data/hotelData';

export const Location = () => {
  return (
    <section id="location" className="py-16 sm:py-24 lg:py-32 bg-background border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="eyebrow mb-2 sm:mb-3">
            Prime Connectivity
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight leading-tight mb-4">
            Discover Kannur from Our <span className="text-gold italic">Doorstep</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Conveniently positioned on Kakkad Road, Hotel Grand Benale offers effortless access to Kannur Railway Station, pristine Arabian Sea beaches, historic fortresses, and the international airport.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Map Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border bg-secondary">
              <iframe
                title="Google Maps Location of Hotel Grand Benale, Kannur"
                src="https://www.google.com/maps?q=Hotel%20Grand%20Benale%2C%20Kakkad%20Road%2C%20Kannur%2C%20Kerala&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address Banner */}
            <div className="p-4 sm:p-5 rounded-sm bg-card border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Hotel Grand Benale</h4>
                  <p className="text-xs text-muted-foreground">{hotelInfo.address}</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Hotel%20Grand%20Benale%20Kannur"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-1.5 w-full sm:w-auto shrink-0 text-center cursor-pointer"
              >
                <span>Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Attractions Guide List */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-sm bg-card border border-border shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                <div>
                  <h3 className="font-display text-xl text-foreground font-semibold">
                    Kannur Landmarks & Travel Times
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Explore North Kerala's coastal wonders
                  </p>
                </div>
                <Navigation className="w-5 h-5 text-gold" />
              </div>

              <div className="space-y-3">
                {kannurAttractions.map((attraction, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-sm bg-secondary/40 hover:bg-secondary border border-border hover:border-gold/40 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">
                          {attraction.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {attraction.description}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-bold text-gold block">
                          {attraction.distance}
                        </span>
                        <span className="text-[11px] text-muted-foreground flex items-center gap-1 justify-end mt-0.5 font-medium">
                          <Clock className="w-3 h-3 text-gold" /> {attraction.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border text-center">
                <p className="text-xs text-muted-foreground">
                  Our front desk concierge can arrange private cabs and city sightseeing itineraries upon request.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
