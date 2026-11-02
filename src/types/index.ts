export interface Room {
  id: string;
  name: string;
  subtitle: string;
  category: 'standard' | 'deluxe' | 'suite';
  price: string;
  size: string;
  occupancy: string;
  bed: string;
  image: string;
  description: string;
  amenities: string[];
  features: string[];
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'all' | 'rooms' | 'dining' | 'hotel' | 'events';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  stayDate: string;
  rating: number;
  comment: string;
  tag: string;
}

export interface Attraction {
  name: string;
  distance: string;
  time: string;
  description: string;
  icon: string;
}

export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  roomType: string;
  adults: number;
  children: number;
  guestName?: string;
  email?: string;
  phone?: string;
  specialRequests?: string;
}

