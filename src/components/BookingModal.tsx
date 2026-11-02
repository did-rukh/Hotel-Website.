import { useState } from 'react';
import { X, Calendar, Users, Bed, MessageSquare, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';
import type { BookingDetails } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDetails?: Partial<BookingDetails>;
}

export const BookingModal = ({ isOpen, onClose, initialDetails }: BookingModalProps) => {
  const today = new Date().toISOString().split('T')[0];
  const afterTwoDays = new Date();
  afterTwoDays.setDate(new Date().getDate() + 2);
  const defaultCheckOut = afterTwoDays.toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingDetails>({
    checkIn: initialDetails?.checkIn || today,
    checkOut: initialDetails?.checkOut || defaultCheckOut,
    roomType: initialDetails?.roomType || 'Standard Double Room',
    adults: initialDetails?.adults || 2,
    children: initialDetails?.children || 0,
    guestName: '',
    phone: '',
    email: '',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Stay Enquiry — Hotel Grand Benale Kannur*\n\n` +
      `*Guest Name:* ${formData.guestName || 'Valued Guest'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n\n` +
      `*Check-In:* ${formData.checkIn}\n` +
      `*Check-Out:* ${formData.checkOut}\n` +
      `*Room Preference:* ${formData.roomType}\n` +
      `*Guests:* ${formData.adults} Adults, ${formData.children} Children\n` +
      (formData.specialRequests ? `*Special Notes:* ${formData.specialRequests}\n\n` : `\n`) +
      `Please let me know availability and best rate for these dates. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${hotelInfo.whatsappNumber}?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  const handleEmailBooking = () => {
    const subject = encodeURIComponent(`Stay Enquiry: ${formData.roomType} (${formData.checkIn} to ${formData.checkOut})`);
    const body = encodeURIComponent(
      `Hello Hotel Grand Benale Team,\n\n` +
      `I would like to inquire about booking a stay at Hotel Grand Benale in Kannur.\n\n` +
      `Booking Details:\n` +
      `- Name: ${formData.guestName || 'Guest'}\n` +
      `- Phone: ${formData.phone || 'Not provided'}\n` +
      `- Check-In: ${formData.checkIn}\n` +
      `- Check-Out: ${formData.checkOut}\n` +
      `- Room Category: ${formData.roomType}\n` +
      `- Adults: ${formData.adults}, Children: ${formData.children}\n` +
      `- Special Requests: ${formData.specialRequests || 'None'}\n\n` +
      `Please confirm availability, tariff, and reservation details.\n\n` +
      `Best regards,\n${formData.guestName || ''}`
    );

    window.open(`mailto:${hotelInfo.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-card border border-border rounded-sm shadow-2xl text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 sm:p-8 bg-secondary/50 border-b border-border">
          <button
            onClick={onClose}
            className="cursor-pointer absolute top-6 right-6 p-2 rounded-sm bg-secondary text-muted-foreground hover:text-foreground transition-colors border border-border"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5 text-gold" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-gold" />
            <span>Direct Reservation Desk</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl text-foreground">
            Reserve Your Stay in Kannur
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">
            Book directly with Hotel Grand Benale for best rate assurance & complimentary breakfast.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mx-auto text-gold">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display text-2xl text-foreground">
              Enquiry Transmitted!
            </h4>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Your inquiry has been formulated. Our reservations desk at Hotel Grand Benale will reply promptly to confirm your dates and room tariff.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => setSubmitted(false)}
                className="cursor-pointer btn-outline-dark"
              >
                Modify Enquiry
              </button>
              <button
                onClick={onClose}
                className="cursor-pointer btn-gold"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppBooking} className="p-6 sm:p-8 space-y-6">
            
            {/* Dates Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-secondary/50 border border-border rounded-sm p-3">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-gold mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> Check-In Date
                </label>
                <input
                  type="date"
                  value={formData.checkIn}
                  min={today}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  className="w-full bg-transparent text-foreground text-sm focus:outline-none"
                  required
                />
              </div>

              <div className="bg-secondary/50 border border-border rounded-sm p-3">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-gold mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> Check-Out Date
                </label>
                <input
                  type="date"
                  value={formData.checkOut}
                  min={formData.checkIn || today}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  className="w-full bg-transparent text-foreground text-sm focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Room & Occupancy Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1 bg-secondary/50 border border-border rounded-sm p-3">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-gold mb-1 flex items-center gap-1.5">
                  <Bed className="w-3 h-3" /> Room Type
                </label>
                <select
                  value={formData.roomType}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  className="w-full bg-card text-foreground text-sm focus:outline-none border-none py-0.5"
                >
                  <option value="Standard Double Room">Standard Double (₹2,999)</option>
                  <option value="Deluxe Double Room">Deluxe Double (₹3,999)</option>
                  <option value="Grand Benale Luxury Suite">Grand Luxury Suite (₹5,499)</option>
                </select>
              </div>

              <div className="bg-secondary/50 border border-border rounded-sm p-3">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-gold mb-1 flex items-center gap-1.5">
                  <Users className="w-3 h-3" /> Adults
                </label>
                <select
                  value={formData.adults}
                  onChange={(e) => setFormData({ ...formData, adults: Number(e.target.value) })}
                  className="w-full bg-card text-foreground text-sm focus:outline-none border-none py-0.5"
                >
                  <option value={1}>1 Adult</option>
                  <option value={2}>2 Adults</option>
                  <option value={3}>3 Adults</option>
                  <option value={4}>4+ Adults</option>
                </select>
              </div>

              <div className="bg-secondary/50 border border-border rounded-sm p-3">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-gold mb-1 flex items-center gap-1.5">
                  <Users className="w-3 h-3" /> Children
                </label>
                <select
                  value={formData.children}
                  onChange={(e) => setFormData({ ...formData, children: Number(e.target.value) })}
                  className="w-full bg-card text-foreground text-sm focus:outline-none border-none py-0.5"
                >
                  <option value={0}>0 Children</option>
                  <option value={1}>1 Child</option>
                  <option value={2}>2 Children</option>
                  <option value={3}>3+ Children</option>
                </select>
              </div>
            </div>

            {/* Guest Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-border">
              <div className="bg-secondary/50 border border-border rounded-sm p-3">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Menon"
                  value={formData.guestName}
                  onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                  className="w-full bg-transparent text-foreground text-sm focus:outline-none placeholder:text-muted-foreground/50"
                  required
                />
              </div>

              <div className="bg-secondary/50 border border-border rounded-sm p-3">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent text-foreground text-sm focus:outline-none placeholder:text-muted-foreground/50"
                  required
                />
              </div>
            </div>

            {/* Optional Requests */}
            <div className="bg-secondary/50 border border-border rounded-sm p-3">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                Special Requests or Dietary Requirements (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Airport pickup required, late check-in, extra bed..."
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="w-full bg-transparent text-foreground text-sm focus:outline-none placeholder:text-muted-foreground/50 resize-none"
              />
            </div>

            {/* Booking Perks Reminder */}
            <div className="p-3.5 rounded-sm bg-gold/10 border border-gold/20 text-xs text-gold flex items-center justify-between">
              <span>✓ Direct Booking Perk: Complimentary Malabar Breakfast</span>
              <span className="font-semibold">Best Price Guaranteed</span>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="submit"
                className="cursor-pointer py-3.5 px-6 rounded-sm bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleEmailBooking}
                className="cursor-pointer btn-gold py-3.5 px-6 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Enquire via Email</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
