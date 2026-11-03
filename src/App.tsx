import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Dining } from './components/Dining';
import { Events } from './components/Events';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { BookingModal } from './components/BookingModal';
import { RoomDetailsModal } from './components/RoomDetailsModal';
import { ScrollToTop } from './components/ScrollToTop';
import type { Room, BookingDetails } from './types';

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoomDetails, setSelectedRoomDetails] = useState<Room | null>(null);
  const [bookingPrefill, setBookingPrefill] = useState<Partial<BookingDetails>>({});

  const handleOpenBooking = () => {
    setBookingPrefill({});
    setIsBookingModalOpen(true);
  };

  const handleCheckAvailabilityFromHero = (details: BookingDetails) => {
    setBookingPrefill(details);
    setIsBookingModalOpen(true);
  };

  const handleBookSpecificRoom = (roomName: string) => {
    setBookingPrefill({
      roomType: roomName,
    });
    setIsBookingModalOpen(true);
  };

  const handleViewRoomDetails = (room: Room) => {
    setSelectedRoomDetails(room);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-ink relative">
      {/* Top Fixed Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main>
        {/* Hero Section with Live Booking Widget */}
        <Hero onCheckAvailability={handleCheckAvailabilityFromHero} />

        {/* About Section: The Art of a Warmer Welcome */}
        <About onOpenBooking={handleOpenBooking} />

        {/* Accommodations & Room Categories */}
        <Rooms
          onSelectRoom={handleViewRoomDetails}
          onBookRoom={handleBookSpecificRoom}
        />

        {/* Signature Restaurant & Dining Experience */}
        <Dining onOpenBooking={handleOpenBooking} />

        {/* Banquets, Conferences & Events */}
        <Events onOpenBooking={handleOpenBooking} />

        {/* Hotel Amenities & Facilities Grid */}
        <Amenities />

        {/* Photo Gallery with Filter & Full-Screen Lightbox */}
        <Gallery />

        {/* Verified Guest Ratings & Reviews */}
        <Testimonials />

        {/* Location & Kannur Landmarks Guide */}
        <Location />
      </main>

      {/* Modern Luxury Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <FloatingMobileBar onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking & Inquiry Modal */}
      <BookingModal
        key={`${isBookingModalOpen}-${bookingPrefill.roomType || ''}`}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialDetails={bookingPrefill}
      />

      {/* Room Details Modal */}
      <RoomDetailsModal
        room={selectedRoomDetails}
        onClose={() => setSelectedRoomDetails(null)}
        onBookRoom={handleBookSpecificRoom}
      />
      {/* Scroll-To-Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
