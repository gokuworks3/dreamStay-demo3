import { CheckCircle2, Send } from 'lucide-react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { rooms } from '../data/hotelData'

const bookingHeaderImage =
  'https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1800&q=80'

function BookingPage() {
  const location = useLocation()
  const queryRoom = new URLSearchParams(location.search).get('room') || ''

  const [bookingForm, setBookingForm] = useState({
    fullName: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: queryRoom,
    specialRequest: '',
  })
  const [confirmation, setConfirmation] = useState(null)
  const [validationError, setValidationError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setBookingForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setValidationError('')

    if (bookingForm.checkIn && bookingForm.checkOut && bookingForm.checkOut <= bookingForm.checkIn) {
      setValidationError('Check-out date must be after the check-in date.')
      return
    }

    const bookingId = `DS-${Date.now().toString().slice(-6)}`
    setConfirmation({ ...bookingForm, bookingId })

    setBookingForm({
      fullName: '',
      email: '',
      checkIn: '',
      checkOut: '',
      guests: '2',
      roomType: queryRoom,
      specialRequest: '',
    })
  }

  return (
    <div className="pb-20">
      <PageHeader
        title="Reserve Your DreamStay Experience"
        subtitle="Secure your room in minutes. This demo stores reservations locally and does not send data to a backend."
        image={bookingHeaderImage}
      />

      <section className="luxury-container mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <form onSubmit={handleSubmit} className="luxury-panel space-y-5 p-6 sm:p-8">
          <div>
            <p className="section-subtitle">Booking Form</p>
            <h2 className="text-4xl font-semibold text-midnight">Room Reservation</h2>
            <div className="gold-divider" />
          </div>

          <label className="block space-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            User Name
            <input
              type="text"
              name="fullName"
              value={bookingForm.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-midnight outline-none ring-gold/30 transition focus:ring"
            />
          </label>

          <label className="block space-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Email
            <input
              type="email"
              name="email"
              value={bookingForm.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-midnight outline-none ring-gold/30 transition focus:ring"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Check-In
              <input
                type="date"
                name="checkIn"
                value={bookingForm.checkIn}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-midnight outline-none ring-gold/30 transition focus:ring"
              />
            </label>
            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Check-Out
              <input
                type="date"
                name="checkOut"
                value={bookingForm.checkOut}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-midnight outline-none ring-gold/30 transition focus:ring"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Guests
              <select
                name="guests"
                value={bookingForm.guests}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-midnight outline-none ring-gold/30 transition focus:ring"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </label>

            <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Room Type
              <select
                name="roomType"
                value={bookingForm.roomType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-midnight outline-none ring-gold/30 transition focus:ring"
              >
                <option value="">Select a room type</option>
                {rooms.map((room) => (
                  <option key={room.id} value={room.name}>
                    {room.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block space-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Special Request
            <textarea
              rows="4"
              name="specialRequest"
              value={bookingForm.specialRequest}
              onChange={handleChange}
              placeholder="Any preferences?"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-midnight outline-none ring-gold/30 transition focus:ring"
            />
          </label>

          {validationError ? (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600">
              {validationError}
            </p>
          ) : null}

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-midnight px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-royal"
          >
            Confirm Reservation
            <Send size={14} />
          </button>
        </form>

        <aside className="space-y-6">
          <article className="luxury-panel p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal/75">Reservation Note</p>
            <p className="mt-3 text-sm text-slate-600">
              This is a frontend demo project. Booking submissions are shown on screen only and are not
              persisted to Node.js or MongoDB.
            </p>
          </article>

          {confirmation ? (
            <article className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-green-700">
                <CheckCircle2 size={16} />
                Booking Submitted
              </p>
              <p className="text-sm text-green-800">Reservation ID: {confirmation.bookingId}</p>
              <p className="mt-2 text-sm text-green-700">Guest: {confirmation.fullName}</p>
              <p className="text-sm text-green-700">Room: {confirmation.roomType}</p>
              <p className="text-sm text-green-700">
                Stay: {confirmation.checkIn} to {confirmation.checkOut}
              </p>
            </article>
          ) : null}
        </aside>
      </section>
    </div>
  )
}

export default BookingPage
