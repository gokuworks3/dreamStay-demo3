import { AnimatePresence, motion as Motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <Motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollUp}
          type="button"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 rounded-full border border-gold/60 bg-deepBlue/90 p-3 text-gold shadow-glow backdrop-blur-md transition-colors hover:bg-gold hover:text-deepBlue"
        >
          <ChevronUp size={22} />
        </Motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
