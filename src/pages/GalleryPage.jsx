import ImageSlider from '../components/ImageSlider'
import PageHeader from '../components/PageHeader'
import SmartImage from '../components/SmartImage'
import { galleryPhotos } from '../data/hotelData'

const galleryHeaderImage =
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=80'

function GalleryPage() {
  const featuredSlides = galleryPhotos.slice(0, 5).map((photo) => ({
    url: photo.url,
    title: photo.caption,
    subtitle: 'DreamStay Gallery',
  }))

  return (
    <div className="pb-20">
      <PageHeader
        title="Luxury Gallery"
        subtitle="A visual journey through DreamStay interiors, oceanfront moments, and signature hospitality experiences."
        image={galleryHeaderImage}
      />

      <section className="luxury-container mt-12 space-y-10">
        <div className="overflow-hidden rounded-3xl border border-gold/30 shadow-luxury">
          <ImageSlider
            images={featuredSlides}
            heightClass="h-[360px] sm:h-[460px]"
            overlayClass="bg-gradient-to-t from-midnight/75 via-midnight/20 to-transparent"
          />
        </div>

        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {galleryPhotos.map((photo) => (
            <figure
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/70 shadow-lg break-inside-avoid"
            >
              <SmartImage
                src={photo.url}
                alt={photo.caption}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/85 via-midnight/50 to-transparent p-4 text-sm text-white">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
