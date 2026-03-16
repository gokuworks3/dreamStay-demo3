import { Crown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/hotelData'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClassName = ({ isActive }) =>
    `text-xs font-semibold uppercase tracking-[0.24em] transition ${
      isActive ? 'text-gold' : 'text-white/80 hover:text-gold'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gradient-to-r from-midnight/95 via-navy/90 to-midnight/95 backdrop-blur-xl">
      <div className="luxury-container flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <span className="rounded-full border border-gold/50 bg-white/10 p-2 text-gold transition group-hover:scale-105">
            <Crown size={18} />
          </span>
          <div className="leading-tight">
            <p className="font-display text-2xl text-white">DreamStay</p>
            <p className="text-[10px] uppercase tracking-[0.26em] text-gold/90">Luxury Resort Collection</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary Navigation">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={linkClassName}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-full border border-gold/40 bg-white/5 p-2 text-gold lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-midnight/95 px-4 py-4 lg:hidden">
          <nav className="luxury-container flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-[0.2em] ${
                    isActive
                      ? 'bg-gold/20 text-gold'
                      : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
