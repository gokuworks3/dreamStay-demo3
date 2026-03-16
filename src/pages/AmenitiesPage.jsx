import { Dumbbell, Sparkles, UtensilsCrossed, Waves, Wifi } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { amenities } from '../data/hotelData'

const amenitiesHeaderImage =
  'https://images.unsplash.com/photo-1590490359854-dfba19688d70?auto=format&fit=crop&w=1800&q=80'

const iconMap = {
  pool: Waves,
  spa: Sparkles,
  restaurant: UtensilsCrossed,
  gym: Dumbbell,
  wifi: Wifi,
}

function AmenitiesPage() {
  return (
    <div className="pb-20">
      <PageHeader
        title="Elevated Amenities"
        subtitle="From restorative wellness to destination dining, every space is designed around indulgence and ease."
        image={amenitiesHeaderImage}
      />

      <section className="luxury-container mt-12">
        <p className="section-subtitle">Signature Facilities</p>
        <h2 className="section-title">Everything You Need for a Perfect Stay</h2>
        <div className="gold-divider" />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {amenities.map((item) => {
            const Icon = iconMap[item.icon]

            return (
              <article
                key={item.id}
                className="group luxury-panel p-6 transition hover:-translate-y-1 hover:border-gold/50"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-gold/35 bg-gold/10 p-3 text-gold transition group-hover:bg-gold/20">
                  <Icon size={24} />
                </div>
                <h3 className="text-3xl font-semibold text-midnight">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="luxury-container mt-14">
        <div className="grid gap-6 rounded-3xl border border-gold/30 bg-gradient-to-r from-midnight to-royal p-8 text-white lg:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/90">Wellness Hours</p>
            <p className="mt-3 text-lg">Spa and fitness services open daily from 6:00 AM to 11:00 PM.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/90">Dining Experience</p>
            <p className="mt-3 text-lg">Three signature restaurants with all-day fine dining and curated tasting menus.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/90">Guest Services</p>
            <p className="mt-3 text-lg">24/7 concierge, private transfers, and personalized itinerary planning.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AmenitiesPage
