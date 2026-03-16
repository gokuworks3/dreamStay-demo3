import { Link } from 'react-router-dom'
import { Crown, Mail, MapPin, Phone } from 'lucide-react'
import { navLinks } from '../data/hotelData'

function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-midnight text-white">
      <div className="luxury-container grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3 text-gold">
            <Crown size={20} />
            <p className="font-display text-2xl">DreamStay</p>
          </div>
          <p className="max-w-sm text-sm text-white/75">
            Premium hotel and resort experiences designed for travelers who expect elegance,
            comfort, and unforgettable memories.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Explore</p>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-white/80 transition hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm text-white/80">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Contact</p>
          <p className="flex items-center gap-2">
            <MapPin size={16} className="text-gold" />
            Marina Coast, Palm Bay, Maldives
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} className="text-gold" />
            +960 400 1900
          </p>
          <p className="flex items-center gap-2">
            <Mail size={16} className="text-gold" />
            hello@dreamstay.com
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs uppercase tracking-[0.18em] text-white/50">
        DreamStay 2026. Frontend Demo Experience.
      </div>
    </footer>
  )
}

export default Footer
