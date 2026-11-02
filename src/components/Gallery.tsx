import { useState, useEffect, useCallback } from 'react';
import { Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '../data/hotelData';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'rooms' | 'dining' | 'hotel' | 'events'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-3">
              A Glimpse Inside
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
              The Grand Benale Experience
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-lg">
              Explore the warm architecture, opulent interiors, and inviting spaces of our Kannur sanctuary.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'All Photos', val: 'all' as const },
              { label: 'Hotel & Lobby', val: 'hotel' as const },
              { label: 'Rooms & Suites', val: 'rooms' as const },
              { label: 'Dining', val: 'dining' as const },
              { label: 'Events & Hall', val: 'events' as const },
            ].map((tab) => (
              <button
                key={tab.val}
                onClick={() => setActiveCategory(tab.val)}
                className={`cursor-pointer px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === tab.val
                    ? 'bg-ink text-ink-foreground'
                    : 'bg-transparent text-foreground border border-border hover:border-gold'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="cursor-pointer group relative aspect-[4/3] rounded-sm overflow-hidden bg-secondary border border-border hover:border-gold shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Overlay Details */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-2 rounded-sm bg-ink/60 backdrop-blur-md text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Expand className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg text-ink-foreground group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Top Controls */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-3 z-20">
            <span className="text-xs text-ink-foreground/60 font-mono">
              {lightboxIndex + 1} / {filteredItems.length}
            </span>
            <button
              onClick={closeLightbox}
              className="cursor-pointer p-2.5 rounded-sm bg-ink-foreground/10 hover:bg-gold text-ink-foreground hover:text-ink transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="cursor-pointer absolute left-2 sm:left-6 z-20 p-3 rounded-sm bg-ink/60 hover:bg-gold text-ink-foreground hover:text-ink border border-ink-foreground/10 transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Image in Lightbox */}
          <div
            className="relative max-w-5xl max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex]?.src}
              alt={filteredItems[lightboxIndex]?.alt}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-sm shadow-2xl border border-ink-foreground/15"
            />
            <div className="mt-4 text-center">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold block">
                {filteredItems[lightboxIndex]?.category}
              </span>
              <p className="text-ink-foreground font-display text-lg mt-1">
                {filteredItems[lightboxIndex]?.title}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="cursor-pointer absolute right-2 sm:right-6 z-20 p-3 rounded-sm bg-ink/60 hover:bg-gold text-ink-foreground hover:text-ink border border-ink-foreground/10 transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
