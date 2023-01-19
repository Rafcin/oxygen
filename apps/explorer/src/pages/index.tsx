import { api } from '@/trpc/api'
import { Wrapper } from '@googlemaps/react-wrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Box,
  Button,
  Chip,
  Container,
  FormHelperText,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  SwipeableDrawer,
  TextField,
} from '@mui/material'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import {
  Error,
  GoogleMapProvider,
  Loading,
  Map,
  ModalClose,
  OverlayView,
} from '@oxygen/design-system'
import Link from 'next/link'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { IoSettingsOutline } from 'react-icons/io5'
import usePlacesAutocomplete, {
  getDetails,
  getGeocode,
} from 'use-places-autocomplete'
import * as z from 'zod'
import TextareaAutosize from '@mui/base/TextareaAutosize'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const Home = () => {
  //Form
  const fieldsSchema = z.object({
    address: z.string(),
    location: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
    query: z.string(),
  })

  const form = useForm<any>({
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    defaultValues: {
      query: 'Smoke',
    },
    resolver: zodResolver(fieldsSchema),
  })

  const { control, setValue, handleSubmit, reset, watch, formState } = form
  const watchLocation = watch('location')
  const watchQuery = watch('query')

  const onSubmit = async () => {
    console.log('On Submit')
  }

  const {
    value: locationSearchValue,
    suggestions: { data: locationSearchData, status: locationSearchStatus },
    setValue: setLocationSearchValue,
  } = usePlacesAutocomplete({
    initOnMount: true,
    //callbackName: '__onGoogleMapsLoad',
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  })

  const filter = createFilterOptions<any>()
  const [open, setOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const removeKey = (obj, keyToRemove) =>
    Object.keys(obj).reduce((acc, key) => {
      if (key !== keyToRemove) {
        acc[key] = obj[key]
      }
      return acc
    }, {})

  const maps = api.maps.locations.useQuery({
    location: {
      lat: watchLocation?.lat ?? 33.4756618,
      lng: watchLocation?.lng ?? -117.6786843,
    },
    radius: 100,
    query: watchQuery,
  })

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Paper
          component={SwipeableDrawer}
          anchor="bottom"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          sx={(theme: any) => ({
            '& > .MuiDrawer-paper': {
              borderTopRightRadius: '12px',
              borderTopLeftRadius: '12px',
              padding: '40px',
              paddingLeft: '0px',
              paddingRight: '0px',
              overflow: 'hidden',
              backgroundColor: theme?.palette.background?.appbar,
              color: theme?.palette.text?.primary,
              backgroundImage: theme?.overlays[4],
            },
            '&.MuiModal-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            },
          })}
        >
          <ModalClose onClick={() => setOpen(false)} />
          <Box sx={{ marginBottom: '15px' }} />
          <Container maxWidth="md">
            <Box
              sx={{
                width: '100%',
                height: '400px',
              }}
            >
              <DataGrid
                columns={[
                  { field: 'place_id', headerName: 'ID', width: 150 },
                  { field: 'name', headerName: 'Name', width: 230 },
                  { field: 'rating', headerName: 'Rating', width: 100 },
                  { field: 'business_status', headerName: 'Status', width: 150 },
                  {
                    field: 'user_ratings_total',
                    headerName: 'User Ratings',
                    width: 100,
                  },
                  {
                    field: 'formatted_address',
                    headerName: 'Address',
                    width: 300,
                  },
                ]}
                rows={maps.data?.results ?? []}
                loading={Boolean(maps.data?.results.length <= 0)}
                getRowId={(row) => row?.place_id}
                components={{ Toolbar: GridToolbar }}
              />
            </Box>
            <br />
            <Controller
              control={control}
              name="query"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  autoComplete="off"
                  label="Query"
                  placeholder="Query"
                  fullWidth
                  ref={ref}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  error={Boolean(formState.errors?.query)}
                />
              )}
            />
            {formState.errors.query && (
              <Error
                sx={{ width: '100%' }}
                name="query"
                error={String(formState.errors?.query?.message)}
              />
            )}
            <FormHelperText>
              Use this field to change the query type. For example, if you want to
              find sushi places then type "Sushi" or "Sushi Restaurants" or
              "Japanese" in this field.
            </FormHelperText>
            <br />
            <Controller
              name="address"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  sx={{
                    width: '100%',
                  }}
                  id="address-input"
                  isOptionEqualToValue={(option, value) =>
                    option.label === value.label
                  }
                  freeSolo
                  value={value}
                  options={locationSearchData.map((result) => ({
                    ...result,
                    value: result.description,
                    label: result.description,
                    meta: result.structured_formatting.secondary_text,
                  }))}
                  onInputChange={(event, newInputValue) => {
                    setLocationSearchValue(newInputValue)
                    onChange(newInputValue)
                  }}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params)
                    return filtered
                  }}
                  onChange={(
                    event: any,
                    newValue: any | null,
                    reason: any,
                    details: any
                  ) => {
                    if (reason === 'clear') {
                      setValue('address', '')
                    }
                    if (reason === 'createOption') {
                      setValue('address', newValue.value)
                    }
                    if (reason === 'selectOption') {
                      getGeocode({
                        address: newValue.value,
                      })
                        .then((results) =>
                          getDetails({
                            placeId: results[0].place_id,
                          })
                        )
                        .then((details: any) => {
                          setValue('address', details.formatted_address, {
                            shouldValidate: true,
                          })
                          setValue(
                            'location',
                            {
                              lat: details.geometry.location.lat(),

                              lng: details.geometry.location.lng(),
                            },
                            { shouldValidate: true }
                          )
                        })
                    }
                  }}
                  loading={Boolean(
                    locationSearchValue && locationSearchStatus !== 'OK'
                  )}
                  renderInput={(params) => (
                    <TextField
                      autoComplete="off"
                      label="Search by City, Address, State or Country"
                      {...params}
                    />
                  )}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={(theme: any) => ({
                        borderRadius: `${theme?.border?.default}px`,
                        margin: '10px',
                      })}
                      {...props}
                    >
                      <List>
                        <ListItem
                          sx={{
                            padding: 0,
                          }}
                        >
                          <ListItemAvatar>
                            <Box
                              sx={(theme: any) => ({
                                backgroundColor: theme?.palette?.background?.default,
                                border: `1px solid ${theme?.palette?.background?.border}`,
                                borderRadius: `${theme?.border?.default}px`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                maxWidth: '48px',
                                height: '48px',
                                fontSize: '17px',
                              })}
                            >
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
                                  width: '22px',
                                  height: '22px',
                                }}
                              >
                                <title>Buildings icon</title>
                                <path d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z"></path>
                                <path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z"></path>
                              </Box>
                            </Box>
                          </ListItemAvatar>
                          <ListItemText
                            primary={option.label}
                            secondary={option.meta}
                          />
                        </ListItem>
                      </List>
                    </Box>
                  )}
                />
              )}
            />
            {formState.errors.address && (
              <Error
                name="address"
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                error={String(formState.errors.address.message)}
              />
            )}
            <FormHelperText>
              You can move the map manually, however if you want to jump to a
              location on the map to search in just type the city, address, zipcode,
              state or country.
            </FormHelperText>
            <br />
            <Button variant="outlined" onClick={() => setDialogOpen(true)}>
              Open Debug
            </Button>
            <Dialog
              open={dialogOpen}
              onClose={() => setDialogOpen(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{'Debug Panel'}</DialogTitle>
              <DialogContent>
                <Box
                  component={TextareaAutosize}
                  aria-label="empty textarea"
                  placeholder="Status codes are logged here for debugging purposes"
                  value={
                    maps.data ? JSON.stringify(removeKey(maps.data, 'results')) : ''
                  }
                  sx={{
                    width: '100%',
                    minHeight: '200px',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    padding: '15px',
                  }}
                />
              </DialogContent>
              <DialogActions
                sx={{
                  padding: '15px',
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => setDialogOpen(false)}
                  autoFocus
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Container>
        </Paper>
        <Box>
          <Box>
            <Box
              sx={{
                left: '24px',
                display: 'block',
                top: '24px',
                bottom: 'auto',
                position: 'absolute',
                zIndex: 1,
                overflowY: 'hidden',
                maxHeight: '163px',
                padding: '8px',
                borderRadius: '12px',
              }}
            >
              <Button
                endIcon={<IoSettingsOutline />}
                variant="outlined"
                sx={(theme: any) => ({
                  backgroundColor: theme?.palette?.background?.default,
                  '&:hover': {
                    backgroundColor: theme?.palette?.background?.default,
                  },
                  paddingLeft: '15px',
                  paddingRight: '15px',
                })}
                onClick={() => setOpen(true)}
              >
                Map Settings
              </Button>
            </Box>
            <Wrapper
              apiKey={process.env.NEXT_PUBLIC_GMAPS_API}
              render={() => {
                return <Loading />
              }}
            >
              <GoogleMapProvider>
                <Map
                  apiKey={process.env.NEXT_PUBLIC_GMAPS_API}
                  opts={{
                    center: {
                      lat: watchLocation?.lat ?? 33.4756618,
                      lng: watchLocation?.lng ?? -117.6786843,
                    },
                    zoom: 11,
                    gestureHandling: 'greedy',
                    zoomControl: false,
                    mapId: 'aeba400134fbaf90',
                    streetViewControl: false,
                    fullscreenControl: false,
                    mapTypeControl: false,
                  }}
                  style={{
                    height: '100vh',
                    width: '100%',
                  }}
                  useDrawing
                  useGeometry
                  usePlaces
                  useVisualization
                  onDragEnd={(event) => {
                    setValue(
                      'location',
                      {
                        lat: event.center.lat,

                        lng: event.center.lng,
                      },
                      { shouldValidate: true }
                    )
                  }}
                ></Map>
                {maps.data?.results.map((result) => {
                  return (
                    <OverlayView
                      position={{
                        lat: result.geometry.location.lat,
                        lng: result.geometry.location.lng,
                      }}
                    >
                      <Link
                        href={`https://www.google.com/maps/place/?q=place_id:${result?.place_id}`}
                      >
                        <Chip
                          label={result.rating}
                          sx={{
                            height: '30px',
                            width: 'auto',
                            padding: '0px 8px',
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
                      </Link>
                    </OverlayView>
                  )
                })}
              </GoogleMapProvider>
            </Wrapper>
          </Box>
        </Box>
      </form>
    </FormProvider>
  )
}

export default Home
