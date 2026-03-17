import { motion as Motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const revealVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function TestimonialCard({ testimonial }) {
  return (
    <Motion.article
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      viewport={{ once: true, amount: 0.2 }}
      className="glass-card group relative overflow-hidden rounded-2xl p-6"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <Quote size={48} className="absolute -right-1 -top-1 rotate-180 text-gold/[0.06] transition-colors duration-300 group-hover:text-gold/[0.12]" />
      <Quote size={24} className="absolute left-4 top-4 text-gold/30" />

      <div className="relative mt-6 flex items-center gap-4">
        <Motion.img
          whileHover={{ scale: 1.08 }}
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full border-2 border-gold/50 object-cover shadow-glow"
        />
        <div>
          <h4 className="font-heading text-xl text-pureWhite sm:text-2xl">{testimonial.name}</h4>
          <div className="mt-1 flex items-center gap-0.5 text-gold">
            {Array.from({ length: testimonial.rating }).map((_, index) => (
              <Star key={index} size={14} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>

      <p className="relative mt-5 text-sm leading-relaxed text-pureWhite/75 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-5 h-px w-0 bg-gradient-to-r from-gold/50 via-gold/30 to-transparent transition-all duration-500 group-hover:w-full" />
    </Motion.article>
  )
}

export default TestimonialCard

