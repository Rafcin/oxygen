/* eslint-disable react/display-name */
import { Box, ListItemButton } from '@mui/material'
import React from 'react'
import { AspectRatio } from '../../aspect-ratio'
import { CardContainer } from '../../card/card'
import { CardContent } from '../../card/content'
import { CardCover } from '../../card/cover'

export const GenericCard: React.FC<any> = React.memo(
  ({
    src,
    ar,
    children,
    name,
    alt,
    style,
    loader,
    image,
    ...props
  }: {
    children: React.ReactNode
    src: string
    ar: string
    name: string
    alt: string
    style: Object
    loader: any
    image: React.ReactNode
  }) => {
    return (
      <span>
        <ListItemButton
          {...props}
          disableRipple={true}
          sx={{ display: 'block', padding: 0, margin: 0 }}
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
              ...style,
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
        </ListItemButton>
      </span>
    )
  }
)
