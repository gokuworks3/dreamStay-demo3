import { Gem, HeartHandshake, Sparkles } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { hotelStats } from '../data/hotelData'

const aboutHeaderImage =
  'https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?auto=format&fit=crop&w=1800&q=80'

const values = [
  {
    title: 'Refined Hospitality',
    description:
      'Our team delivers personalized service with discreet attention to detail at every step of the guest journey.',
    icon: HeartHandshake,
  },
  {
    title: 'Design-Led Comfort',
    description:
      'Each DreamStay space blends contemporary elegance with natural textures to create calming, immersive environments.',
    icon: Gem,
  },
  {
    title: 'Memorable Experiences',
    description:
      'From curated excursions to sunset dining rituals, we craft moments that feel exclusive and deeply meaningful.',
    icon: Sparkles,
  },
]

function AboutPage() {
  return (
    <div className="pb-20">
      <PageHeader
        title="Our Story"
        subtitle="DreamStay began with one vision: reimagine resort living with modern luxury, warm hospitality, and soulful destinations."
        image={aboutHeaderImage}
      />

      <section className="luxury-container mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="luxury-panel p-6 sm:p-8">
          <p className="section-subtitle">Who We Are</p>
          <h2 className="text-4xl font-semibold text-midnight">A New Era of Premium Travel</h2>
          <div className="gold-divider" />
          <p className="mt-6 text-sm text-slate-600 sm:text-base">
            DreamStay was founded for travelers who seek more than accommodation. We create curated retreats
            where architecture, service, wellness, and cuisine come together in perfect harmony.
          </p>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Our mission is simple: deliver unforgettable hospitality with thoughtful design and authentic
            warmth. Every guest should leave renewed, inspired, and eager to return.
          </p>
        </article>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {hotelStats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-gold/30 bg-white/85 p-6 text-center shadow-lg">
              <p className="text-4xl font-semibold text-midnight sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-royal/80">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="luxury-container mt-12">
        <p className="section-subtitle">Our Vision</p>
        <h2 className="section-title">Luxury with Intention</h2>
        <div className="gold-divider" />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon

            return (
              <article key={value.title} className="luxury-panel p-6">
                <span className="inline-flex rounded-2xl border border-gold/35 bg-gold/10 p-3 text-gold">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-3xl font-semibold text-midnight">{value.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{value.description}</p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
