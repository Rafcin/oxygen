/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type PinPointSlot = 'root'

export interface PinPointPropsColorOverrides {}
export interface PinPointPropsVariantOverrides {}
export interface PinPointPropsSizeOverrides {}

export type PinPointLocation = {
  lat: number
  lng: number
}

// viewport: {
//   nw: {
//     lat: 33.4811793302915,
//     lng: -117.6712362302915,
//   },
//   se: { lat: 33.4784813697085, lng: -117.6685382697085 },
//   center: { lat: 33.47983035, lng: -117.66988725 },
// },

export type PinPointBounds = {
  nw: {
    lat: number
    lng: number
  }
  se: { lat: number; lng: number }
  center: { lat: number; lng: number }
}

export interface PinPointTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the PinPoint if `src` is not set.
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
    name: string
    /**
     * Default Lat Lng for Pin Point
     */
    defaultValue?: PinPointLocation
    value?: PinPointLocation
    zoom?: number
    /**
     * On pinp point changed return lt lng
     */
    onChange?: (
      latLng?: PinPointLocation | undefined | null,
      bounds?: PinPointBounds | undefined | null
    ) => any | void
  }
  defaultComponent: D
}

export type PinPointProps<
  D extends React.ElementType = PinPointTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<PinPointTypeMap<P, D>, D>

export interface PinPointClasses {
  /** Styles applied to the root element. */
  root: string
}

export type PinPointClassKey = keyof PinPointClasses

export function getPinPointUtilityClass(slot: string): string {
  return generateUtilityClass('MuiPinPoint', slot)
}

const pinPointClasses: PinPointClasses = generateUtilityClasses('MuiPinPoint', [
  'root',
])

export default pinPointClasses
