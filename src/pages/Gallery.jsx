import { motion as Motion } from 'framer-motion'
import GalleryGrid from '../components/GalleryGrid'

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: 'easeOut' } },
}

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    alt: 'Grand resort entrance glowing under evening lights',
  },
  {
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
    alt: 'Luxury suite interior with elegant finishes',
  },
  {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
    alt: 'Modern penthouse lounge space at DreamStay',
  },
  {
    src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80',
    alt: 'Designer bedroom with warm textures and natural light',
  },
  {
    src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=80',
    alt: 'Oceanfront balcony suite overlooking blue waters',
  },
  {
    src: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1600&q=80',
    alt: 'Fine dining table setup with premium service',
  },
  {
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80',
    alt: 'Infinity pool reflection at sunset',
  },
  {
    src: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?auto=format&fit=crop&w=1600&q=80',
    alt: 'Luxury spa room with serene minimal design',
  },
  {
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    alt: 'Refined guest room details with premium furnishings',
  },
  {
    src: 'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?auto=format&fit=crop&w=1600&q=80',
    alt: 'Elegant lounge seating in contemporary style',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    alt: 'Luxury suite master bedroom with statement decor',
  },
  {
    src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80',
    alt: 'Resort exterior architecture with tropical landscaping',
  },
]

function Gallery() {
  return (
    <section className="section-wrap">
      <Motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        animate="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-8"
      >
        <p className="section-kicker">DreamStay Gallery</p>
        <h1 className="section-title mt-3">A Visual Tour of Luxury</h1>
      </Motion.div>

      <GalleryGrid images={galleryImages} />
    </section>
  )
}

export default Gallery

