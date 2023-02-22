/* eslint-disable @typescript-eslint/no-misused-promises */
import { yupResolver } from '@hookform/resolvers/yup'
import { unstable_composeClasses as composeClasses } from '@mui/material'
import {
  Box,
  Button,
  capitalize,
  ListItem,
  Modal,
  TextField,
  useThemeProps,
} from '@mui/material'
import Switch from '@mui/material/Switch'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import { OverridableComponent } from '@mui/types'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import clsx from 'clsx'
import * as React from 'react'
import { useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import * as Yup from 'yup'
import { Error } from '../error'
import { ModalBody } from '../modal/body'
import { ModalClose } from '../modal/close'
import { ModalContent } from '../modal/content'
import { ModalHeader } from '../modal/header'
import { ModalView } from '../modal/view'
import { BusinessHoursRoot, DayIndicator, InteractiveButton } from './styles'
import {
  BusinessHoursTypeMap,
  DaysOfTheWeek,
  FormValues,
  getBusinessHoursUtilityClass,
} from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getBusinessHoursUtilityClass, {})
}

const BusinessHoursInput = React.forwardRef(function BusinessHours(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiBusinessHours',
  })

  const {
    className,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    component = 'div',
    value,
    onChange,
    ...other
  } = props

  const ownerState = {
    ...props,
    component,
  }

  const classes = useUtilityClasses()

  const days: Array<DaysOfTheWeek> = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const [isModalOpen, setModalState] = useState(false)
  //Array of indicies for each field that needs to be copied
  const [copyValues, setCopyValues] = useState([])
  /**
   * Opening Hours
   */

  const formSchema = {
    id: Yup.string().required('Required'),
    day: Yup.string().required('Required'),
    status: Yup.string().required('Required'),
    open: Yup.object().when('status', {
      //@ts-ignore
      is: 'Open',
      then: Yup.object().shape({
        iso: Yup.string(),
        time: Yup.string(),
        date: Yup.string()
          .transform((value) => {
            return !value ? '' : value
          })
          .required('Opening hours are required'),
      }),
      otherwise: Yup.object().nullable().notRequired(),
    }),
    close: Yup.object().when('status', {
      //@ts-ignore
      is: 'Open',
      then: Yup.object().shape({
        iso: Yup.string(),
        time: Yup.string(),
        date: Yup.string()
          .transform((value) => {
            return !value ? '' : value
          })
          .required('Closing hours are required'),
      }),
      otherwise: Yup.object().nullable().notRequired(),
    }),
  }

  const fieldsSchema = Yup.object().shape({
    hours: Yup.array()
      .of(Yup.object().shape(formSchema))
      .required('Must have opening and closing hours')
      .min(7, "You don't have enough opening and closing hours"),
  })

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    defaultValues: {
      hours:
        value ??
        days.map((day: DaysOfTheWeek) => {
          return {
            id: uuidv4(),
            day: day,
            status: 'Closed',
            open: {
              iso: '',
              time: '',
              date: '',
            },
            close: {
              iso: '',
              time: '',
              date: '',
            },
          }
        }),
    },
    resolver: yupResolver(fieldsSchema),
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'hours',
  })

  const onValid = (data: any) => {
    onChange(data.hours)
    console.log('Hours', data.hours)
    setModalState(false)
  }

  const onInvalid = () => {
    setModalState(false)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BusinessHoursRoot
        as={component}
        ownerState={ownerState}
        className={clsx(classes.root, className)}
        ref={ref}
        {...other}
      >
        <Button onClick={() => setModalState(true)}>Edit Hours</Button>
        <Modal
          open={isModalOpen}
          onClose={() => setModalState(false)}
          sx={() => ({
            ...ModalView({}),
          })}
        >
          <ModalContent>
            <ModalHeader borderless={false}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Business Hours
              </div>
            </ModalHeader>
            <ModalClose onClick={() => setModalState(false)} />
            <ModalBody>
              <form onSubmit={handleSubmit(onValid, onInvalid)}>
                <div>
                  {days.map((day: DaysOfTheWeek) => {
                    return (
                      <span key={day}>
                        <ListItem
                          disablePadding
                          sx={{
                            paddingTop: '0px',
                            paddingBottom: '10px',
                          }}
                        >
                          <DayIndicator
                            sx={{
                              marginRight: '10px',
                            }}
                          >
                            {capitalize(day.slice(0, 1))}
                          </DayIndicator>
                          <Switch
                            inputProps={{
                              'aria-label': `closed-${day}`,
                            }}
                            checked={
                              fields.filter(
                                (field) =>
                                  field.day === day && field.status === 'Open'
                              ).length > 0
                            }
                            onChange={(e) => {
                              if (e.target.checked) {
                                remove(
                                  fields
                                    .filter((field) => field.day === day)
                                    .map((field) => fields.indexOf(field))
                                )
                                append({
                                  id: uuidv4(),
                                  day: day,
                                  status: 'Open',
                                  open: {
                                    iso: '',
                                    time: '',
                                    date: '',
                                  },
                                  close: {
                                    iso: '',
                                    time: '',
                                    date: '',
                                  },
                                })
                              } else {
                                remove(
                                  fields
                                    .filter((field) => field.day === day)
                                    .map((field) => fields.indexOf(field))
                                )
                                append({
                                  id: uuidv4(),
                                  day: day,
                                  status: 'Closed',
                                  open: {
                                    iso: '',
                                    time: '',
                                    date: '',
                                  },
                                  close: {
                                    iso: '',
                                    time: '',
                                    date: '',
                                  },
                                })
                              }
                            }}
                          />
                          <Box
                            sx={{
                              marginLeft: '10px',
                              marginRight: '10px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            {fields.filter(
                              (field) => field.day === day && field.status === 'Open'
                            ).length > 0
                              ? 'Open'
                              : 'Closed'}
                          </Box>
                          <Button
                            onClick={() => {
                              remove(
                                fields
                                  .filter(
                                    (field) =>
                                      field.day === day &&
                                      (field.status === 'Closed' ||
                                        field.status === 'Open 24 Hours')
                                  )
                                  .map((field) => fields.indexOf(field))
                              )
                              append({
                                id: uuidv4(),
                                day: day,
                                status: 'Open',
                                open: {
                                  iso: '',
                                  time: '',
                                  date: '',
                                },
                                close: {
                                  iso: '',
                                  time: '',
                                  date: '',
                                },
                              })
                            }}
                          >
                            Add hours
                          </Button>
                        </ListItem>
                        <Box>
                          <Button
                            sx={{ padding: '5px' }}
                            onClick={() => {
                              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                              // @ts-ignore
                              setCopyValues(
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                fields
                                  .filter((field) => field.day === day)
                                  .map((field) => field)
                              )
                              console.log('Copy Values', copyValues)
                            }}
                          >
                            <Box
                              component="svg"
                              viewBox="0 0 24 24"
                              focusable="false"
                              role="img"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              sx={{
                                width: '24px',
                                height: '24px',
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                overflow: 'hidden',
                              }}
                            >
                              <title>Copy icon</title>
                              <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
                            </Box>
                          </Button>
                          <Button
                            sx={{ padding: '5px' }}
                            onClick={() => {
                              fields
                                .filter((field) => field.day === day)
                                .forEach((field) => {
                                  remove(fields.indexOf(field))
                                })

                              copyValues.forEach((field) => {
                                append({
                                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                  // @ts-ignore
                                  ...field,
                                  day: day,
                                })
                              })
                            }}
                          >
                            <Box
                              component="svg"
                              viewBox="0 0 24 24"
                              focusable="false"
                              role="img"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              sx={{
                                width: '24px',
                                height: '24px',
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                overflow: 'hidden',
                              }}
                            >
                              <title>Paste icon</title>
                              <path d="M20 11V5c0-1.103-.897-2-2-2h-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H4c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2zm-9 2v5H4V5h3v2h8V5h3v6h-5c-1.103 0-2 .897-2 2zm2 7v-7h7l.001 7H13z"></path>{' '}
                            </Box>
                          </Button>
                        </Box>
                        <Grid
                          sx={{
                            marginTop: '10px',
                            marginBottom: '10px',
                          }}
                          container
                          rowSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
                          columnSpacing={1}
                        >
                          {fields
                            .filter((field) => field.day === day)
                            .map((field) => {
                              return (
                                <React.Fragment key={field.id}>
                                  {field.status === 'Open' && (
                                    <React.Fragment>
                                      <Grid xs={6} sm={5} md={5} lg={5}>
                                        <Controller
                                          control={control}
                                          name={`hours.${fields.indexOf(
                                            field
                                          )}.open.date`}
                                          render={({
                                            field: { onChange, onBlur, value, ref },
                                          }) => (
                                            <TimePicker
                                              ref={ref}
                                              label="Open Time"
                                              value={value}
                                              onChange={onChange}
                                              renderInput={(params) => (
                                                <TextField
                                                  {...params}
                                                  onBlur={onBlur}
                                                  error={Boolean(
                                                    errors.hours?.[
                                                      fields.indexOf(field)
                                                    ]?.open?.date
                                                  )}
                                                  sx={{ width: '100%' }}
                                                />
                                              )}
                                            />
                                          )}
                                        />
                                      </Grid>
                                      <Grid xs={6} sm={5} md={5} lg={5}>
                                        <Controller
                                          control={control}
                                          name={`hours.${fields.indexOf(
                                            field
                                          )}.close.date`}
                                          render={({
                                            field: { onChange, onBlur, value, ref },
                                          }) => (
                                            <TimePicker
                                              ref={ref}
                                              label="Close Time"
                                              value={value}
                                              onChange={onChange}
                                              renderInput={(params) => (
                                                <TextField
                                                  {...params}
                                                  onBlur={onBlur}
                                                  error={Boolean(
                                                    errors.hours?.[
                                                      fields.indexOf(field)
                                                    ]?.close?.date
                                                  )}
                                                  sx={{ width: '100%' }}
                                                />
                                              )}
                                            />
                                          )}
                                        />
                                      </Grid>
                                      <Grid xs={12} sm={2} md={2} lg={2}>
                                        <Box
                                          sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            width: '100%',
                                            height: '100%',
                                          }}
                                        >
                                          <Button
                                            onClick={() => {
                                              if (
                                                fields.filter(
                                                  (field) => field.day === day
                                                ).length >= 2
                                              ) {
                                                remove(fields.indexOf(field))
                                              } else {
                                                remove(fields.indexOf(field))
                                                append({
                                                  id: uuidv4(),
                                                  day: day,
                                                  status: 'Closed',
                                                  open: {
                                                    iso: '',
                                                    time: '',
                                                    date: '',
                                                  },
                                                  close: {
                                                    iso: '',
                                                    time: '',
                                                    date: '',
                                                  },
                                                })
                                              }
                                            }}
                                          >
                                            Remove
                                          </Button>
                                        </Box>
                                      </Grid>
                                      {errors.hours && (
                                        <Error
                                          sx={{ width: '100%' }}
                                          name="state"
                                          error={
                                            errors.hours?.[fields.indexOf(field)]
                                              ?.open?.date?.message
                                          }
                                        />
                                      )}
                                      {errors.hours && (
                                        <Error
                                          sx={{ width: '100%' }}
                                          name="state"
                                          error={
                                            errors.hours?.[fields.indexOf(field)]
                                              ?.close?.date?.message
                                          }
                                        />
                                      )}
                                    </React.Fragment>
                                  )}
                                </React.Fragment>
                              )
                            })}
                        </Grid>
                      </span>
                    )
                  })}
                </div>
                <InteractiveButton
                  type="submit"
                  disabled={!isValid}
                  sx={{ marginTop: '10px' }}
                >
                  Save
                </InteractiveButton>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </BusinessHoursRoot>
    </LocalizationProvider>
  )
}) as OverridableComponent<BusinessHoursTypeMap>

export { BusinessHoursInput }
