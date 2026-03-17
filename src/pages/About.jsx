import { motion as Motion } from 'framer-motion'
import { Gem, HeartHandshake, Leaf } from 'lucide-react'
import StatsBanner from '../components/StatsBanner'

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: 'easeOut' } },
}

const storyImage =
  'https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?auto=format&fit=crop&w=1900&q=80'

const values = [
  {
    title: 'Personalized Service',
    description: 'Our team crafts each journey with thoughtful details and intuitive hospitality.',
    icon: HeartHandshake,
  },
  {
    title: 'Timeless Elegance',
    description: 'Every space reflects design-forward luxury inspired by global resort excellence.',
    icon: Gem,
  },
  {
    title: 'Responsible Luxury',
    description: 'DreamStay blends premium travel with mindful sustainability and local culture.',
    icon: Leaf,
  },
]

const stats = [
  { label: 'Happy Guests', value: 5000, suffix: '+' },
  { label: 'Luxury Rooms', value: 100, suffix: '+' },
  { label: 'Years of Excellence', value: 10, suffix: '+' },
  { label: 'Average Rating', value: 4.9, suffix: '\u2605', decimals: 1 },
]

const team = [
  {
    name: 'Avery Collins',
    title: 'General Manager',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Liam Porter',
    title: 'Executive Chef',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Maya Jensen',
    title: 'Spa Director',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Noah Bennett',
    title: 'Guest Experience Lead',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80',
  },
]

function About() {
  return (
    <div>
      <section className="relative min-h-[70svh] overflow-hidden">
        <img src={storyImage} alt="DreamStay editorial story" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <Motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="section-wrap relative z-10 flex min-h-[70svh] items-end pb-16"
        >
          <div className="max-w-3xl">
            <p className="section-kicker">About DreamStay</p>
            <h1 className="mt-3 font-heading text-5xl text-pureWhite sm:text-6xl">Our Story of Modern Luxury</h1>
            <p className="mt-4 text-base text-pureWhite/85">
              DreamStay began with a single idea: to create elevated resort living where timeless
              design, heartfelt hospitality, and unforgettable experiences meet.
            </p>
          </div>
        </Motion.div>
      </section>

      <section className="section-wrap">
        <Motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8"
        >
          <p className="section-kicker">Mission & Values</p>
          <h2 className="section-title mt-3">Hospitality With Purpose</h2>
        </Motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Motion.article
                key={value.title}
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                animate="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="glass-card rounded-2xl p-6"
              >
                <span className="inline-flex rounded-full border border-gold/70 bg-gold/15 p-3 text-gold">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-heading text-3xl text-pureWhite">{value.title}</h3>
                <p className="mt-3 text-sm text-pureWhite/78">{value.description}</p>
              </Motion.article>
            )
          })}
        </div>
      </section>

      <section className="section-wrap pt-4">
        <StatsBanner stats={stats} />
      </section>

      <section className="section-wrap pt-6">
        <Motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8"
        >
          <p className="section-kicker">Leadership Team</p>
          <h2 className="section-title mt-3">The People Behind DreamStay</h2>
        </Motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Motion.article
              key={member.name}
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              animate="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card overflow-hidden rounded-2xl"
            >
              <img src={member.image} alt={member.name} className="h-64 w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-heading text-2xl text-pureWhite">{member.name}</h3>
                <p className="text-sm uppercase tracking-[0.15em] text-gold">{member.title}</p>
              </div>
            </Motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About

