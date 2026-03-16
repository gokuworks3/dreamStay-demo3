import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import RoomCard from '../components/RoomCard'
import { rooms } from '../data/hotelData'

const roomHeaderImage =
  'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1800&q=80'

function RoomsPage() {
  const [activeType, setActiveType] = useState('All')
  const [maxPrice, setMaxPrice] = useState(700)
  const [guestPreference, setGuestPreference] = useState('Any')

  const roomTypes = ['All', ...new Set(rooms.map((room) => room.type))]

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const matchesType = activeType === 'All' || room.type === activeType
      const matchesPrice = room.price <= maxPrice
      const matchesGuests =
        guestPreference === 'Any' ? true : room.guests >= Number.parseInt(guestPreference, 10)

      return matchesType && matchesPrice && matchesGuests
    })
  }, [activeType, guestPreference, maxPrice])

  return (
    <div className="pb-20">
      <PageHeader
        title="Luxury Rooms & Suites"
        subtitle="Choose from elegantly designed accommodations tailored to every style of premium travel."
        image={roomHeaderImage}
      />

      <section className="luxury-container mt-12 space-y-8">
        <div className="luxury-panel p-5 sm:p-6">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-royal/80">
            <SlidersHorizontal size={15} className="text-gold" />
            Room Filtering
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Room Type
              </p>
              <div className="flex flex-wrap gap-2">
                {roomTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActiveType(type)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                      activeType === type
                        ? 'bg-midnight text-gold'
                        : 'border border-slate-300 bg-white text-slate-600 hover:border-gold/45'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Maximum Price: ${maxPrice}
              <input
                type="range"
                min="200"
                max="700"
                step="20"
                value={maxPrice}
                onChange={(event) => setMaxPrice(Number(event.target.value))}
                className="w-full accent-gold"
              />
            </label>

            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Guest Capacity
              <select
                value={guestPreference}
                onChange={(event) => setGuestPreference(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-midnight outline-none ring-gold/30 focus:ring"
              >
                <option value="Any">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </label>
          </div>
        </div>

        <p className="text-sm text-slate-600">{filteredRooms.length} room(s) found based on your filters.</p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {!filteredRooms.length ? (
          <p className="rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-700">
            No rooms match the selected filters. Try raising your price range or choosing another room type.
          </p>
        ) : null}
      </section>
    </div>
  )
}

export default RoomsPage
