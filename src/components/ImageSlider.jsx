import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

function normalizeSlide(item) {
  if (typeof item === 'string') {
    return { url: item, title: '', subtitle: '' }
  }

  return {
    url: item.url,
    title: item.title ?? '',
    subtitle: item.subtitle ?? '',
  }
}

function ImageSlider({
  images,
  className = '',
  heightClass = 'h-[520px]',
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  overlayClass = 'bg-gradient-to-t from-midnight/70 via-midnight/25 to-transparent',
  children,
}) {
  const slides = useMemo(() => images.map((item) => normalizeSlide(item)), [images])
  const [activeIndex, setActiveIndex] = useState(0)

  const currentIndex = slides.length ? activeIndex % slides.length : 0

  useEffect(() => {
    if (!autoPlay || slides.length < 2) {
      return undefined
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, interval)

    return () => window.clearInterval(timerId)
  }, [autoPlay, interval, slides.length])

  if (!slides.length) {
    return null
  }

  const goPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
  }

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length)
  }

  return (
    <section className={`relative overflow-hidden rounded-none ${heightClass} ${className}`}>
      {slides.map((slide, index) => (
        <img
          key={`${slide.url}-${index}`}
          src={slide.url}
          alt={slide.title || `DreamStay slide ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
            index === currentIndex ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
          }`}
        />
      ))}

      <div className={`absolute inset-0 ${overlayClass}`} />
      {children ? <div className="absolute inset-0 z-20">{children}</div> : null}

      {showArrows && slides.length > 1 ? (
        <>
          <button
            type="button"
            onClick={goPrevious}
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/35 bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/35 bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </>
      ) : null}

      {showDots && slides.length > 1 ? (
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={`${slide.url}-dot-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-10 bg-gold' : 'w-5 bg-white/55'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      ) : null}
    </section>
  )
}

export default ImageSlider
