/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'
import { FieldValues } from 'react-hook-form'

export type BusinessHoursSlot = 'root'

export interface BusinessHoursPropsColorOverrides {}
export interface BusinessHoursPropsVariantOverrides {}
export interface BusinessHoursPropsSizeOverrides {}

export type DaysOfTheWeek =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'

export type OpeningHoursStatus = 'Open' | 'Closed' | 'Open 24 Hours'

export type OpeningHours = {
  points: Array<OpeningHoursPair>
  weekdayText: Array<string>
}

export type OpeningHoursPair = {
  id: string
  day: DaysOfTheWeek
  status: OpeningHoursStatus
  close: OpeningHoursTime
  open: OpeningHoursTime
}

export type OpeningHoursTime = {
  iso: string | null
  time: string | null
  date: string | null
}

export type FormValues = FieldValues & {
  hours: Array<OpeningHoursPair> | undefined
}

export interface BusinessHoursTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the BusinessHours if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
    /**
     * Name
     */
    value?: Array<OpeningHoursPair>
    onChange: (event: any) => any
    onError: (event: any) => any
  }
  defaultComponent: D
}

export interface BusinessHoursFormValues {
  location: {
    lat: string
    lng: string
  }
}

export type BusinessHoursProps<
  D extends React.ElementType = BusinessHoursTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<BusinessHoursTypeMap<P, D>, D>

export interface BusinessHoursClasses {
  /** Styles applied to the root element. */
  root: string
}

export type BusinessHoursClassKey = keyof BusinessHoursClasses

export function getBusinessHoursUtilityClass(slot: string): string {
  return generateUtilityClass('MuiBusinessHours', slot)
}

const businessHoursClasses: BusinessHoursClasses = generateUtilityClasses(
  'MuiBusinessHours',
  ['root']
)

export default businessHoursClasses
