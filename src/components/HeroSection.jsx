import { motion as Motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

const heroImage =
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1900&q=80'

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 4,
      })),
    []
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <Motion.span
          key={p.id}
          className="absolute rounded-full bg-gold/30"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

function HeroSection() {
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 700], [0, 170])
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="relative flex min-h-[96svh] items-center overflow-hidden sm:min-h-[100svh]">
      <Motion.div style={{ y: parallaxY }} className="absolute inset-0">
        <img src={heroImage} alt="DreamStay luxury resort" className="h-full w-full object-cover" />
      </Motion.div>

      <div className="hero-overlay absolute inset-0" />
      <FloatingParticles />

      <Motion.div
        style={{ opacity: textOpacity }}
        className="section-wrap relative z-10 py-24 sm:py-28"
      >
        <Motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-kicker"
        >
          Exclusive Coastal Escape
        </Motion.p>

        <Motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 max-w-4xl text-shadow-soft text-4xl leading-tight sm:text-6xl lg:text-7xl"
        >
          <span className="text-pureWhite">Experience </span>
          <span className="text-gradient-gold">Luxury Living</span>
          <span className="text-pureWhite"> at DreamStay</span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 max-w-2xl text-base text-pureWhite/85 sm:text-lg"
        >
          Indulge in oceanfront elegance, world-class dining, and bespoke hospitality designed for
          unforgettable moments.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 flex flex-wrap gap-3 sm:gap-4"
        >
          <Link to="/booking" className="btn-gold w-full sm:w-auto">
            Book Your Stay
            <ArrowRight size={16} className="ml-2" />
          </Link>
          <Link to="/rooms" className="btn-outline w-full sm:w-auto">
            Explore Rooms
          </Link>
        </Motion.div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-pureWhite/50">Scroll</span>
          <Motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} className="text-gold/70" />
          </Motion.div>
        </div>
      </Motion.div>
    </section>
  )
}

export default HeroSection

