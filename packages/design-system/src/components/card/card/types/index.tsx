/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'

import { SxProps } from '@mui/system'
import { OverridableStringUnion, OverrideProps } from '@mui/types'
import * as React from 'react'

export type CardSlot = 'root'

export interface CardPropsColorOverrides {}
export interface CardPropsVariantOverrides {}
export interface CardPropsSizeOverrides {}

export interface CardTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the Card if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * If `true`, flex direction is set to 'row'.
     * @default false
     */
    row?: boolean
    /**
     * The size of the component.
     * It accepts theme values between 'xs' and 'xl'.
     * @default 'md'
     */
    size?: OverridableStringUnion<'sm' | 'md' | 'lg', CardPropsSizeOverrides>
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
  }
  defaultComponent: D
}

export type CardProps<
  D extends React.ElementType = CardTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<CardTypeMap<P, D>, D>

export interface CardClasses {
  /** Styles applied to the root element. */
  root: string
  /** Styles applied to the root element if `size="sm"`. */
  sizeSm: string
  /** Styles applied to the root element if `size="md"`. */
  sizeMd: string
  /** Styles applied to the root element if `size="lg"`. */
  sizeLg: string
  /** Styles applied to the root element if `row={true}`. */
  row: string
}

export type CardClassKey = keyof CardClasses

export function getCardUtilityClass(slot: string): string {
  return generateUtilityClass('MuiCard', slot)
}

const cardClasses: CardClasses = generateUtilityClasses('MuiCard', [
  'root',
  'sizeSm',
  'sizeMd',
  'sizeLg',
  'row',
])

export default cardClasses
