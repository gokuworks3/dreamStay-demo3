import { motion as Motion } from 'framer-motion'
import { ArrowRight, Award, Clock, Dumbbell, Globe, ShieldCheck, Sparkles, UtensilsCrossed, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'
import AmenityCard from '../components/AmenityCard'
import BookingSearchBar from '../components/BookingSearchBar'
import HeroSection from '../components/HeroSection'
import StatsBanner from '../components/StatsBanner'
import TestimonialCard from '../components/TestimonialCard'

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const promoOffers = [
  {
    title: 'Weekend Getaway',
    badge: 'Save 20%',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    description: 'Escape to two nights of ocean luxury with breakfast and private transfer included.',
  },
  {
    title: 'Spa Package',
    badge: 'Free Massage',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80',
    description: 'Book any suite and enjoy rejuvenating spa rituals for two at no extra charge.',
  },
  {
    title: 'Luxury Suite Deal',
    badge: 'Suite Upgrade',
    image:
      'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=1600&q=80',
    description: 'Reserve three nights and receive a premium suite category upgrade when available.',
  },
]

const amenityPreview = [
  {
    title: 'Infinity Pool',
    description: 'Relax with panoramic ocean views and poolside concierge service all day long.',
    icon: Waves,
  },
  {
    title: 'Luxury Spa',
    description: 'Unwind with personalized wellness therapies crafted for full-body renewal.',
    icon: Sparkles,
  },
  {
    title: 'Fine Dining',
    description: 'Enjoy chef-curated tasting menus inspired by local and global cuisines.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Fitness Studio',
    description: 'Train in a premium gym featuring modern equipment and private coaching.',
    icon: Dumbbell,
  },
]

const testimonials = [
  {
    name: 'Sophie Laurent',
    rating: 5,
    quote:
      'From check-in to sunset dinner, every detail felt personalized. The suite and service were truly exceptional.',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Daniel Harper',
    rating: 5,
    quote:
      'DreamStay combines contemporary design with warm hospitality. It is the benchmark for luxury travel.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Isabella Rossi',
    rating: 5,
    quote:
      'The spa and private beach were incredible. We celebrated our anniversary and the team made it unforgettable.',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized globally for exceptional hospitality and luxury experiences.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted & Secure',
    description: 'Your safety and privacy are our top priorities with 24/7 security.',
  },
  {
    icon: Clock,
    title: '24/7 Concierge',
    description: 'Round-the-clock personalized assistance for all your needs.',
  },
  {
    icon: Globe,
    title: 'Prime Location',
    description: 'Nestled in a breathtaking coastal paradise with pristine beaches.',
  },
]

const stats = [
  { value: 15, suffix: '+', label: 'Years of Excellence' },
  { value: 98, suffix: '%', label: 'Guest Satisfaction' },
  { value: 50, suffix: '+', label: 'Luxury Suites' },
  { value: 24, suffix: '/7', label: 'Premium Service' },
]

function Home() {
  return (
    <div>
      <HeroSection />
      <BookingSearchBar />

      <section className="section-wrap">
        <Motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-8 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="section-kicker">Promotional Offers</p>
            <h2 className="section-title mt-3">Curated Deals for Elevated Stays</h2>
          </div>
          <Link to="/booking" className="btn-outline w-full sm:w-auto">
            View All Offers
          </Link>
        </Motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {promoOffers.map((offer) => (
            <Motion.article
              key={offer.title}
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              animate="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card overflow-hidden rounded-2xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-deepBlue">
                  {offer.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-3xl text-pureWhite">{offer.title}</h3>
                <p className="mt-2 text-sm text-pureWhite/78">{offer.description}</p>
                <Link to="/booking" className="btn-gold mt-4 w-full">
                  Claim Offer
                </Link>
              </div>
            </Motion.article>
          ))}
        </div>
      </section>

      <section className="section-wrap pt-4">
        <Motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-8"
        >
          <p className="section-kicker">Amenities Preview</p>
          <h2 className="section-title mt-3">Every Moment Crafted for Comfort</h2>
        </Motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {amenityPreview.map((amenity) => (
            <AmenityCard key={amenity.title} amenity={amenity} />
          ))}
        </div>

        <Link to="/amenities" className="btn-gold mt-8 w-full sm:w-auto">
          Explore All Amenities
        </Link>
      </section>

      <section className="section-wrap pt-6">
        <Motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-8"
        >
          <p className="section-kicker">Guest Testimonials</p>
          <h2 className="section-title mt-3">What Our Guests Say</h2>
        </Motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <Motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-8 text-center"
        >
          <p className="section-kicker mx-auto">Why Choose Us</p>
          <h2 className="section-title mt-3">The DreamStay Difference</h2>
        </Motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <Motion.div
              key={item.title}
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              animate="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <Motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mx-auto mb-4 inline-flex rounded-2xl border border-gold/40 bg-gold/10 p-4 text-gold transition-shadow duration-300 group-hover:shadow-glow"
              >
                <item.icon size={28} />
              </Motion.div>
              <h3 className="font-heading text-xl text-pureWhite">{item.title}</h3>
              <p className="mt-2 text-sm text-pureWhite/70">{item.description}</p>
            </Motion.div>
          ))}
        </div>

        <div className="mt-12">
          <StatsBanner stats={stats} />
        </div>
      </section>

      <section className="section-wrap">
        <Motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80"
              alt="Luxury resort view"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deepBlue/95 via-deepBlue/80 to-deepBlue/60" />
          </div>

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
            <div className="max-w-2xl">
              <p className="section-kicker">Limited Time Offer</p>
              <h2 className="mt-3 text-3xl font-semibold text-pureWhite sm:text-4xl lg:text-5xl">
                Begin Your <span className="text-gradient-gold">Luxury Journey</span> Today
              </h2>
              <p className="mt-4 text-base text-pureWhite/80 sm:text-lg">
                Book now and receive 15% off your first stay plus complimentary breakfast and spa
                credits. Your dream escape awaits.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/booking" className="btn-gold">
                  Reserve Now
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/rooms" className="btn-outline">
                  View Rooms
                </Link>
              </div>
            </div>
          </div>
        </Motion.div>
      </section>
    </div>
  )
}

export default Home

