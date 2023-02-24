/* eslint-disable @typescript-eslint/ban-types */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type CardOverflowSlot = 'root'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CardOverflowPropsColorOverrides {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CardOverflowPropsVariantOverrides {}

export interface CardOverflowTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the CardOverflow if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
  }
  defaultComponent: D
}

export type CardOverflowProps<
  D extends React.ElementType = CardOverflowTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<CardOverflowTypeMap<P, D>, D>

export interface CardOverflowClasses {
  /** Styles applied to the root element. */
  root: string
}

export type CardOverflowClassKey = keyof CardOverflowClasses

export function getCardOverflowUtilityClass(slot: string): string {
  return generateUtilityClass('MuiCardOverflow', slot)
}

const aspectRatioClasses: CardOverflowClasses = generateUtilityClasses(
  'MuiCardOverflow',
  ['root']
)

export default aspectRatioClasses
