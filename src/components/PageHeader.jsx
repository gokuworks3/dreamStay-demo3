function PageHeader({ title, subtitle, image }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/85 via-midnight/65 to-navy/70" />
      </div>

      <div className="luxury-container relative z-10 py-24 sm:py-28 lg:py-32">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold/95">
          DreamStay Collection
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-200 sm:text-base">{subtitle}</p>
      </div>
    </section>
  )
}

export default PageHeader
