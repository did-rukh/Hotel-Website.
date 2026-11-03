import { useState } from 'react';
import { roomsData } from '../data/hotelData';
import type { Room } from '../types';

interface RoomsProps {
  onSelectRoom: (room: Room) => void;
  onBookRoom: (roomName: string) => void;
}

export const Rooms = ({ onSelectRoom, onBookRoom }: RoomsProps) => {
  const [filter, setFilter] = useState<'all' | 'standard' | 'deluxe' | 'suite'>('all');

  const filteredRooms = filter === 'all'
    ? roomsData
    : roomsData.filter((r) => r.category === filter);

  return (
    <section id="rooms" className="py-16 sm:py-24 lg:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div>
            <p className="eyebrow">Stay a little longer</p>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-6xl font-display leading-tight">
              Rooms & Suites
            </h2>
            <p className="mt-3 sm:mt-4 text-muted-foreground text-sm max-w-xl">
              Curated boutique sanctuaries dressed in rich teak finishes, soft linen textures, and quiet air-conditioned serenity.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'All Rooms', value: 'all' as const },
              { label: 'Standard', value: 'standard' as const },
              { label: 'Deluxe', value: 'deluxe' as const },
              { label: 'Suites', value: 'suite' as const },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`cursor-pointer px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] rounded-sm transition-all duration-300 ${
                  filter === tab.value
                    ? 'bg-ink text-ink-foreground border border-ink'
                    : 'border border-border text-foreground hover:border-gold'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room Cards Grid (Lovable style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRooms.map((room) => (
            <article
              key={room.id}
              className="border border-border bg-card p-5 sm:p-7 md:p-8 rounded-sm flex flex-col justify-between transition-all duration-300 hover:border-gold hover:shadow-xl"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[16/11] overflow-hidden mb-6 bg-secondary">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-ink/90 text-ink-foreground px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase">
                    {room.category}
                  </div>
                </div>

                <p className="eyebrow !text-[11px]">
                  {room.size} · {room.occupancy} · {room.bed}
                </p>

                <h3 className="mt-3 text-3xl font-display text-foreground">
                  {room.name}
                </h3>

                <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {room.description}
                </p>

                {/* Features Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {room.features.slice(0, 3).map((f, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-wider px-2 py-1 bg-secondary text-secondary-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price and Action Row */}
              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-display text-3xl text-foreground">
                    {room.price}
                    <span className="text-xs text-muted-foreground font-sans tracking-normal"> / night</span>
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-5 sm:gap-6 w-full sm:w-auto">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="link-gold !text-xs py-2 px-1 cursor-pointer"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onBookRoom(room.name)}
                    className="btn-gold !px-5 !py-2.5 !text-xs cursor-pointer"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
