import { motion as Motion } from 'framer-motion'
import { Star } from 'lucide-react'

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
      viewport={{ once: true, amount: 0.2 }}
      className="glass-card rounded-2xl p-6"
    >
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-14 w-14 rounded-full border border-gold/55 object-cover"
        />
        <div>
          <h4 className="font-heading text-2xl text-pureWhite">{testimonial.name}</h4>
          <div className="mt-1 flex items-center gap-1 text-gold">
            {Array.from({ length: testimonial.rating }).map((_, index) => (
              <Star key={index} size={14} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-pureWhite/80">{testimonial.quote}</p>
    </Motion.article>
  )
}

export default TestimonialCard

