import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar = ({ onOpenBooking }: FloatingMobileBarProps) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-ink/95 backdrop-blur-lg border-t border-ink-foreground/10 md:hidden shadow-[0_-10px_25px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Desk */}
        <a
          href={`tel:${hotelInfo.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-sm bg-ink-foreground/5 border border-ink-foreground/10 text-ink-foreground text-xs font-semibold hover:bg-ink-foreground/10 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-gold" />
          <span>Call Desk</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${hotelInfo.whatsappNumber}?text=${encodeURIComponent('Hello Hotel Grand Benale, I would like to inquire about room availability.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-sm bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/30 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Now */}
        <button
          onClick={onOpenBooking}
          className="cursor-pointer btn-gold flex items-center justify-center gap-1.5 py-2.5 px-2 active:scale-95 transition-all"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Reserve</span>
        </button>
      </div>
    </div>
  );
};
