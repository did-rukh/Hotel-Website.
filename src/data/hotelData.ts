import type { Room, GalleryItem, Testimonial, Attraction } from '../types';

export const hotelInfo = {
  name: 'Hotel Grand Benale',
  tagline: 'Your Home of Comfort in Kannur',
  shortBio: 'A refined 4-star boutique sanctuary combining timeless Malabar hospitality with contemporary elegance in the vibrant heart of Kannur.',
  address: 'Kakkad Road, Kannur, Kerala 670002, India',
  phone: '+91 928 803 4446',
  phoneRaw: '+919288034446',
  whatsappNumber: '919288034446',
  email: 'info@grandbenale.com',
  rating: '8.8',
  ratingMax: '10',
  ratingLabel: 'Excellent',
  ratingSource: 'Expedia Guest Rating & Verified Stays',
  reviewCount: '150+',
  logo: '/images/grand-benale-white-logo1.webp',
  heroImage: '/images/lovable/hero.jpg',
  heroExterior: '/images/Gemini_Generated_Image_b4hkfrb4hkfrb4hk.png',
  exteriorImage: '/images/hotel_exterior.png',
  lobbyImage: '/images/hotel_lobby.png',
  receptionImage: '/images/reception.png',
  diningImage: '/images/fine_dining.png',
  diningAtmosphere: '/images/lovable/dining.jpg',
  suiteAtmosphere: '/images/lovable/suite.jpg',
  spaAtmosphere: '/images/lovable/spa.jpg',
  eventsImage: '/images/events_hall.png',
  social: {
    instagram: 'https://www.instagram.com/grand_benale/',
    facebook: 'https://www.facebook.com/profile.php?id=61582467994351',
  },
  checkInTime: '02:00 PM',
  checkOutTime: '12:00 PM',
};

export const hotelStats = [
  { value: '4-Star', label: 'Luxury Boutique Status', detail: 'Premium comfort' },
  { value: '36+', label: 'Elegantly Appointed Rooms', detail: 'Curated interiors' },
  { value: '8.8/10', label: 'Guest Rating Score', detail: 'Verified traveler reviews' },
  { value: '24/7', label: 'Front Desk & Room Service', detail: 'Attentive Malabar care' },
];

export const roomsData: Room[] = [
  {
    id: 'standard-double',
    name: 'Standard Double Room',
    subtitle: 'Cozy serenity with modern business & leisure conveniences',
    category: 'standard',
    price: '₹2,999',
    size: '260 sq.ft (24 m²)',
    occupancy: '2 Guests',
    bed: 'Queen Size Plush Bed',
    image: '/images/standard_room.png',
    description:
      'Warmly illuminated with rich amber woods, fine linens, and soft textures. Perfect for solo executives or couples seeking peaceful retreat after exploring Kannur city.',
    amenities: [
      'High-Speed Fiber Wi-Fi',
      'Individual Climate Control (AC)',
      '43" Smart LED TV with Streaming',
      'Tea & Coffee Station',
      'Daily Housekeeping',
      'Complimentary Bottled Water',
      'Work Desk with Ergonomic Seating',
      'Private Bathroom with Rain Shower',
    ],
    features: ['City View', 'Soundproof Windows', 'Electronic Safe', 'Premium Toiletries'],
  },
  {
    id: 'deluxe-double',
    name: 'Deluxe Double Room',
    subtitle: 'Enhanced comfort, spacious layout and refined aesthetic touches',
    category: 'deluxe',
    price: '₹3,999',
    size: '340 sq.ft (32 m²)',
    occupancy: '2 - 3 Guests',
    bed: 'King Size Premium Bed',
    image: '/images/deluxe_room.png',
    description:
      'Spacious and thoughtfully styled with rich teak finishes, generous vanity, and plush lounge seating. Designed for discerning travelers desiring elevated luxury.',
    amenities: [
      'Complimentary Gourmet Breakfast',
      'High-Speed Wi-Fi',
      'Individual Climate Control (AC)',
      '50" 4K Smart TV',
      'Mini Refrigerator & Coffee Station',
      'In-room Digital Safe',
      'Bathrobes & Plush Slippers',
      'Luxury Herbal Toiletries',
    ],
    features: ['Panoramic City View', 'Lounge Sitting Area', 'Walk-in Wardrobe', 'Express Laundry Option'],
  },
  {
    id: 'luxury-suite',
    name: 'Grand Benale Luxury Suite',
    subtitle: 'The pinnacle of bespoke luxury with separate living and sleeping quarters',
    category: 'suite',
    price: '₹5,499',
    size: '520 sq.ft (48 m²)',
    occupancy: '3 - 4 Guests',
    bed: 'Master King Bed + Daybed',
    image: '/images/luxury_suite.png',
    description:
      'Our signature master suite features an expansive master bedroom, separate stylish living parlor, executive meeting corner, and lavish bath sanctuary.',
    amenities: [
      'Complimentary Gourmet Buffet Breakfast',
      'Priority Check-in & Late Check-out',
      'Ultra High-Speed Dedicated Wi-Fi',
      '55" Ultra HD Entertainment System',
      'Espresso Machine & Gourmet Tea Bar',
      'Mini Bar & Refrigerator',
      'Spacious Marble Bathroom with Bathtub & Rain Shower',
      '24/7 Dedicated Butler Assistance',
    ],
    features: ['Private Living Room', 'Executive Dining Table', 'Curated Art Collection', 'Scenic Skyline Vistas'],
  },
];

