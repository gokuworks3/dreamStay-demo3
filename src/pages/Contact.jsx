import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: 'easeOut' } },
}

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [toastOpen, setToastOpen] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Name is required.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!form.subject.trim()) {
      nextErrors.subject = 'Subject is required.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Message is required.'
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
    setToastOpen(true)
    setForm(initialForm)
    window.setTimeout(() => setToastOpen(false), 2800)
  }

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
        <p className="section-kicker">Contact DreamStay</p>
        <h1 className="section-title mt-3">We Are Here to Assist You</h1>
      </Motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5"
        >
          <article className="glass-card rounded-2xl p-6 text-sm text-pureWhite/82">
            <p className="mb-4 flex items-center gap-2 text-gold">
              <Phone size={16} />
              +960 400 1900
            </p>
            <p className="mb-4 flex items-center gap-2 text-gold">
              <Mail size={16} />
              hello@dreamstay.com
            </p>
            <p className="flex items-center gap-2 text-gold">
              <MapPin size={16} />
              Marina Coast, Palm Bay, Maldives
            </p>
          </article>

          <article className="overflow-hidden rounded-2xl border border-gold/35">
            <iframe
              title="DreamStay Resort Location"
              src="https://maps.google.com/maps?q=maldives%20resort&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="h-80 w-full"
              loading="lazy"
            />
          </article>
        </Motion.div>

        <Motion.form
          onSubmit={handleSubmit}
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card space-y-4 rounded-2xl p-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="input-luxury"
          />
          {errors.name ? <p className="-mt-2 text-xs text-red-300">{errors.name}</p> : null}

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="input-luxury"
          />
          {errors.email ? <p className="-mt-2 text-xs text-red-300">{errors.email}</p> : null}

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="input-luxury"
          />
          {errors.subject ? <p className="-mt-2 text-xs text-red-300">{errors.subject}</p> : null}

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="6"
            placeholder="Message"
            className="input-luxury"
          />
          {errors.message ? <p className="-mt-2 text-xs text-red-300">{errors.message}</p> : null}

          <button type="submit" className="btn-gold w-full">
            Send Message
          </button>
        </Motion.form>
      </div>

      <AnimatePresence>
        {toastOpen ? (
          <Motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            className="fixed left-4 right-4 top-24 z-[140] rounded-xl border border-gold/60 bg-deepBlue/95 px-4 py-3 text-center text-sm text-gold shadow-glow sm:left-auto sm:right-4 sm:w-auto sm:text-left"
          >
            Message sent successfully.
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

export default Contact

