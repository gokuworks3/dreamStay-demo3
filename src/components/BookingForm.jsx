import { AnimatePresence, motion as Motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'
import { useMemo, useState } from 'react'

const roomRates = {
  Standard: 220,
  Deluxe: 340,
  'Junior Suite': 460,
  'Luxury Suite': 620,
  Penthouse: 980,
  Villa: 1250,
}

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const baseForm = {
  guestName: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  guests: '2',
  roomType: 'Deluxe',
  requests: '',
}

function BookingForm({ initialRoomType }) {
  const defaultRoomType = roomRates[initialRoomType] ? initialRoomType : baseForm.roomType
  const [form, setForm] = useState({ ...baseForm, roomType: defaultRoomType })
  const [errors, setErrors] = useState({})
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)

  const nights = useMemo(() => {
    if (!form.checkIn || !form.checkOut) {
      return 0
    }

    const checkInDate = new Date(form.checkIn)
    const checkOutDate = new Date(form.checkOut)
    const diff = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))

    return Number.isFinite(diff) && diff > 0 ? diff : 0
  }, [form.checkIn, form.checkOut])

  const roomPrice = roomRates[form.roomType] ?? 0
  const totalAmount = nights * roomPrice

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.guestName.trim()) {
      nextErrors.guestName = 'Guest name is required.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Phone number is required.'
    } else if (!/^[+]?\d[\d\s-]{7,}$/.test(form.phone)) {
      nextErrors.phone = 'Please enter a valid phone number.'
    }

    if (!form.checkIn) {
      nextErrors.checkIn = 'Check-in date is required.'
    }

    if (!form.checkOut) {
      nextErrors.checkOut = 'Check-out date is required.'
    }

    if (form.checkIn && form.checkOut && nights <= 0) {
      nextErrors.checkOut = 'Check-out must be after check-in.'
    }

    if (!form.roomType) {
      nextErrors.roomType = 'Please choose a room type.'
    }

    if (!form.guests || Number(form.guests) < 1) {
      nextErrors.guests = 'Guests must be at least 1.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setErrors({})
    setIsSuccessOpen(true)
    setForm({ ...baseForm, roomType: defaultRoomType })
  }

  return (
    <Motion.section
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]"
    >
      <form onSubmit={handleSubmit} className="glass-card space-y-4 p-6 sm:p-8">
        <h2 className="font-heading text-4xl text-pureWhite">Reservation Form</h2>
        <p className="text-sm text-pureWhite/70">Secure your stay in under a minute.</p>

        <div>
          <input
            type="text"
            name="guestName"
            value={form.guestName}
            onChange={handleChange}
            placeholder="Guest Name"
            className="input-luxury"
          />
          {errors.guestName ? <p className="mt-1 text-xs text-red-300">{errors.guestName}</p> : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="input-luxury"
            />
            {errors.email ? <p className="mt-1 text-xs text-red-300">{errors.email}</p> : null}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="input-luxury"
            />
            {errors.phone ? <p className="mt-1 text-xs text-red-300">{errors.phone}</p> : null}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <input
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              className="input-luxury"
            />
            {errors.checkIn ? <p className="mt-1 text-xs text-red-300">{errors.checkIn}</p> : null}
          </div>

          <div>
            <input
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              className="input-luxury"
            />
            {errors.checkOut ? <p className="mt-1 text-xs text-red-300">{errors.checkOut}</p> : null}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <select name="guests" value={form.guests} onChange={handleChange} className="input-luxury">
              {Array.from({ length: 8 }).map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1} Guest{index > 0 ? 's' : ''}
                </option>
              ))}
            </select>
            {errors.guests ? <p className="mt-1 text-xs text-red-300">{errors.guests}</p> : null}
          </div>

          <div>
            <select
              name="roomType"
              value={form.roomType}
              onChange={handleChange}
              className="input-luxury"
            >
              {Object.keys(roomRates).map((room) => (
                <option key={room} value={room}>
                  {room}
                </option>
              ))}
            </select>
            {errors.roomType ? <p className="mt-1 text-xs text-red-300">{errors.roomType}</p> : null}
          </div>
        </div>

        <div>
          <textarea
            name="requests"
            value={form.requests}
            onChange={handleChange}
            rows="4"
            placeholder="Special Requests"
            className="input-luxury"
          />
        </div>

        <button type="submit" className="btn-gold w-full">
          Reserve Now
        </button>
      </form>

      <Motion.aside
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        animate="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="glass-card h-fit rounded-2xl p-6 lg:sticky lg:top-28"
      >
        <h3 className="font-heading text-3xl text-pureWhite">Booking Summary</h3>
        <div className="mt-4 space-y-3 text-sm text-pureWhite/82">
          <p className="flex items-center justify-between border-b border-pureWhite/15 pb-2">
            <span>Guest</span>
            <span className="max-w-[56%] text-right break-words">{form.guestName || 'Not set'}</span>
          </p>
          <p className="flex items-center justify-between border-b border-pureWhite/15 pb-2">
            <span>Room Type</span>
            <span className="max-w-[56%] text-right break-words">{form.roomType}</span>
          </p>
          <p className="flex items-center justify-between border-b border-pureWhite/15 pb-2">
            <span>Check In</span>
            <span className="max-w-[56%] text-right break-words">{form.checkIn || '--'}</span>
          </p>
          <p className="flex items-center justify-between border-b border-pureWhite/15 pb-2">
            <span>Check Out</span>
            <span className="max-w-[56%] text-right break-words">{form.checkOut || '--'}</span>
          </p>
          <p className="flex items-center justify-between border-b border-pureWhite/15 pb-2">
            <span>Total Nights</span>
            <span>{nights}</span>
          </p>
          <p className="flex items-center justify-between border-b border-pureWhite/15 pb-2">
            <span>Nightly Rate</span>
            <span>{currency.format(roomPrice)}</span>
          </p>
          <p className="flex items-center justify-between text-base font-semibold text-gold">
            <span>Total Amount</span>
            <span>{currency.format(totalAmount)}</span>
          </p>
        </div>
      </Motion.aside>

      <AnimatePresence>
        {isSuccessOpen ? (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-4"
          >
            <Motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              className="glass-card w-full max-w-md rounded-2xl p-6 text-center"
            >
              <button
                type="button"
                onClick={() => setIsSuccessOpen(false)}
                className="ml-auto block rounded-full border border-gold/60 bg-deepBlue/70 p-2 text-gold"
                aria-label="Close success modal"
              >
                <X size={16} />
              </button>
              <CheckCircle2 size={46} className="mx-auto text-gold" />
              <h4 className="mt-3 font-heading text-3xl text-pureWhite">Reservation Confirmed</h4>
              <p className="mt-2 text-sm text-pureWhite/80">
                Thank you. Your DreamStay request has been received. Our concierge team will contact
                you shortly.
              </p>
              <button type="button" className="btn-gold mt-5 w-full" onClick={() => setIsSuccessOpen(false)}>
                Close
              </button>
            </Motion.div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </Motion.section>
  )
}

export default BookingForm

