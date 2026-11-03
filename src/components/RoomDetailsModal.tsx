import { X, Check, BedDouble, Users, Maximize, Wifi } from 'lucide-react';
import type { Room } from '../types';

interface RoomDetailsModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomName: string) => void;
}

export const RoomDetailsModal = ({ room, onClose, onBookRoom }: RoomDetailsModalProps) => {
  if (!room) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-ink/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border text-foreground shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 z-10 p-2 bg-ink/80 text-ink-foreground hover:text-gold transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Room Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-secondary">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-ink-foreground">
            <p className="eyebrow !text-ink-foreground/90 mb-1">{room.category} accommodation</p>
            <h3 className="font-display text-3xl sm:text-5xl leading-tight">
              {room.name}
            </h3>
            <p className="text-xs sm:text-sm mt-1 opacity-80">{room.subtitle}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-secondary/50 border border-border text-xs">
            <div className="flex items-center gap-2.5">
              <Maximize className="w-4 h-4 text-gold shrink-0" />
              <div>
                <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Size</span>
                <span className="font-semibold text-foreground">{room.size}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-gold shrink-0" />
              <div>
                <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Occupancy</span>
                <span className="font-semibold text-foreground">{room.occupancy}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <BedDouble className="w-4 h-4 text-gold shrink-0" />
              <div>
                <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Bedding</span>
                <span className="font-semibold text-foreground">{room.bed}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Wifi className="w-4 h-4 text-gold shrink-0" />
              <div>
                <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Wi-Fi</span>
                <span className="font-semibold text-foreground">Complimentary</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="eyebrow mb-2">Overview</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{room.description}</p>
          </div>

          {/* Features Highlights */}
          <div>
            <p className="eyebrow mb-3">Room Features</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground">
              {room.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Included Amenities List */}
          <div>
            <p className="eyebrow mb-3">All Included Amenities</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/40 p-2.5 border border-border">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Booking CTA */}
          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-muted-foreground block">Tariff Starting From</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-normal text-foreground">{room.price}</span>
                <span className="text-xs text-muted-foreground">/ night + taxes</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="btn-outline-dark !px-5 !py-3 w-full sm:w-auto text-center cursor-pointer"
              >
                Close Details
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookRoom(room.name);
                }}
                className="btn-gold !px-6 !py-3 w-full sm:w-auto text-center cursor-pointer"
              >
                Reserve Your Stay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