export const amenitiesList = [
  {
    title: 'High-Speed Wi-Fi',
    category: 'Connectivity',
    desc: 'Seamless dual-band high-speed fiber internet throughout all rooms, suites, and common areas.',
  },
  {
    title: 'Ample Secure Parking',
    category: 'Convenience',
    desc: 'Spacious on-site car parking with 24/7 security surveillance and dedicated valet assistance.',
  },
  {
    title: 'Fine Dining Restaurant',
    category: 'Gastronomy',
    desc: 'Authentic Malabar coastal specialties, North & South Indian delicacies, and Continental cuisines.',
  },
  {
    title: '24/7 Front Desk & Concierge',
    category: 'Hospitality',
    desc: 'Round-the-clock reception team ready to organize local Kannur tours, taxi cabs, and custom requests.',
  },
  {
    title: 'Central Air Conditioning',
    category: 'Comfort',
    desc: 'Individually regulated, whisper-quiet climate control in every guest accommodation.',
  },
  {
    title: 'Banquet & Events Hall',
    category: 'Events',
    desc: 'Sophisticated event spaces with audio-visual equipment for weddings, conferences, and parties.',
  },
  {
    title: 'Elevator & Accessibility',
    category: 'Facilities',
    desc: 'Modern swift elevators serving all guest room floors with wheel-chair accessible entry.',
  },
  {
    title: 'Express Laundry Service',
    category: 'Service',
    desc: 'Same-day professional dry cleaning, washing, and steam pressing for business & leisure attire.',
  },
  {
    title: '100% Power Backup',
    category: 'Safety',
    desc: 'Automatic heavy-duty generator backup ensuring uninterrupted comfort at all times.',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    src: '/images/Gemini_Generated_Image_b4hkfrb4hkfrb4hk.png',
    alt: 'Hotel Grand Benale exterior illuminated at dusk',
    title: 'Grand Benale Twilight Facade',
    category: 'hotel',
  },
  {
    id: 'g-2',
    src: '/images/hotel_lobby.png',
    alt: 'Double-height elegant lobby with marble flooring and chandelier',
    title: 'The Grand Atrium & Lobby',
    category: 'hotel',
  },
  {
    id: 'g-3',
    src: '/images/luxury_suite.png',
    alt: 'Luxury Suite bedroom and sitting area',
    title: 'Grand Benale Luxury Suite',
    category: 'rooms',
  },
  {
    id: 'g-4',
    src: '/images/fine_dining.png',
    alt: 'Ambient fine dining restaurant setup',
    title: 'The Signature Restaurant',
    category: 'dining',
  },
  {
    id: 'g-5',
    src: '/images/lovable/dining.jpg',
    alt: 'Gourmet coastal dining experience',
    title: 'Candlelit Coastal Gastronomy',
    category: 'dining',
  },
  {
    id: 'g-6',
    src: '/images/deluxe_room.png',
    alt: 'Deluxe Double Room interior with teak furnishings',
    title: 'Deluxe King Bedroom',
    category: 'rooms',
  },
  {
    id: 'g-7',
    src: '/images/standard_room.png',
    alt: 'Standard Double Room with modern warm lighting',
    title: 'Standard Double Room',
    category: 'rooms',
  },
  {
    id: 'g-8',
    src: '/images/lovable/suite.jpg',
    alt: 'Serene seaside suite atmosphere',
    title: 'Ocean Breeze Sanctuary',
    category: 'rooms',
  },
  {
    id: 'g-9',
    src: '/images/events_hall.png',
    alt: 'Spacious banquet hall ready for celebrations',
    title: 'Grand Benale Banquets & MICE',
    category: 'events',
  },
  {
    id: 'g-10',
    src: '/images/reception.png',
    alt: 'Reception and concierge desk with warm lighting',
    title: '24/7 Guest Welcome Desk',
    category: 'hotel',
  },
  {
    id: 'g-11',
    src: '/images/lovable/spa.jpg',
    alt: 'Wellness and relaxation sanctuary',
    title: 'Restorative Wellness Retreat',
    category: 'hotel',
  },
  {
    id: 'g-12',
    src: '/images/hotel_exterior.png',
    alt: 'Daytime architectural view of Hotel Grand Benale',
    title: 'Boutique Architecture',
    category: 'hotel',
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dr. Rahul Menon',
    location: 'Bangalore, India',
    stayDate: 'Stayed with Family',
    rating: 5,
    tag: 'Family Vacation',
    comment:
      'Hotel Grand Benale surpassed all our expectations. Spotlessly clean rooms, extremely courteous staff who attended to every need with genuine Kerala warmth, and delicious breakfast. Located close to the station yet wonderfully peaceful.',
  },
  {
    id: 't-2',
    name: 'Elena Rostova',
    location: 'Munich, Germany',
    stayDate: 'Solo Explorer',
    rating: 5,
    tag: 'International Traveler',
    comment:
      'The reception team helped me organize my visit to Payyambalam Beach and St. Angelo Fort. The room felt like a luxury sanctuary after a long travel journey. The air conditioning was silent and the bed was heavenly.',
  },
  {
    id: 't-3',
    name: 'Anand & Priya Kurup',
    location: 'Dubai, UAE',
    stayDate: 'Couple Stay',
    rating: 5,
    tag: 'Leisure Trip',
    comment:
      'We booked the Luxury Suite for a 3-night stay while attending a wedding in Kannur. The aesthetics, generous room layout, and dining service made our trip memorable. Truly the premier place to stay in Kannur.',
  },
  {
    id: 't-4',
    name: 'Karthik Nambiar',
    location: 'Kochi, Kerala',
    stayDate: 'Business Trip',
    rating: 5,
    tag: 'Corporate Guest',
    comment:
      'Superb high-speed Wi-Fi, seamless express check-in, ample car parking, and very quiet rooms for focused work. The in-house dining served fantastic Malabar fish curry. Will definitely be my go-to hotel in Kannur.',
  },
];

