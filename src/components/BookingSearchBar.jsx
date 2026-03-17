import { motion as Motion } from 'framer-motion'
import { CalendarDays, Search, Users } from 'lucide-react'
import { useState } from 'react'

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const defaultForm = {
  checkIn: '',
  checkOut: '',
  guests: '2',
}

function BookingSearchBar() {
  const [form, setForm] = useState(defaultForm)
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage(
      `Searching available stays from ${form.checkIn || 'selected check-in'} to ${form.checkOut || 'selected check-out'} for ${form.guests} guest(s).`
    )
  }

  return (
    <Motion.section
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="section-wrap relative -mt-10 pt-0 sm:-mt-16"
    >
      <form
        onSubmit={handleSubmit}
        className="glass-card grid gap-4 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-4 lg:items-end"
      >
        <label className="text-xs font-semibold uppercase tracking-[0.16em] text-pureWhite/85">
          Check In
          <span className="relative mt-2 block">
            <CalendarDays
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gold"
            />
            <input
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              required
              className="input-luxury pl-10"
            />
          </span>
        </label>

        <label className="text-xs font-semibold uppercase tracking-[0.16em] text-pureWhite/85">
          Check Out
          <span className="relative mt-2 block">
            <CalendarDays
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gold"
            />
            <input
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              required
              className="input-luxury pl-10"
            />
          </span>
        </label>

        <label className="text-xs font-semibold uppercase tracking-[0.16em] text-pureWhite/85">
          Guests
          <span className="relative mt-2 block">
            <Users
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gold"
            />
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="input-luxury pl-10"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
            </select>
          </span>
        </label>

        <button type="submit" className="btn-gold w-full">
          <Search size={15} className="mr-2" />
          Search
        </button>
      </form>

      {message ? <p className="mt-3 text-sm text-gold">{message}</p> : null}
    </Motion.section>
  )
}

export default BookingSearchBar

