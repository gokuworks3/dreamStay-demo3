import { motion as Motion } from 'framer-motion'
import { Bath, BedDouble, UtensilsCrossed, Waves, Wifi, Wind } from 'lucide-react'
import { Link } from 'react-router-dom'

const iconMap = {
  Wifi,
  Breakfast: UtensilsCrossed,
  OceanView: Waves,
  AirConditioned: Wind,
  Bathtub: Bath,
  KingBed: BedDouble,
}

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function RoomCard({ room }) {
  return (
    <Motion.article
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true, amount: 0.22 }}
      className="glass-card group overflow-hidden transition duration-300 hover:-translate-y-1"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepBlue/80 via-deepBlue/20 to-transparent" />
        <p className="absolute bottom-4 left-4 rounded-full border border-gold/50 bg-deepBlue/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
          From ${room.price}/Night
        </p>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="font-heading text-3xl text-pureWhite">{room.name}</h3>
          <p className="mt-2 text-sm text-pureWhite/75">{room.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {room.amenities.map((item) => {
            const Icon = iconMap[item]
            return (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-pureWhite/10 px-3 py-1 text-xs text-pureWhite/85"
              >
                {Icon ? <Icon size={13} className="text-gold" /> : null}
                {item}
              </span>
            )
          })}
        </div>

        <Link
          to={`/booking?room=${encodeURIComponent(room.name)}`}
          className="btn-gold w-full"
        >
          Book Now
        </Link>
      </div>
    </Motion.article>
  )
}

export default RoomCard

