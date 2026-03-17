import { motion as Motion } from 'framer-motion'
import { Dumbbell, Sparkles, UtensilsCrossed, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'
import AmenityCard from '../components/AmenityCard'
import BookingSearchBar from '../components/BookingSearchBar'
import HeroSection from '../components/HeroSection'
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
    </div>
  )
}

export default Home