export const kannurAttractions: Attraction[] = [
  {
    name: 'Payyambalam Beach',
    distance: '3.2 km',
    time: '8 - 10 mins',
    description: 'Golden sand coastline renowned for tranquil evening walks, sunsets, and clean seaside promenades.',
    icon: 'Waves',
  },
  {
    name: 'St. Angelo Fort (Kannur Fort)',
    distance: '4.5 km',
    time: '12 mins',
    description: 'Historic 16th-century Portuguese fortress overlooking the Arabian Sea with panoramic harbor views.',
    icon: 'Shield',
  },
  {
    name: 'Kannur Railway Station (CAN)',
    distance: '1.8 km',
    time: '5 mins',
    description: 'Main railway junction connecting Kannur to Mumbai, Delhi, Bangalore, Kochi, and Chennai.',
    icon: 'Train',
  },
  {
    name: 'Kannur International Airport (CNN)',
    distance: '26 km',
    time: '35 - 40 mins',
    description: 'Modern international hub offering flights across the Middle East and major Indian metros.',
    icon: 'Plane',
  },
  {
    name: 'Muzhappilangad Drive-in Beach',
    distance: '14 km',
    time: '25 mins',
    description: "Asia's longest drive-in beach, famous for vehicular cruising along 4 km of firm sandy shore.",
    icon: 'Car',
  },
  {
    name: 'Arakkal Royal Palace & Museum',
    distance: '4.2 km',
    time: '10 mins',
    description: 'The historic palace residence of Kerala’s only Muslim royal lineage, exhibiting royal artifacts.',
    icon: 'Landmark',
  },
];

export const directBookingPerks = [
  {
    title: 'Guaranteed Best Rate',
    desc: 'No middleman booking commissions — best direct price guaranteed.',
  },
  {
    title: 'Complimentary Malabar Breakfast',
    desc: 'Freshly prepared traditional Kerala and continental morning spreads.',
  },
  {
    title: 'Flexible Check-In / Check-Out',
    desc: 'Subject to availability, enjoy stress-free early arrivals & late departures.',
  },
  {
    title: 'Priority Room Assignment',
    desc: 'Choice of higher floor, preferred bedding, and quiet side of the property.',
  },
];
