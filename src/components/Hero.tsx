import { useState } from 'react';
import { Calendar, Users, Bed, ChevronRight } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';
import type { BookingDetails } from '../types';

interface HeroProps {
  onCheckAvailability: (details: BookingDetails) => void;
}

export const Hero = ({ onCheckAvailability }: HeroProps) => {
  const today = new Date();
  const defaultCheckIn = today.toISOString().split('T')[0];
  const afterTwoDays = new Date();
  afterTwoDays.setDate(today.getDate() + 2);
  const defaultCheckOut = afterTwoDays.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [roomType, setRoomType] = useState('Standard Double Room');
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability({
      checkIn,
      checkOut,
      roomType,
      adults: guests,
      children: 0,
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-14 overflow-hidden">
      {/* Background Imagery with Scrim */}
      <img
        src={hotelInfo.heroImage}
        alt="Hotel Grand Benale Luxury Resort Experience"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="hero-scrim absolute inset-0" />

      {/* Main Centered Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 my-auto text-center text-ink-foreground animate-rise">
        <p className="eyebrow tracking-[0.25em] font-semibold">Kannur · Kerala · Est. Hospitality</p>
        
        <h1 className="mt-3 sm:mt-5 text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] font-display text-white tracking-tight">
          Where comfort <em className="text-gold italic font-normal">welcomes</em> you
        </h1>

        <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed">
          {hotelInfo.shortBio}
        </p>

        {/* Rating Pill */}
        <div className="mt-5 sm:mt-6 inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 border border-white/20 bg-ink/50 backdrop-blur-md text-[11px] sm:text-xs tracking-[0.18em] uppercase text-white rounded-full shadow-sm">
          <span className="text-gold font-bold">{hotelInfo.rating}/10</span>
          <span>·</span>
          <span className="font-medium">{hotelInfo.ratingLabel}</span>
          <span className="hidden sm:inline opacity-85">· Verified Expedia Score</span>
        </div>

        {/* Buttons Row with balanced spacing */}
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
          <a
            href="#booking-bar"
            className="btn-gold w-full sm:w-auto text-center !py-3 !px-7 shadow-md"
          >
            Reserve your stay
          </a>
          <a
            href="#rooms"
            className="btn-outline-light w-full sm:w-auto text-center !py-3 !px-7 backdrop-blur-sm"
          >
            Explore rooms
          </a>
        </div>
      </div>

      {/* Embedded Reservation Bar */}
      <div id="booking-bar" className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 mt-8 sm:mt-10">
        <form
          onSubmit={handleSubmit}
          className="border border-white/15 bg-ink/80 backdrop-blur-lg p-4 sm:p-5 text-ink-foreground shadow-2xl rounded-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 items-end">
            {/* Check-In */}
            <div>
              <label htmlFor="hero-check-in" className="eyebrow block mb-1.5 flex items-center gap-1.5 !text-[10px] font-semibold text-gold">
                <Calendar className="w-3 h-3 text-gold" /> Check-In
              </label>
              <input
                id="hero-check-in"
                type="date"
                value={checkIn}
                min={defaultCheckIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border-b border-white/25 bg-transparent py-1.5 text-xs sm:text-sm text-white font-normal outline-none focus:border-gold transition-colors [color-scheme:dark]"
                required
              />
            </div>

            {/* Check-Out */}
            <div>
              <label htmlFor="hero-check-out" className="eyebrow block mb-1.5 flex items-center gap-1.5 !text-[10px] font-semibold text-gold">
                <Calendar className="w-3 h-3 text-gold" /> Check-Out
              </label>
              <input
                id="hero-check-out"
                type="date"
                value={checkOut}
                min={checkIn || defaultCheckIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border-b border-white/25 bg-transparent py-1.5 text-xs sm:text-sm text-white font-normal outline-none focus:border-gold transition-colors [color-scheme:dark]"
                required
              />
            </div>

            {/* Room */}
            <div>
              <label htmlFor="hero-room-type" className="eyebrow block mb-1.5 flex items-center gap-1.5 !text-[10px] font-semibold text-gold">
                <Bed className="w-3 h-3 text-gold" /> Room
              </label>
              <select
                id="hero-room-type"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full border-b border-white/25 bg-transparent py-1.5 text-xs sm:text-sm text-white font-normal outline-none focus:border-gold transition-colors [&>option]:bg-ink"
              >
                <option value="Standard Double Room">Standard Double (₹2,999)</option>
                <option value="Deluxe Double Room">Deluxe Double (₹3,999)</option>
                <option value="Grand Benale Luxury Suite">Grand Luxury Suite (₹5,499)</option>
              </select>
            </div>

            {/* Guests */}
            <div>
              <label htmlFor="hero-guests-select" className="eyebrow block mb-1.5 flex items-center gap-1.5 !text-[10px] font-semibold text-gold">
                <Users className="w-3 h-3 text-gold" /> Guests
              </label>
              <select
                id="hero-guests-select"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full border-b border-white/25 bg-transparent py-1.5 text-xs sm:text-sm text-white font-normal outline-none focus:border-gold transition-colors [&>option]:bg-ink"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4+ Guests</option>
              </select>
            </div>

            {/* Submit */}
            <div className="sm:col-span-2 lg:col-span-1">
              <button
                type="submit"
                className="btn-gold w-full !py-2.5 !text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md hover:brightness-105"
              >
                <span>Check Rates</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
