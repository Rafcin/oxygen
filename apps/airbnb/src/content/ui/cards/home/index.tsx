import { Box, Button, Divider, ListItemButton } from '@mui/material'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import { SkeletonWrapper, useNavigationStore } from '@oxygen/design-system'
import Link from 'next/link'
import React from 'react'
import { FaShare } from 'react-icons/fa'
import { CarouselCard } from '../carousel'

export const HomeCard: React.FC<any> = ({
  children,
  locality,
  address,
  name,
  srcs,
  href,
  ar,
  direction,
  divider,
  waitBeforeShow = 500,
  isMetadataEnabled,
  columnSpacing,
  rowSpacing,
  ...props
}: {
  children: any
  locality: string
  address: string
  name: string
  srcs: Array<any>
  href: string
  ar: string
  direction: 'vertical' | 'horizontal'
  divider: boolean
  waitBeforeShow: number
  isMetadataEnabled: boolean
  columnSpacing: number | object
  rowSpacing: number | object
}) => {
  const { isShared, changeIsShared, changeUrlToShare } = useNavigationStore()
  const [isLoading, setIsLoading] = React.useState(true)
  const carouselOrientation: number = direction === 'vertical' ? 12 : 5
  const bodyOrientation: number = direction === 'vertical' ? 12 : 7
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, waitBeforeShow)
  }, [waitBeforeShow])
  return (
    <span>
      <ListItemButton
        {...props}
        disableRipple={true}
        sx={{ display: 'block', padding: 0 }}
      >
        <span>
          {/** Content */}
          <Grid
            container
            columnSpacing={columnSpacing ?? 0}
            rowSpacing={rowSpacing ?? { xs: 1, sm: 1, md: 1, lg: 1 }}
            columns={12}
            sx={{ width: '100%' }}
          >
            <Grid
              xs={12}
              sm={carouselOrientation}
              md={carouselOrientation}
              lg={carouselOrientation}
              sx={{ width: '100%' }}
            >
              <Box sx={{ width: '100%', height: '100%' }}>
                <CarouselCard loading={isLoading} srcs={srcs} ar={ar}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-start',
                      pointerEvents: 'auto',
                    }}
                  >
                    <Button
                      onClick={() => {
                        changeIsShared(!isShared)
                        typeof window !== 'undefined' &&
                          changeUrlToShare(`${window.location.origin}${href}`)
                      }}
                      sx={{
                        padding: '0px',
                        margin: '0px',
                        color: '#fff',
                        width: '30px',
                        height: '30px',
                        minWidth: '30px',
                      }}
                    >
                      <FaShare style={{ width: '20px', height: '20px' }} />
                    </Button>
                  </Box>
                </CarouselCard>
              </Box>
            </Grid>
            <Link href={href}>
              <Grid
                xs={12}
                sm={bodyOrientation}
                md={bodyOrientation}
                lg={bodyOrientation}
                sx={{ cursor: 'pointer' }}
              >
                <Box>
                  <span>
                    {name && (
                      <SkeletonWrapper isLoaded={!isLoading}>
                        <Box
                          sx={{
                            marginTop: '0px',
                            marginBottom: '5px',
                            fontSize: '20px',
                            lineHeight: '20px',
                            fontWeight: 600,
                            overflowWrap: 'break-word',
                          }}
                        >
                          {name}
                        </Box>
                      </SkeletonWrapper>
                    )}
                    {locality && (
                      <SkeletonWrapper
                        isLoaded={!isLoading}
                        sx={{ marginBottom: '5px' }}
                      >
                        <Box
                          sx={{
                            marginTop: '0px',
                            textOverflow: 'none',
                            whiteSpace: 'wrap',
                            fontSize: '12px',
                            lineHeight: '18px',
                            overflowWrap: 'break-word',
                          }}
                        >
                          {locality}
                        </Box>
                      </SkeletonWrapper>
                    )}
                    {isMetadataEnabled && (
                      <span>
                        {divider && (
                          <Divider
                            sx={{
                              width: '30px',
                              marginTop: '5px',
                              marginBottom: '5px',
                            }}
                          />
                        )}
                        {address && (
                          <SkeletonWrapper
                            isLoaded={!isLoading}
                            sx={{ marginBottom: '5px' }}
                          >
                            <Box
                              sx={{
                                marginTop: '0px',
                                textOverflow: 'none',
                                whiteSpace: 'wrap',
                                fontSize: '12px',
                                lineHeight: '18px',
                                overflowWrap: 'break-word',
                              }}
                            >
                              {address}
                            </Box>
                          </SkeletonWrapper>
                        )}
                      </span>
                    )}
                  </span>
                  {children}
                </Box>
              </Grid>
            </Link>
          </Grid>
        </span>
      </ListItemButton>
    </span>
  )
}
