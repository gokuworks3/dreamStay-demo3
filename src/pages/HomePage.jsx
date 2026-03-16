import { ArrowRight, CalendarDays, Sparkles, Users } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'
import RoomCard from '../components/RoomCard'
import { heroSlides, promoOffers, rooms } from '../data/hotelData'

const initialSearch = {
  checkIn: '',
  checkOut: '',
  guests: '2',
  roomType: 'Any',
}

function HomePage() {
  const [searchForm, setSearchForm] = useState(initialSearch)
  const [searchMessage, setSearchMessage] = useState('')

  const handleSearchChange = (event) => {
    const { name, value } = event.target
    setSearchForm((current) => ({ ...current, [name]: value }))
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    setSearchMessage(
      `Checking premium availability for ${searchForm.guests} guest(s) from ${
        searchForm.checkIn || 'your selected check-in'
      } to ${searchForm.checkOut || 'your selected check-out'}.`
    )
  }

  return (
    <div className="pb-20">
      <section className="relative">
        <ImageSlider
          images={heroSlides}
          heightClass="h-[88vh] min-h-[580px]"
          className="rounded-none"
          interval={5500}
        >
          <div className="luxury-container flex h-full items-center pt-16">
            <div className="max-w-3xl space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                <Sparkles size={14} />
                Five-Star Resort Living
              </p>
              <h1 className="text-balance text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                Dream Vacations Begin at DreamStay
              </h1>
              <p className="max-w-2xl text-balance text-sm text-slate-100 sm:text-base lg:text-lg">
                Experience bespoke hospitality, oceanfront elegance, and world-class amenities in a
                destination designed for unforgettable escapes.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/booking" className="link-pill">
                  Reserve Now
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/rooms"
                  className="inline-flex items-center rounded-full border border-white/35 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-gold hover:text-gold"
                >
                  Explore Rooms
                </Link>
              </div>
            </div>
          </div>
        </ImageSlider>
      </section>

      <section className="luxury-container relative z-20 -mt-16">
        <form
          onSubmit={handleSearchSubmit}
          className="luxury-panel grid gap-4 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-5"
        >
          <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Check-In
            <div className="relative">
              <CalendarDays
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gold"
              />
              <input
                type="date"
                name="checkIn"
                value={searchForm.checkIn}
                onChange={handleSearchChange}
                className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-3 text-sm text-midnight outline-none ring-gold/30 transition focus:ring"
                required
              />
            </div>
          </label>

          <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Check-Out
            <div className="relative">
              <CalendarDays
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gold"
              />
              <input
                type="date"
                name="checkOut"
                value={searchForm.checkOut}
                onChange={handleSearchChange}
                className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-3 text-sm text-midnight outline-none ring-gold/30 transition focus:ring"
                required
              />
            </div>
          </label>

          <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Guests
            <div className="relative">
              <Users
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gold"
              />
              <select
                name="guests"
                value={searchForm.guests}
                onChange={handleSearchChange}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-3 text-sm text-midnight outline-none ring-gold/30 transition focus:ring"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>
          </label>

          <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Room Type
            <select
              name="roomType"
              value={searchForm.roomType}
              onChange={handleSearchChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-midnight outline-none ring-gold/30 transition focus:ring"
            >
              <option value="Any">Any Room</option>
              <option value="Standard Room">Standard Room</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Luxury Suite">Luxury Suite</option>
            </select>
          </label>

          <button
            type="submit"
            className="self-end rounded-xl bg-midnight px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-royal"
          >
            Search Stay
          </button>
        </form>

        {searchMessage ? (
          <p className="mt-4 rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-midnight">
            {searchMessage}
          </p>
        ) : null}
      </section>

      <section className="luxury-container mt-20">
        <p className="section-subtitle">Promotional Offers</p>
        <h2 className="section-title">Exclusive Packages Crafted for You</h2>
        <div className="gold-divider" />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {promoOffers.map((offer) => (
            <article key={offer.id} className="gold-shimmer rounded-3xl border border-gold/35 p-[1px]">
              <div className="h-full rounded-3xl bg-white/90 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-royal/80">
                  {offer.highlight}
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-midnight">{offer.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{offer.description}</p>
                <Link to="/booking" className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-royal">
                  Claim Offer
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="luxury-container mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-subtitle">Featured Rooms</p>
            <h2 className="section-title">Stay in Signature Comfort</h2>
            <div className="gold-divider" />
          </div>
          <Link to="/rooms" className="link-pill">
            View All Rooms
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
