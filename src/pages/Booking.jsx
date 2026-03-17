import { motion as Motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import BookingForm from '../components/BookingForm'

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: 'easeOut' } },
}

function Booking() {
  const location = useLocation()
  const queryRoom = new URLSearchParams(location.search).get('room')

  return (
    <section className="section-wrap">
      <Motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        animate="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-8"
      >
        <p className="section-kicker">Reserve Your Escape</p>
        <h1 className="section-title mt-3">Book Your DreamStay Experience</h1>
        <p className="mt-3 max-w-2xl text-sm text-pureWhite/75 sm:text-base">
          Complete your reservation details below. Your booking summary updates instantly as you fill
          out the form.
        </p>
      </Motion.div>

      <BookingForm initialRoomType={queryRoom || 'Deluxe'} />
    </section>
  )
}

export default Booking

