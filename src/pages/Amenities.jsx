import { motion as Motion } from 'framer-motion'
import {
  Briefcase,
  ConciergeBell,
  Dumbbell,
  Landmark,
  UtensilsCrossed,
  Waves,
  Wifi,
  Wind,
} from 'lucide-react'
import AmenityCard from '../components/AmenityCard'

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: 'easeOut' } },
}

const amenities = [
  {
    title: 'Swimming Pool',
    description: 'Infinity-edge pool deck with private cabanas and panoramic sea horizon views.',
    icon: Waves,
  },
  {
    title: 'Luxury Spa',
    description: 'Tailored wellness therapies and deep relaxation rituals by expert specialists.',
    icon: Wind,
  },
  {
    title: 'Fine Dining',
    description: 'Signature restaurants and chef-curated menus inspired by global culinary artistry.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Fitness Center',
    description: 'Premium training studio with modern equipment and private personal coaching.',
    icon: Dumbbell,
  },
  {
    title: 'High-Speed WiFi',
    description: 'Reliable ultra-fast internet access across suites, lounges, and outdoor spaces.',
    icon: Wifi,
  },
  {
    title: 'Conference Hall',
    description: 'Elegant event spaces designed for executive meetings and luxury celebrations.',
    icon: Landmark,
  },
  {
    title: 'Private Beach',
    description: 'Exclusive shoreline access with beachside service and sunset dining options.',
    icon: Briefcase,
  },
  {
    title: 'Concierge Service',
    description: 'Round-the-clock assistance for bookings, transportation, and custom itineraries.',
    icon: ConciergeBell,
  },
]

function Amenities() {
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
        <p className="section-kicker">Resort Amenities</p>
        <h1 className="section-title mt-3">Designed for Elevated Comfort</h1>
      </Motion.div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {amenities.map((amenity) => (
          <AmenityCard key={amenity.title} amenity={amenity} />
        ))}
      </div>
    </section>
  )
}

export default Amenities

