import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import PageHeader from '../components/PageHeader'

const contactHeaderImage =
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=80'

function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setContactForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setContactForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="pb-20">
      <PageHeader
        title="Contact DreamStay"
        subtitle="Our concierge team is available around the clock to assist with reservations, events, and personalized stay planning."
        image={contactHeaderImage}
      />

      <section className="luxury-container mt-12 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <article className="luxury-panel space-y-4 p-6">
            <p className="section-subtitle">Reach Us</p>
            <h2 className="text-4xl font-semibold text-midnight">Get in Touch</h2>
            <div className="gold-divider" />

            <p className="flex items-center gap-3 text-sm text-slate-700">
              <MapPin size={18} className="text-gold" />
              DreamStay Resort, Marina Coast, Palm Bay, Maldives
            </p>
            <p className="flex items-center gap-3 text-sm text-slate-700">
              <Phone size={18} className="text-gold" />
              +960 400 1900
            </p>
            <p className="flex items-center gap-3 text-sm text-slate-700">
              <Mail size={18} className="text-gold" />
              hello@dreamstay.com
            </p>
          </article>

          <article className="overflow-hidden rounded-3xl border border-gold/30 shadow-luxury">
            <iframe
              title="DreamStay location map"
              src="https://maps.google.com/maps?q=maldives%20resort&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="h-80 w-full"
              loading="lazy"
            />
          </article>
        </div>

        <form onSubmit={handleSubmit} className="luxury-panel space-y-5 p-6 sm:p-8">
          <p className="section-subtitle">Contact Form</p>
          <h2 className="text-4xl font-semibold text-midnight">Send Us a Message</h2>
          <div className="gold-divider" />

          <label className="block space-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Full Name
            <input
              type="text"
              name="name"
              value={contactForm.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-midnight outline-none ring-gold/30 transition focus:ring"
            />
          </label>

          <label className="block space-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Email
            <input
              type="email"
              name="email"
              value={contactForm.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-midnight outline-none ring-gold/30 transition focus:ring"
            />
          </label>

          <label className="block space-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Message
            <textarea
              rows="6"
              name="message"
              value={contactForm.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-midnight outline-none ring-gold/30 transition focus:ring"
              placeholder="Tell us how we can help you plan your stay..."
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-midnight px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-royal"
          >
            Send Message
            <Send size={14} />
          </button>

          {submitted ? (
            <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              Thank you for contacting DreamStay. Our concierge team will respond shortly.
            </p>
          ) : null}
        </form>
      </section>
    </div>
  )
}

export default ContactPage
