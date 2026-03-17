import { AnimatePresence, motion as Motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

const revealVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const hasImages = useMemo(() => images.length > 0, [images])

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = ''
      return
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveIndex(null)
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => ((current ?? 0) + 1) % images.length)
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => ((current ?? 0) - 1 + images.length) % images.length)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, images.length])

  if (!hasImages) {
    return null
  }

  const goPrev = () => {
    setActiveIndex((current) => ((current ?? 0) - 1 + images.length) % images.length)
  }

  const goNext = () => {
    setActiveIndex((current) => ((current ?? 0) + 1) % images.length)
  }

  const activeImage = activeIndex === null ? null : images[activeIndex]

  return (
    <Motion.section
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <Motion.button
            key={image.src}
            type="button"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => setActiveIndex(index)}
            className="group relative block w-full overflow-hidden rounded-2xl border border-pureWhite/20 bg-pureWhite/10 text-left shadow-glass"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-deepBlue/82 via-deepBlue/25 to-transparent opacity-0 transition group-hover:opacity-100" />
            <span className="absolute right-4 top-4 rounded-full border border-gold/60 bg-deepBlue/70 p-2 text-gold opacity-0 transition group-hover:opacity-100">
              <Expand size={16} />
            </span>
            <span className="absolute bottom-4 left-4 right-4 text-sm text-pureWhite/90 opacity-0 transition group-hover:opacity-100">
              {image.alt}
            </span>
          </Motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage ? (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          >
            <button
              type="button"
              className="absolute right-5 top-5 rounded-full border border-gold/70 bg-deepBlue/70 p-2 text-gold"
              onClick={() => setActiveIndex(null)}
              aria-label="Close gallery modal"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              className="absolute left-3 rounded-full border border-gold/70 bg-deepBlue/70 p-2 text-gold sm:left-5"
              onClick={goPrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <Motion.figure
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="mx-auto max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-gold/50"
            >
              <img src={activeImage.src} alt={activeImage.alt} className="max-h-[80vh] w-full object-cover" />
              <figcaption className="bg-deepBlue/95 px-5 py-3 text-sm text-pureWhite/90">
                {activeImage.alt}
              </figcaption>
            </Motion.figure>

            <button
              type="button"
              className="absolute right-3 rounded-full border border-gold/70 bg-deepBlue/70 p-2 text-gold sm:right-5"
              onClick={goNext}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </Motion.section>
  )
}

export default GalleryGrid

