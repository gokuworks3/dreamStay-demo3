import { motion as Motion } from 'framer-motion'
import { Crown, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Rooms', to: '/rooms' },
  { label: 'Amenities', to: '/amenities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Booking', to: '/booking' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const social = [Instagram, Facebook, Twitter, Youtube]

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function Footer() {
  return (
    <Motion.footer
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-8 border-t border-gold/30 bg-deepBlue"
    >
      <div className="section-wrap grid gap-10 pb-12 pt-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="space-y-4">
          <p className="flex items-center gap-2 text-2xl text-pureWhite">
            <span className="rounded-full border border-gold/70 bg-gold/15 p-2 text-gold">
              <Crown size={16} />
            </span>
            <span className="font-heading">DreamStay</span>
          </p>
          <p className="text-sm text-pureWhite/75">
            DreamStay crafts premium resort journeys blending refined luxury, modern comfort, and
            unforgettable hospitality.
          </p>
          <div className="flex items-center gap-3">
            {social.map((Icon, index) => (
              <Motion.span
                key={index}
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                animate="visible"
                viewport={{ once: true }}
                className="rounded-full border border-gold/50 p-2 text-gold"
              >
                <Icon size={16} />
              </Motion.span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-xl text-gold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-pureWhite/80">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm text-pureWhite/80">
          <h3 className="font-heading text-xl text-gold">Contact Info</h3>
          <p className="flex items-center gap-2">
            <Phone size={14} className="text-gold" />
            +960 400 1900
          </p>
          <p className="flex items-center gap-2">
            <Mail size={14} className="text-gold" />
            hello@dreamstay.com
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={14} className="text-gold" />
            Marina Coast, Palm Bay, Maldives
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-xl text-gold">Newsletter</h3>
          <p className="mb-3 text-sm text-pureWhite/75">
            Get exclusive offers and travel inspiration delivered monthly.
          </p>
          <form className="space-y-3">
            <input type="email" placeholder="Enter your email" className="input-luxury" />
            <button type="submit" className="btn-gold w-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-pureWhite/12 py-4 text-center text-xs text-pureWhite/60">
        {'\u00A9'} {new Date().getFullYear()} DreamStay. All rights reserved.
      </div>
    </Motion.footer>
  )
}

export default Footer

