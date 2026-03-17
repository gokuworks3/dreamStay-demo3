import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Crown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Rooms', to: '/rooms' },
  { label: 'Amenities', to: '/amenities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Booking', to: '/booking' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const revealVariants = {
  hidden: { opacity: 0, y: -18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

const drawerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.32, ease: 'easeOut' } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.24, ease: 'easeIn' } },
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Motion.header
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-gold/40 bg-deepBlue/95 shadow-[0_8px_32px_rgba(5,15,28,0.6)] backdrop-blur-2xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Motion.span
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="rounded-full border border-gold/80 bg-gold/20 p-2 text-gold shadow-glow transition-shadow duration-300 group-hover:shadow-glow-lg"
          >
            <Crown size={16} />
          </Motion.span>
          <span className="font-heading text-2xl text-pureWhite">
            Dream<span className="text-gradient-gold">Stay</span>
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  isActive
                    ? 'text-gold'
                    : 'text-pureWhite/85 hover:text-gold'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <Motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link to="/booking" className="btn-gold hidden sm:inline-flex">
            Book Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="rounded-lg border border-gold/70 bg-deepBlue/70 p-2 text-gold lg:hidden"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <Motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-t border-gold/40 bg-deepBlue/95 backdrop-blur-xl lg:hidden"
          >
            <Motion.nav
              variants={revealVariants}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-2 p-4"
            >
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-medium transition ${
                      isActive ? 'bg-gold/20 text-gold' : 'text-pureWhite/90 hover:bg-pureWhite/10'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/booking" className="btn-gold mt-2" onClick={() => setOpen(false)}>
                Book Now
              </Link>
            </Motion.nav>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </Motion.header>
  )
}

export default Navbar

