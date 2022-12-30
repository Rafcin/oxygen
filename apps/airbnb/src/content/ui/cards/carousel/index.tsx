/* eslint-disable react/display-name */
import {
  AspectRatio,
  CardContainer,
  CardContent,
  CardCover,
  SkeletonWrapper,
} from '@oxygen/design-system'
import Box from '@mui/material/Box'
import Image from 'next/image'
import React from 'react'
import { useInView } from 'react-cool-inview'
import { Controller, Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Next, Previous } from './arrows'

export const CarouselCard: React.FC<any> = React.memo(
  ({
    srcs,
    ar,
    loading,
    children,
  }: {
    srcs: Array<string>
    ar: string
    loading: boolean
    children: any
  }) => {
    const [mouseOver, setMouseOver] = React.useState<boolean>(false)
    const { observe: observeInView, inView } = useInView({
      threshold: 0, // Default is 0
      unobserveOnEnter: true,
    })
    const [controlledSwiper, setControlledSwiper] = React.useState(null)
    return (
      <Box
        ref={observeInView}
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
            border: '1px solid rgba(0, 0, 0, 0.1)',
            pointerEvents: 'none',
          },
        }}
      >
        <AspectRatio ratio={ar} objectFit="cover">
          <CardContainer
            sx={{
              height: '100%',
              cursor: 'pointer',
              borderRadius: '0px',
            }}
            onMouseOver={() => {
              setMouseOver(true)
            }}
            onMouseLeave={() => {
              setMouseOver(false)
            }}
          >
            <CardCover>
              <Swiper
                cssMode={true}
                modules={[Controller, Virtual]}
                onSwiper={setControlledSwiper}
              >
                {srcs &&
                  srcs.map((src: string, index: number) => (
                    <SwiperSlide key={`card-slide-${index}`} virtualIndex={index}>
                      <Box sx={{ width: '100%', height: '100%' }}>
                        <SkeletonWrapper
                          isLoaded={!loading && inView && srcs && srcs.length > 0}
                          sx={{ height: '100%' }}
                        >
                          <Box
                            sx={{
                              width: '100%',
                              height: '100%',
                            }}
                          >
                            <Image
                              key={`carousel-image-${index}`}
                              quality={45}
                              fill
                              src={src}
                              alt="Carousel card"
                              style={{ objectFit: 'cover' }}
                            />
                          </Box>
                        </SkeletonWrapper>
                      </Box>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </CardCover>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'column',
                  flex: 1,
                  top: 0,
                  bottom: 0,
                  overflow: 'hidden',
                  pointerEvents: 'none',
                  position: 'absolute',
                  right: 0,
                  left: 0,
                  padding: '8px',
                }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(1,minmax(0,1fr))',
                    flex: '1 0',
                  }}
                >
                  {children}
                </Box>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
                    flex: '1 0',
                    alignItems: 'center',
                  }}
                >
                  {mouseOver && (
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <Box sx={{ pointerEvents: 'auto' }}>
                        <Previous
                          disabled={controlledSwiper && controlledSwiper.isBeginning}
                          onClick={(e: any) =>
                            e.stopPropagation() ||
                            (controlledSwiper && controlledSwiper.slidePrev())
                          }
                        />
                      </Box>
                    </Box>
                  )}
                  {mouseOver && (
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Box sx={{ pointerEvents: 'auto' }}>
                        <Next
                          disabled={controlledSwiper && controlledSwiper.isEnd}
                          onClick={(e: any) =>
                            e.stopPropagation() ||
                            (controlledSwiper && controlledSwiper.slideNext())
                          }
                        />
                      </Box>
                    </Box>
                  )}
                </Box>
                <Box
                  sx={{
                    alignItems: 'flex-end',
                    display: 'grid',
                    flex: '1 0',
                  }}
                >
                  {/* <Dots size={srcs && srcs.length} current={swiper.realIndex} /> */}
                </Box>
              </Box>
            </CardContent>
          </CardContainer>
        </AspectRatio>
      </Box>
    )
  }
)
