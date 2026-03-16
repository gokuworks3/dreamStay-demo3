import { useState } from 'react'

function SmartImage({ src, fallbackSrc = '/fallback-dreamstay.svg', alt = '', ...rest }) {
  const [hasError, setHasError] = useState(false)
  const useFallback = hasError || !src

  const handleError = () => {
    if (!useFallback) {
      setHasError(true)
    }
  }

  return <img src={useFallback ? fallbackSrc : src} alt={alt} onError={handleError} {...rest} />
}

export default SmartImage
