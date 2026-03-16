import { BedDouble, CheckCircle2, Ruler, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import SmartImage from './SmartImage'

function RoomCard({ room }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-gold/20 bg-white/85 shadow-luxury transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-56 overflow-hidden sm:h-64">
        <SmartImage
          src={room.images[0]}
          alt={room.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/65 to-transparent" />
        <p className="absolute bottom-4 left-4 rounded-full border border-gold/40 bg-midnight/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          From ${room.price}/Night
        </p>
      </div>

      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold text-midnight">{room.name}</h3>
          <p className="text-sm text-slate-600">{room.description}</p>
        </div>

        <div className="grid gap-2 text-xs uppercase tracking-[0.14em] text-slate-500 sm:grid-cols-3">
          <p className="flex items-center gap-2">
            <Users size={14} className="text-gold" />
            Up to {room.guests} Guests
          </p>
          <p className="flex items-center gap-2">
            <Ruler size={14} className="text-gold" />
            {room.size}
          </p>
          <p className="flex items-center gap-2">
            <BedDouble size={14} className="text-gold" />
            {room.type}
          </p>
        </div>

        <ul className="space-y-1 text-sm text-slate-700">
          {room.amenities.slice(0, 3).map((amenity) => (
            <li key={amenity} className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-gold" />
              {amenity}
            </li>
          ))}
        </ul>

        <Link
          to={`/booking?room=${encodeURIComponent(room.name)}`}
          className="inline-flex items-center rounded-full border border-gold/50 bg-midnight px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-royal"
        >
          Reserve Suite
        </Link>
      </div>
    </article>
  )
}

export default RoomCard
