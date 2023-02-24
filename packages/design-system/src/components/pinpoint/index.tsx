import { unstable_composeClasses as composeClasses } from '@mui/material'
import { Box, Chip, Tooltip, useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'
import { useGeolocated } from '../../hooks/geolocation'
import { AspectRatio } from '../aspect-ratio'
import { CardContainer } from '../card/card'
import { CardContent } from '../card/content'
import { CardCover } from '../card/cover'
import { Map } from '../map'
import { PinPointRoot } from './styles'
import { getPinPointUtilityClass, PinPointLocation, PinPointTypeMap } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getPinPointUtilityClass, {})
}

const PinPointInput = React.forwardRef(function PinPoint(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiPinPoint',
  })

  //Default Map Location
  const dfl = {
    lat: 33.4572321,
    lng: -117.599761,
  }

  const {
    className,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    component = 'div',
    value,
    onChange,
    defaultValue,
    ...other
  } = props

  const ownerState = {
    ...props,
    component,
  }

  const classes = useUtilityClasses()

  const { coords, isGeolocationAvailable } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })
  const [mapLocation, setMapLocation] = React.useState<
    PinPointLocation | null | undefined
  >(defaultValue ?? dfl)

  return (
    <PinPointRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      <AspectRatio ratio="1">
        <CardContainer sx={{ borderRadius: 0 }}>
          <CardCover>
            <Map
              opts={{
                center: value ?? dfl,
                zoom: 11,
                gestureHandling: 'greedy',
                zoomControl: false,
                mapId: 'aeba400134fbaf90',
                streetViewControl: false,
                fullscreenControl: false,
                mapTypeControl: false,
              }}
              style={{
                height: '100%',
                width: '100%',
              }}
              useDrawing
              useGeometry
              usePlaces
              useVisualization
              onChange={(event) => {
                console.log('Map', event)
                setMapLocation({
                  lat: Number(event.center.lat),
                  lng: Number(event.center.lng),
                })
                onChange &&
                  onChange(
                    {
                      lat: Number(event.center.lat),
                      lng: Number(event.center.lng),
                    },
                    {
                      ...event.bounds,
                    }
                  )
              }}
            />
          </CardCover>
          <CardContent>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                margin: '10px',
              }}
            >
              {isGeolocationAvailable && coords && (
                <Box sx={{ pointerEvents: 'auto' }}>
                  <Tooltip title="Automatically adjust the pin to your current location.">
                    <Chip
                      onClick={() => {
                        setMapLocation({
                          lat: coords?.latitude ?? 0,
                          lng: coords?.longitude ?? 0,
                        })
                      }}
                      label={
                        <Box
                          component="svg"
                          viewBox="0 0 24 24"
                          height="48"
                          width="48"
                          focusable="false"
                          role="img"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          sx={{
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            overflow: 'hidden',
                            width: '18px',
                            height: '20px',
                          }}
                        >
                          <title>MyLocation icon</title>
                          <path fill="none" d="M0 0h24v24H0V0z"></path>
                          <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
                        </Box>
                      }
                      sx={{
                        height: '34px',
                        width: 'auto',
                        padding: '8px 8px',
                        backgroundColor: '#fff',
                        border: 'none',
                        borderRadius: '28px',
                        color: '#343434',
                        fontWeight: '700',
                        boxShadow:
                          'rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px;',
                        '&:hover': {
                          border: 'none',
                          backgroundColor: '#222222',
                          color: '#fff',
                        },
                        '& > span': {
                          padding: 0,
                        },
                      }}
                    />
                  </Tooltip>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                margin: '10px',
              }}
            >
              <Box sx={{ pointerEvents: 'auto' }}>
                <Tooltip
                  title={
                    <div>
                      <div>
                        Use the map in conjunction with the pin to fine tune the
                        location of the above address. If you autocomplete the
                        address the pin will automatically adjust.
                      </div>
                      <br />
                      <div>{`${mapLocation?.lat}, ${mapLocation?.lng}`}</div>
                    </div>
                  }
                >
                  <Chip
                    label={
                      <Box
                        component="svg"
                        viewBox="0 0 16 16"
                        height="48"
                        width="48"
                        focusable="false"
                        role="img"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        sx={{
                          display: 'inline-block',
                          verticalAlign: 'middle',
                          overflow: 'hidden',
                          width: '18px',
                          height: '24px',
                        }}
                      >
                        <title>QuestionCircleFill icon</title>
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                      </Box>
                    }
                    sx={{
                      height: '34px',
                      width: 'auto',
                      padding: '8px 8px',
                      backgroundColor: '#fff',
                      border: 'none',
                      borderRadius: '28px',
                      color: '#343434',
                      fontWeight: '700',
                      boxShadow:
                        'rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px;',
                      '&:hover': {
                        border: 'none',
                        backgroundColor: '#222222',
                        color: '#fff',
                      },
                      '& > span': {
                        padding: 0,
                      },
                    }}
                  />
                </Tooltip>
              </Box>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Box sx={{ pointerEvents: 'auto' }}>
                <Chip
                  label={
                    <Box
                      component="svg"
                      viewBox="0 0 384 512"
                      height="48"
                      width="48"
                      focusable="false"
                      role="img"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      sx={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        overflow: 'hidden',
                        width: '40px',
                        height: '40px',
                      }}
                    >
                      <title>Map Marker Icon</title>
                      <path
                        fill="currentColor"
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                      ></path>
                    </Box>
                  }
                  sx={{
                    height: '80px',
                    width: '80px',
                    padding: '0px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: '28px',
                    color: '#343434',
                    fontWeight: '700',
                    '&:hover': {
                      border: 'none',
                      backgroundColor: 'transparent',
                    },
                    '& > span': {
                      padding: 0,
                    },
                  }}
                />
              </Box>
            </Box>
          </CardContent>
        </CardContainer>
      </AspectRatio>
    </PinPointRoot>
  )
}) as OverridableComponent<PinPointTypeMap>

export { PinPointInput }
