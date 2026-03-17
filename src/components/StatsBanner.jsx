import { animate, motion as Motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const revealVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function AnimatedStat({ stat }) {
  const counterRef = useRef(null)
  const inView = useInView(counterRef, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) {
      return
    }

    const controls = animate(0, stat.value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplay(latest)
      },
    })

    return () => controls.stop()
  }, [inView, stat.value])

  const decimals = stat.decimals ?? 0
  const formattedValue =
    decimals > 0 ? display.toFixed(decimals) : Math.floor(display).toLocaleString('en-US')

  return (
    <div ref={counterRef} className="text-center">
      <p className="font-heading text-4xl text-gold sm:text-5xl">
        {stat.prefix || ''}
        {formattedValue}
        {stat.suffix || ''}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.15em] text-pureWhite/70">{stat.label}</p>
    </div>
  )
}

function StatsBanner({ stats }) {
  return (
    <Motion.section
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="glass-card rounded-2xl p-6 sm:p-8"
    >
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <AnimatedStat key={stat.label} stat={stat} />
        ))}
      </div>
    </Motion.section>
  )
}

export default StatsBanner

