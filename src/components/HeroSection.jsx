import { motion as Motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const heroImage =
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1900&q=80'

function HeroSection() {
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 700], [0, 170])

  return (
    <section className="relative flex min-h-[96svh] items-center overflow-hidden sm:min-h-[100svh]">
      <Motion.div style={{ y: parallaxY }} className="absolute inset-0">
        <img src={heroImage} alt="DreamStay luxury resort" className="h-full w-full object-cover" />
      </Motion.div>

      <div className="hero-overlay absolute inset-0" />

      <Motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="section-wrap relative z-10 py-24 sm:py-28"
      >
        <p className="section-kicker">Exclusive Coastal Escape</p>
        <h1 className="mt-4 max-w-4xl text-shadow-soft text-4xl leading-tight text-pureWhite sm:text-6xl lg:text-7xl">
          Experience Luxury Living at DreamStay
        </h1>
        <p className="mt-6 max-w-2xl text-base text-pureWhite/85 sm:text-lg">
          Indulge in oceanfront elegance, world-class dining, and bespoke hospitality designed for
          unforgettable moments.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
          <Link to="/booking" className="btn-gold w-full sm:w-auto">
            Book Your Stay
            <ArrowRight size={16} className="ml-2" />
          </Link>
          <Link to="/rooms" className="btn-outline w-full sm:w-auto">
            Explore Rooms
          </Link>
        </div>
      </Motion.div>
    </section>
  )
}

export default HeroSection

