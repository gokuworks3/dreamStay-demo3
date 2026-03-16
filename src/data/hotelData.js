export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Rooms', path: '/rooms' },
  { label: 'Amenities', path: '/amenities' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Booking', path: '/booking' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const heroSlides = [
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80',
    title: 'Where Golden Sunsets Meet Timeless Luxury',
    subtitle:
      'DreamStay curates resort moments with ocean views, refined interiors, and flawless personalized service.',
  },
  {
    url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1800&q=80',
    title: 'A Signature Escape for Modern Travelers',
    subtitle:
      'Wake up in handcrafted suites, unwind at our world-class spa, and experience elevated hospitality.',
  },
  {
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80',
    title: 'Luxury Redefined in Every Detail',
    subtitle:
      'From curated cuisine to private concierge support, every DreamStay visit is designed to feel exceptional.',
  },
]

export const promoOffers = [
  {
    id: 'golden-hour',
    title: 'Golden Hour Getaway',
    highlight: '20% Off',
    description:
      'Reserve three nights or more and enjoy sunset dining credit with complimentary airport pickup.',
  },
  {
    id: 'spa-retreat',
    title: 'Spa Serenity Weekend',
    highlight: 'Free Spa Session',
    description:
      'Book a Deluxe Room for the weekend and receive one signature spa ritual for two guests.',
  },
  {
    id: 'family-voyage',
    title: 'Family Luxury Voyage',
    highlight: 'Kids Stay Free',
    description:
      'Enjoy larger suite upgrades, family brunch, and private beach access for unforgettable moments.',
  },
]

export const rooms = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    type: 'Standard Room',
    price: 220,
    guests: 2,
    size: '38 sqm',
    description:
      'A sophisticated retreat with warm textures, plush bedding, and private balcony views.',
    amenities: ['Queen Bed', 'Balcony', 'Rain Shower', 'Smart TV', 'Mini Bar'],
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    type: 'Deluxe Room',
    price: 360,
    guests: 3,
    size: '52 sqm',
    description:
      'Expanded living comfort with deep-soak tub, lounge seating, and sweeping resort panoramas.',
    amenities: [
      'King Bed',
      'Ocean View',
      'Lounge Area',
      'Coffee Station',
      'Butler Service',
    ],
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'luxury-suite',
    name: 'Luxury Suite',
    type: 'Luxury Suite',
    price: 620,
    guests: 4,
    size: '84 sqm',
    description:
      'The pinnacle of DreamStay living with dedicated concierge, private terrace, and curated experiences.',
    amenities: [
      'Private Terrace',
      'Jacuzzi',
      'Dining Lounge',
      'Personal Concierge',
      'Premium Bar',
    ],
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&w=1200&q=80',
    ],
  },
]

export const amenities = [
  {
    id: 'swimming-pool',
    title: 'Swimming Pool',
    icon: 'pool',
    description:
      'Infinity-edge pool with daybeds, private cabanas, and a sunset beverage concierge service.',
  },
  {
    id: 'spa',
    title: 'Spa',
    icon: 'spa',
    description:
      'Award-winning spa rituals featuring aromatherapy suites, hydrotherapy, and tailored wellness programs.',
  },
  {
    id: 'restaurant',
    title: 'Restaurant',
    icon: 'restaurant',
    description:
      'Fine dining experiences crafted by renowned chefs using globally inspired and locally sourced cuisine.',
  },
  {
    id: 'gym',
    title: 'Gym',
    icon: 'gym',
    description:
      '24/7 high-performance fitness studio with panoramic views and personalized training sessions.',
  },
  {
    id: 'wifi',
    title: 'Free WiFi',
    icon: 'wifi',
    description:
      'Fast and secure high-speed connectivity available in every suite, lounge, and common area.',
  },
]

export const galleryPhotos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
    caption: 'Luminous arrival lobby with artisan details',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Ocean-view infinity deck at golden hour',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    caption: 'Elegant guest suites with bespoke materials',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80',
    caption: 'Private dining lounge and curated tasting menus',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?auto=format&fit=crop&w=1200&q=80',
    caption: 'Contemporary interiors with warm ambient light',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?auto=format&fit=crop&w=1200&q=80',
    caption: 'Spa sanctuary crafted for pure restoration',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Destination dining moments by moonlight',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?auto=format&fit=crop&w=1200&q=80',
    caption: 'Luxury suite living area with private terrace',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Signature drinks at the skyline bar',
  },
]

export const hotelStats = [
  { label: 'Luxury Suites', value: '38' },
  { label: 'Global Awards', value: '14' },
  { label: 'Guest Satisfaction', value: '99%' },
  { label: 'Years of Legacy', value: '21' },
]
