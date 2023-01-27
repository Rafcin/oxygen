import { Mode } from '@/content/controls/mode'
import { Signout } from '@/content/controls/signout'
import { getServerAuthSession } from '@/server/common/get-server-auth-session'
import { trpc } from '@/trpc/api'
import useMultiSelect from '@/utils/multi-select'
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
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { FaFileCsv, FaMapMarkedAlt, FaUser } from 'react-icons/fa'
import usePlacesAutocomplete, {
  getDetails,
  getGeocode,
} from 'use-places-autocomplete'
import * as z from 'zod'

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

  const { control, setValue, watch, formState } = form
  const watchLocation = watch('location')
  const watchQuery = watch('query')

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
  const [mapSettingsOpen, setMapSettingsOpen] = useState(false)
  const [accountSettingsOpen, setAccountSettingsOpen] = useState(false)
  const [datavisualizationOpen, setDatavisualizationOpen] = useState(false)
  const { selectedItems, handleSelect, reset } = useMultiSelect({
    checkId: true,
    idName: 'place_id',
  })

  const maps = trpc.maps.textSearch.useQuery(
    {
      location: {
        lat: watchLocation?.lat ?? 33.4756618,
        lng: watchLocation?.lng ?? -117.6786843,
      },
      radius: 100,
      query: watchQuery,
    },
    {
      refetchOnWindowFocus: false,
    }
  )

  const details = trpc.maps.detailSearch.useMutation()

  return (
    <FormProvider {...form}>
      <form>
        <Paper
          component={SwipeableDrawer}
          anchor="bottom"
          open={mapSettingsOpen}
          onClose={() => setMapSettingsOpen(false)}
          onOpen={() => setMapSettingsOpen(true)}
          sx={(theme: any) => ({
            '& > .MuiDrawer-paper': {
              borderTopRightRadius: '12px',
              borderTopLeftRadius: '12px',
              padding: '40px',
              paddingLeft: '0px',
              paddingRight: '0px',
              backgroundColor: theme?.palette.background?.appbar,
              color: theme?.palette.text?.primary,
              backgroundImage: theme?.overlays[4],
            },
            '&.MuiModal-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            },
          })}
        >
          <ModalClose onClick={() => setMapSettingsOpen(false)} />
          <Box sx={{ marginBottom: '15px' }} />
          <Container maxWidth="md">
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
                          reset()
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
            <Button
              endIcon={<FaFileCsv />}
              variant="outlined"
              sx={(theme: any) => ({
                paddingLeft: '25px',
                paddingRight: '25px',
                marginBottom: '10px',
              })}
              disabled={selectedItems && selectedItems.length <= 0}
              onClick={() => {
                if (selectedItems && selectedItems.length > 0) {
                  details.mutateAsync({
                    place_ids: selectedItems.map((i) => i.place_id),
                  })
                  setMapSettingsOpen(false)
                  setDatavisualizationOpen(true)
                }
              }}
            >
              Data Visualization & Exports
            </Button>
            <FormHelperText>
              Using the map markers, select the locations you want to add to your
              dataset. Once you have selected the locations you want to add to your
              dataset, click the button below to continue.
            </FormHelperText>
          </Container>
        </Paper>
        <Paper
          component={SwipeableDrawer}
          anchor="bottom"
          open={datavisualizationOpen}
          onClose={() => setDatavisualizationOpen(false)}
          onOpen={() => setDatavisualizationOpen(true)}
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
          <ModalClose onClick={() => setDatavisualizationOpen(false)} />
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
                  {
                    field: 'formatted_phone_number',
                    headerName: 'Phone Number',
                    width: 150,
                  },
                  {
                    field: 'website',
                    headerName: 'Website',
                    width: 150,
                  },
                ]}
                rows={
                  (details.data &&
                    details.data.reduce((accumulator, currentValue: any) => {
                      return accumulator.concat(currentValue?.value?.result)
                    }, [])) ??
                  []
                }
                loading={details.isLoading}
                getRowId={(row) => row?.place_id}
                components={{ Toolbar: GridToolbar }}
              />
            </Box>
          </Container>
        </Paper>
        <Paper
          component={SwipeableDrawer}
          anchor="bottom"
          open={accountSettingsOpen}
          onClose={() => setAccountSettingsOpen(false)}
          onOpen={() => setAccountSettingsOpen(true)}
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
          <ModalClose onClick={() => setAccountSettingsOpen(false)} />
          <Box sx={{ marginBottom: '15px' }} />
          <Container maxWidth="md">
            <Signout />
            <Mode />
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
                endIcon={<FaMapMarkedAlt />}
                sx={(theme: any) => ({
                  backgroundColor: theme?.palette?.background?.default,
                  '&:hover': {
                    backgroundColor: theme?.palette?.background?.default,
                  },
                  paddingLeft: '25px',
                  paddingRight: '25px',
                })}
                onClick={() => setMapSettingsOpen(true)}
              >
                Map
              </Button>
              <Button
                endIcon={<FaUser />}
                sx={(theme: any) => ({
                  backgroundColor: theme?.palette?.background?.default,
                  '&:hover': {
                    backgroundColor: theme?.palette?.background?.default,
                  },
                  paddingLeft: '15px',
                  paddingRight: '15px',
                  marginLeft: '15px',
                })}
                onClick={() => setAccountSettingsOpen(true)}
              >
                Account
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
                ></Map>
                {maps.data?.results.map((result) => {
                  return (
                    <OverlayView
                      key={result?.place_id}
                      position={{
                        lat: result.geometry.location.lat,
                        lng: result.geometry.location.lng,
                      }}
                    >
                      <Chip
                        label={`${result?.name} ${result?.rating}★`}
                        onClick={() => {
                          handleSelect(result)
                        }}
                        sx={{
                          height: '30px',
                          width: 'auto',
                          padding: '0px 8px',
                          backgroundColor: selectedItems.find(
                            (i) => i.place_id === result?.place_id
                          )
                            ? '#222222'
                            : '#fff',
                          border: 'none',
                          borderRadius: '28px',
                          color: selectedItems.find(
                            (i) => i.place_id === result?.place_id
                          )
                            ? '#fff'
                            : '#222222',
                          fontWeight: '700',
                          boxShadow:
                            'rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px;',
                          '&:hover': {
                            border: 'none',
                            backgroundColor: selectedItems.find(
                              (i) => i.place_id === result?.place_id
                            )
                              ? '#444444'
                              : '#f1f0f0',
                            color: selectedItems.find(
                              (i) => i.place_id === result?.place_id
                            )
                              ? '#fff'
                              : '#222',
                          },
                          '& > span': {
                            padding: 0,
                          },
                        }}
                      />
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

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(ctx)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

export default Home
