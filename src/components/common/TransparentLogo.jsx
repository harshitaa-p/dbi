import { useEffect, useState } from 'react'

export default function TransparentLogo({
  src = '/logo/logo.png',
  alt = 'DBI Logo',
  className = '',
  threshold = 245,
}) {
  const [processedSrc, setProcessedSrc] = useState('')

  useEffect(() => {
    let cancelled = false
    const image = new Image()

    image.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = image.naturalWidth || image.width
      canvas.height = image.naturalHeight || image.height

      const context = canvas.getContext('2d', { willReadFrequently: true })
      if (!context) {
        if (!cancelled) setProcessedSrc(src)
        return
      }

      context.drawImage(image, 0, 0)

      const frame = context.getImageData(0, 0, canvas.width, canvas.height)
      const { data } = frame

      for (let index = 0; index < data.length; index += 4) {
        const red = data[index]
        const green = data[index + 1]
        const blue = data[index + 2]

        if (red >= threshold && green >= threshold && blue >= threshold) {
          data[index + 3] = 0
        }
      }

      context.putImageData(frame, 0, 0)

      if (!cancelled) {
        setProcessedSrc(canvas.toDataURL('image/png'))
      }
    }

    image.onerror = () => {
      if (!cancelled) setProcessedSrc(src)
    }

    image.src = src

    return () => {
      cancelled = true
    }
  }, [src, threshold])

  return <img src={processedSrc || src} alt={alt} className={className} />
}
