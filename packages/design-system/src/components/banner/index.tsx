import React from 'react'

import {
  BannerCardBackgroundContainer,
  BannerCardBackgroundImage,
  BannerCardContainer,
  BannerCardPosition,
  BannerCardSize,
} from './styles'

const Banner: React.FC<any> = ({
  children,
  src,
  href,
  bg,
  size,
  filter,
  layout,
  css,
  ...props
}) => {
  return (
    <BannerCardContainer href={href} css={css} {...props}>
      <BannerCardSize bg={bg} size={size}>
        <BannerCardPosition>
          <BannerCardBackgroundContainer>
            {src && (
              <BannerCardBackgroundImage src={src} layout={layout} filter={filter} />
            )}
          </BannerCardBackgroundContainer>
        </BannerCardPosition>
        {children}
      </BannerCardSize>
    </BannerCardContainer>
  )
}

export { Banner }
