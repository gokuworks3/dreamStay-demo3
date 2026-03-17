import { motion as Motion } from 'framer-motion'

const revealVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function AmenityCard({ amenity }) {
  const Icon = amenity.icon

  return (
    <Motion.article
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      viewport={{ once: true, amount: 0.2 }}
      className="glass-card group relative overflow-hidden rounded-2xl p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <Motion.span
        whileHover={{ rotate: 10, scale: 1.1 }}
        className="relative inline-flex rounded-full border border-gold/60 bg-gold/15 p-3 text-gold transition-shadow duration-300 group-hover:shadow-glow"
      >
        <Icon size={22} />
      </Motion.span>
      <h3 className="mt-4 font-heading text-2xl text-pureWhite">{amenity.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-pureWhite/70">{amenity.description}</p>

      <div className="mt-4 h-px w-0 bg-gradient-to-r from-gold/50 to-transparent transition-all duration-500 group-hover:w-full" />
    </Motion.article>
  )
}

export default AmenityCard

