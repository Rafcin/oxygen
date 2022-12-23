import { Box, ListItemButton } from '@mui/material'
import React from 'react'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import { AspectRatio } from '../../aspect-ratio'
import { CardContainer } from '../../card/card'
import { CardContent } from '../../card/content'
import { CardCover } from '../../card/cover'

export const GeneralCard: React.FC<any> = React.memo(
  ({
    style,
    container,
    background,
    children,
    ar,
    direction,
    ...props
  }: {
    style?: object
    container: React.ReactNode
    background: React.ReactNode
    children: React.ReactNode
    ar: string
    direction: 'vertical' | 'horizontal'
  }) => {
    const carouselOrientation: number = direction === 'vertical' ? 12 : 5
    const bodyOrientation: number = direction === 'vertical' ? 12 : 7
    return (
      <span>
        <ListItemButton
          {...props}
          disableRipple={true}
          sx={{ display: 'block', padding: 0 }}
        >
          <span>
            {/** Content */}
            <Grid container spacing={2} columns={12}>
              <Grid
                xs={12}
                sm={carouselOrientation}
                md={carouselOrientation}
                lg={carouselOrientation}
              >
                <Box
                  component="div"
                  sx={{
                    ...style,
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
                      border: '1px solid rgba(0, 0, 0, 0.1)',
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
                        <Box sx={{ width: '100%', height: '100%' }}>
                          {background}
                        </Box>
                      </CardCover>
                      <CardContent>{container}</CardContent>
                    </CardContainer>
                  </AspectRatio>
                </Box>
              </Grid>
              {children && (
                <Grid
                  xs={12}
                  sm={bodyOrientation}
                  md={bodyOrientation}
                  lg={bodyOrientation}
                  sx={{ cursor: 'pointer' }}
                >
                  {children}
                </Grid>
              )}
            </Grid>
          </span>
        </ListItemButton>
      </span>
    )
  }
)
