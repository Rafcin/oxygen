import React from 'react'

import { ImageContextProvider } from './context'
import {
  ImageBackgroundFallback,
  ImageElement,
  ImageInnerWrapper,
  ImageOuterWrapper,
} from './styles'

const Image: React.FC<any> = React.memo(
  ({
    ar,
    src,
    dynamic,
  }: {
    children: any
    ar: number
    src: string
    dynamic: boolean
  }) => {
    return (
      <ImageContextProvider>
        <ImageOuterWrapper ar={ar} dynamic={dynamic}>
          <ImageInnerWrapper dynamic={dynamic}>
            <picture>
              <ImageElement src={src} />
            </picture>
            <ImageBackgroundFallback src={src} />
          </ImageInnerWrapper>
        </ImageOuterWrapper>
      </ImageContextProvider>
    )
  }
)

export { Image }
