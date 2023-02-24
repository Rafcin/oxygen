/* eslint-disable react/display-name */
import { Box, ListItemButton } from '@mui/material'
import { default as Grid } from '@mui/material/Unstable_Grid2'

import React from 'react'
import { AspectRatio } from '../../aspect-ratio'
import { CardContainer } from '../../card/card'
import { CardContent } from '../../card/content'
import { CardCover } from '../../card/cover'

export const BannerCard: React.FC<any> = React.memo(
  ({
    src,
    ar,
    direction,
    children,
    loader,
    image,
    ...props
  }: {
    children: React.ReactNode
    src: string
    ar: string
    direction: 'vertical' | 'horizontal'
    loader: any
    image: React.ReactNode
  }) => {
    const carouselOrientation: number = direction === 'vertical' ? 12 : 5
    const bodyOrientation: number = direction === 'vertical' ? 12 : 7
    return (
      <span>
        <ListItemButton {...props} disableRipple={true} sx={{ display: 'block' }}>
          <span>
            {/** Content */}
            <Grid container spacing={0} columns={12} sx={{ padding: 0 }}>
              <Grid
                xs={12}
                sm={carouselOrientation}
                md={carouselOrientation}
                lg={carouselOrientation}
              >
                <Box
                  component="div"
                  sx={{
                    borderRadius: '12px',
                    position: 'relative',
                    contain: 'none',
                    overflow: 'hidden',
                    WebkitMaskImage: '-webkit-radial-gradient(center,white,black)',
                    '&::after': {
                      content: '" "',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 'inherit',
                      pointerEvents: 'none',
                    },
                  }}
                >
                  <AspectRatio ratio={ar}>
                    <CardContainer
                      sx={{
                        cursor: 'pointer',
                        borderRadius: '0px',
                      }}
                    >
                      <CardCover>
                        <Box sx={{ width: '100%', height: '100%' }}>{image}</Box>
                      </CardCover>
                      <CardContent>{children}</CardContent>
                    </CardContainer>
                  </AspectRatio>
                </Box>
              </Grid>
              <Grid
                xs={12}
                sm={bodyOrientation}
                md={bodyOrientation}
                lg={bodyOrientation}
                sx={{ cursor: 'pointer' }}
              ></Grid>
            </Grid>
          </span>
        </ListItemButton>
      </span>
    )
  }
)
