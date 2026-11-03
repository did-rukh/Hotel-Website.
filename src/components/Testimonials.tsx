import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink, CheckCircle } from 'lucide-react';
import { hotelInfo, testimonialsData } from '../data/hotelData';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const activeReview = testimonialsData[currentIndex];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-secondary/30 border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Big Score Card */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">
              Guest Impressions
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight leading-tight mb-6">
              A Stay Worth <br />
              <span className="text-gold italic">Remembering</span>
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              We take deep pride in ensuring every guest encounters the highest degree of comfort, courtesy, and Malabar warmth.
            </p>

            {/* Expedia Rating Box */}
            <div className="p-6 rounded-sm bg-card border border-gold/40 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="font-display text-5xl font-medium text-foreground">
                  {hotelInfo.rating}
                  <span className="text-xl text-gold font-normal">/{hotelInfo.ratingMax}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gold mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold" />
                    ))}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                    {hotelInfo.ratingLabel} Rating
                  </span>
                  <span className="text-[11px] text-muted-foreground block font-medium">
                    Verified guest consensus
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-gold" /> Verified on Expedia
                </span>
                <a
                  href="https://www.expedia.com/Kannur-Hotels-Grand-Benale.h127195175.Hotel-Information"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-gold inline-flex items-center gap-1 font-semibold"
                >
                  <span>Read on Expedia</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Testimonial Slider */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-sm bg-card border border-border shadow-sm">
              <Quote className="w-12 h-12 text-gold/25 absolute top-6 sm:top-8 right-6 sm:right-8" />

              {/* Tag & Rating */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-sm bg-gold/15 border border-gold/30 text-gold text-[11px] font-bold uppercase tracking-wider">
                  {activeReview.tag}
                </span>

                <div className="flex items-center gap-1 text-gold">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold" />
                  ))}
                </div>
              </div>

              {/* Testimonial Quote */}
              <p className="font-display text-lg sm:text-2xl text-foreground font-normal italic leading-relaxed mb-8 min-h-[100px] sm:min-h-[120px]">
                "{activeReview.comment}"
              </p>

              {/* Guest Profile & Slider Controls */}
              <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display text-lg text-foreground">
                    {activeReview.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {activeReview.location} · <span className="text-gold">{activeReview.stayDate}</span>
                  </p>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevReview}
                    className="cursor-pointer p-2.5 rounded-sm border border-border hover:bg-gold hover:text-ink text-foreground transition-colors"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-muted-foreground font-mono">
                    0{currentIndex + 1} / 0{testimonialsData.length}
                  </span>
                  <button
                    onClick={nextReview}
                    className="cursor-pointer p-2.5 rounded-sm border border-border hover:bg-gold hover:text-ink text-foreground transition-colors"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
