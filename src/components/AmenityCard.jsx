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
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="glass-card rounded-2xl p-6"
    >
      <span className="inline-flex rounded-full border border-gold/70 bg-gold/20 p-3 text-gold">
        <Icon size={22} />
      </span>
      <h3 className="mt-4 font-heading text-2xl text-pureWhite">{amenity.title}</h3>
      <p className="mt-3 text-sm text-pureWhite/75">{amenity.description}</p>
    </Motion.article>
  )
}

export default AmenityCard

