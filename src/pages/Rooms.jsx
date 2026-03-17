import { motion as Motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import RoomCard from '../components/RoomCard'

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: 'easeOut' } },
}

const rooms = [
  {
    name: 'Standard',
    category: 'Standard',
    price: 220,
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80',
    description: 'Refined comfort with elegant decor and serene balcony city views.',
    amenities: ['Wifi', 'AirConditioned', 'Breakfast'],
  },
  {
    name: 'Deluxe',
    category: 'Standard',
    price: 340,
    image:
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80',
    description: 'Expanded room plan with premium linens, smart controls, and lounge seating.',
    amenities: ['Wifi', 'OceanView', 'KingBed'],
  },
  {
    name: 'Junior Suite',
    category: 'Suite',
    price: 460,
    image:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=80',
    description: 'Stylish suite living with curated amenities for high-end leisure travel.',
    amenities: ['KingBed', 'Bathtub', 'Breakfast'],
  },
  {
    name: 'Luxury Suite',
    category: 'Suite',
    price: 620,
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=80',
    description: 'A lavish suite with private terrace moments and signature concierge support.',
    amenities: ['OceanView', 'Bathtub', 'Wifi'],
  },
  {
    name: 'Penthouse',
    category: 'Suite',
    price: 980,
    image:
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1600&q=80',
    description: 'Skyline penthouse luxury with panoramic views and exceptional privacy.',
    amenities: ['OceanView', 'KingBed', 'Breakfast'],
  },
  {
    name: 'Villa',
    category: 'Villa',
    price: 1250,
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80',
    description: 'Private beachfront villa featuring pool deck, butler service, and grand interiors.',
    amenities: ['Wifi', 'OceanView', 'Bathtub'],
  },
]

function Rooms() {
  const [activeType, setActiveType] = useState('All')
  const [sortBy, setSortBy] = useState('price-asc')

  const filteredRooms = useMemo(() => {
    const selectedRooms =
      activeType === 'All' ? [...rooms] : rooms.filter((room) => room.category === activeType)

    return selectedRooms.sort((a, b) => {
      if (sortBy === 'price-desc') {
        return b.price - a.price
      }
      return a.price - b.price
    })
  }, [activeType, sortBy])

  return (
    <section className="section-wrap">
      <Motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        animate="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-8"
      >
        <p className="section-kicker">Luxury Collection</p>
        <h1 className="section-title mt-3">Rooms & Suites</h1>
      </Motion.div>

      <Motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        animate="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="glass-card mb-8 grid gap-4 rounded-2xl p-4 sm:grid-cols-2"
      >
        <label className="text-xs font-semibold uppercase tracking-[0.16em] text-pureWhite/75">
          Filter by Room Type
          <select
            value={activeType}
            onChange={(event) => setActiveType(event.target.value)}
            className="input-luxury mt-2"
          >
            <option value="All">All</option>
            <option value="Suite">Suite</option>
            <option value="Standard">Standard</option>
            <option value="Villa">Villa</option>
          </select>
        </label>

        <label className="text-xs font-semibold uppercase tracking-[0.16em] text-pureWhite/75">
          Sort by Price
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="input-luxury mt-2"
          >
            <option value="price-asc">Low to High</option>
            <option value="price-desc">High to Low</option>
          </select>
        </label>
      </Motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredRooms.map((room) => (
          <RoomCard key={room.name} room={room} />
        ))}
      </div>
    </section>
  )
}

export default Rooms

