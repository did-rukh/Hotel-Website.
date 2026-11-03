import { hotelInfo, hotelStats } from '../data/hotelData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About = ({ onOpenBooking }: AboutProps) => {
  return (
    <section id="about" className="bg-background pt-16 sm:pt-24 pb-12 sm:pb-16">
      {/* Editorial Welcome Header */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-16 sm:pb-24 text-center">
        <p className="eyebrow">Welcome to Kannur</p>
        <h2 className="mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl font-display leading-tight">
          The art of a warmer welcome, unhurried service, and the quiet comfort of Malabar.
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
          Welcome to <strong className="text-foreground font-medium">Hotel Grand Benale</strong>, a premier 4-star boutique haven nestled along Kakkad Road in the heart of Kannur. We bring together thoughtfully designed suites, exquisite coastal dining, modern conveniences, and the time-honored warmth of Kerala hospitality.
        </p>
      </div>

      {/* Editorial Alternating Feature Story */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 pb-16 sm:pb-24">
        
        {/* Story Block 1: The Lobby & Atrium */}
        <div className="grid items-center gap-8 md:gap-12 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={hotelInfo.lobbyImage}
              alt="Hotel Grand Benale Grand Atrium and Lobby"
              loading="lazy"
              className="aspect-[4/3] sm:aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-ink/90 text-ink-foreground p-3 sm:p-4 text-[10px] sm:text-xs tracking-[0.2em] uppercase rounded-sm">
              Kannur · Kerala · India
            </div>
          </div>

          <div className="md:px-6 lg:px-12">
            <p className="eyebrow">Heritage & Hospitality</p>
            <h3 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-display leading-tight">
              A place to slow down and belong
            </h3>
            <p className="mt-5 text-muted-foreground leading-relaxed text-sm">
              Whether you are here for corporate travel, coastal holidays, or festive celebrations, every detail at Grand Benale is arranged to make your stay effortless. Our central location provides serene seclusion paired with swift access to Kannur railway station, pristine beaches, and the international airport.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
              From our attentive 24/7 concierge and secure valet parking to high-speed fiber internet in every chamber, we invite you to experience hospitality crafted with care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <button
                onClick={onOpenBooking}
                className="btn-gold !px-6 !py-3 cursor-pointer text-center"
              >
                Book your stay
              </button>
              <a
                href="#rooms"
                className="link-gold justify-center sm:justify-start"
              >
                Explore our rooms
              </a>
            </div>
          </div>
        </div>

        {/* Story Block 2: Sanctuary & Suites (Alternating) */}
        <div className="grid items-center gap-8 md:gap-12 md:grid-cols-2 md:[&>div:first-child]:order-2">
          <div className="relative overflow-hidden rounded-sm">
            <img
              src="/images/lovable/suite.jpg"
              alt="Bespoke Luxury Suite Sanctuary"
              loading="lazy"
              className="aspect-[4/3] sm:aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="md:px-6 lg:px-12">
            <p className="eyebrow">Designed for Rest</p>
            <h3 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-display leading-tight">
              Styled for you, crafted for repose
            </h3>
            <p className="mt-5 text-muted-foreground leading-relaxed text-sm">
              Our 36+ boutique rooms and suites feature plush king-size beds, soundproof windows, individually adjusted whisper-quiet air conditioning, and rain showers. Relax in an atmosphere where calm aesthetic sensibilities meet international boutique standards.
            </p>
            <a
              href="#amenities"
              className="mt-8 inline-block link-gold"
            >
              Discover all amenities
            </a>
          </div>
        </div>

      </div>

      {/* Emerald Primary Stats Banner (from Lovable) */}
      <div className="bg-primary py-16 sm:py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 sm:gap-10 px-4 sm:px-6 text-center grid-cols-2 md:grid-cols-4">
          {hotelStats.map((stat, idx) => (
            <div key={idx}>
              <p className="font-display text-5xl md:text-6xl text-gold font-normal drop-shadow-sm">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] font-semibold text-primary-foreground">{stat.label}</p>
              <p className="mt-1 text-[11px] text-primary-foreground/85 font-normal">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
