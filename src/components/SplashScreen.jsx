import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Crown } from 'lucide-react'
import { useEffect, useState } from 'react'

function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState('logo')

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('text'), 600)
    const timer2 = setTimeout(() => setPhase('exit'), 2200)
    const timer3 = setTimeout(() => onComplete(), 2800)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'exit' ? null : null}
      <Motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'exit' ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
        style={{
          background: 'radial-gradient(ellipse at center, #0f2545 0%, #07162b 60%, #030b18 100%)',
        }}
      >
        <Motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative"
        >
          <div className="rounded-full border-2 border-gold/60 bg-gold/10 p-5 shadow-glow-lg">
            <Crown size={40} className="text-gold" />
          </div>
          <Motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.5, 1.2], opacity: [0, 0.4, 0] }}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full border border-gold/40"
          />
        </Motion.div>

        <Motion.h1
          initial={{ opacity: 0, y: 20, letterSpacing: '0.1em' }}
          animate={{
            opacity: phase === 'logo' ? 0 : 1,
            y: phase === 'logo' ? 20 : 0,
            letterSpacing: '0.25em',
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-6 font-heading text-3xl text-pureWhite sm:text-4xl"
        >
          DreamStay
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'logo' ? 0 : 0.6 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-2 text-xs uppercase tracking-[0.35em] text-gold"
        >
          Luxury Redefined
        </Motion.p>

        <Motion.div
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ duration: 1.6, delay: 0.6, ease: 'easeInOut' }}
          className="mt-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        />
      </Motion.div>
    </AnimatePresence>
  )
}

export default SplashScreen
