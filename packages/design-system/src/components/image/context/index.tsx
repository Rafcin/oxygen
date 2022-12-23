/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'

export type ImageType = {
  //Width
  imageWidth: number
  setImageWidth: Function
  //Density
  maxDensity: number
  setMaxDensity: Function
  //Aspect Ratio
  aspectRatio: number
  setAspectRatio: Function
}

export const ImageContext = React.createContext<ImageType | null>(null)

export const ImageContextProvider = ({ children }) => {
  const [imageWidth, setImageWidth] = React.useState(null) as any
  const [maxDensity, setMaxDensity] = React.useState(null) as any
  const [aspectRatio, setAspectRatio] = React.useState(null) as any

  const values = React.useMemo(
    () =>
      ({
        imageWidth,
        setImageWidth,
        maxDensity,
        setMaxDensity,
        aspectRatio,
        setAspectRatio,
      } as ImageType),
    [
      imageWidth,
      maxDensity,
      setImageWidth,
      setMaxDensity,
      aspectRatio,
      setAspectRatio,
    ]
  )

  return <ImageContext.Provider value={values}>{children}</ImageContext.Provider>
}

export const useImageContext = () => {
  const context = React.useContext(ImageContext)

  if (context === undefined) {
    throw new Error(
      '`useImageContext` hook must be used within a `ImageContextProvider` component'
    )
  }
  return context
}
