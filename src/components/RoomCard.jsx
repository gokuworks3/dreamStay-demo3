import { motion as Motion } from 'framer-motion'
import { ArrowRight, Bath, BedDouble, Sparkles, UtensilsCrossed, Waves, Wifi, Wind } from 'lucide-react'
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
  const isPremium = room.price >= 500

  return (
    <Motion.article
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true, amount: 0.22 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card group relative overflow-hidden"
    >
      {isPremium && (
        <div className="absolute -right-12 top-6 z-20 rotate-45 bg-gradient-to-r from-gold to-goldLight px-12 py-1 text-[10px] font-bold uppercase tracking-wider text-deepBlue shadow-lg">
          <Sparkles size={10} className="mr-1 inline" />
          Premium
        </div>
      )}

      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepBlue/90 via-deepBlue/30 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

        <Motion.span
          whileHover={{ scale: 1.05 }}
          className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-deepBlue shadow-glow"
        >
          From ${room.price}/Night
        </Motion.span>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="font-heading text-2xl text-pureWhite transition-colors group-hover:text-gold sm:text-3xl">
            {room.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-pureWhite/70">{room.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {room.amenities.map((item) => {
            const Icon = iconMap[item]
            return (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/[0.06] px-3 py-1 text-xs text-pureWhite/85 transition-colors hover:border-gold/50 hover:bg-gold/10"
              >
                {Icon ? <Icon size={13} className="text-gold" /> : null}
                {item}
              </span>
            )
          })}
        </div>

        <Link to={`/booking?room=${encodeURIComponent(room.name)}`} className="btn-gold w-full">
          Book Now
          <ArrowRight size={14} className="ml-2" />
        </Link>
      </div>
    </Motion.article>
  )
}

export default RoomCard

