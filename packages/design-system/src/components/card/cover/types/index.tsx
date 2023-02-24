import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type CardCoverSlot = 'root'

// eslint-disable-next-line @typescript-eslint/ban-types
export interface CardCoverTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the CardCover if `src` is not set.
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

export type CardCoverProps<
  D extends React.ElementType = CardCoverTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<CardCoverTypeMap<P, D>, D>

export interface CardCoverClasses {
  /** Styles applied to the root element. */
  root: string
}

export type CardCoverClassKey = keyof CardCoverClasses

export function getCardCoverUtilityClass(slot: string): string {
  return generateUtilityClass('MuiCardCover', slot)
}

const cardCoverClasses: CardCoverClasses = generateUtilityClasses('MuiCardCover', [
  'root',
])

export default cardCoverClasses
