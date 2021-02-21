import React from 'react'

import { useMedia } from '../../hooks'

interface Props {
  src: string
  alt?: string
}

const proxifyImageURL = (url: string, width: number) =>
  `${window.runConfig.apiBaseURL}/img?url=${encodeURIComponent(url)}&width=${width}`

export default ({ src, alt = '' }: Props) => {
  const mobileDisplay = useMedia('(max-width: 767px)')
  return (
    <img
      src={src}
      srcSet={`${proxifyImageURL(src, 320)} 320w,
              ${proxifyImageURL(src, 767)} 767w`}
      sizes={mobileDisplay ? '100vw' : '320px'}
      alt={alt}
      onError={(e) => (e.currentTarget.style.display = 'none')}
    />
  )
}
