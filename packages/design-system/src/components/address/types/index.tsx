/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type AddressSlot = 'root'

export interface AddressPropsColorOverrides {}
export interface AddressPropsVariantOverrides {}
export interface AddressPropsSizeOverrides {}

export interface AddressTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the Address if `src` is not set.
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
     * Label
     */
    label: string
  }
  defaultComponent: D
}

export interface AddressFormValues {
  label: string
  street: string
  subpremise: string
  city: string
  state: string
  zip: string
  country: {
    name: string
    code: string
    label: string
    value: string
  } | null
  address: string
  route: string
  location: {
    lat: string
    lng: string
  }
  viewport: {
    nw: {
      lat: string
      lng: string
    }
    se: {
      lat: string
      lng: string
    }
    center: {
      lat: string
      lng: string
    }
  }
}

export type AddressProps<
  D extends React.ElementType = AddressTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<AddressTypeMap<P, D>, D>

export interface AddressClasses {
  /** Styles applied to the root element. */
  root: string
}

export type AddressClassKey = keyof AddressClasses

export function getAddressUtilityClass(slot: string): string {
  return generateUtilityClass('MuiAddress', slot)
}

const addressClasses: AddressClasses = generateUtilityClasses('MuiAddress', ['root'])

export default addressClasses
