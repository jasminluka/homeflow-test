import { useState } from 'react'

const Image = ({ src, fallbackImage, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const onError = () => {
    console.log(`Missing image, ${src}`)

    if (!hasError) {
      setImgSrc(fallbackImage)
      setHasError(true)
    }
  }

  return <img src={imgSrc} alt={alt} onError={onError} {...props} />
}

export default Image
