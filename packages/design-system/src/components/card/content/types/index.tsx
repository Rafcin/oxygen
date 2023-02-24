import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type CardContentSlot = 'root'

// eslint-disable-next-line @typescript-eslint/ban-types
export interface CardContentTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'div'
> {
  props: P & {
    /**
     * Used to render icon or text elements inside the CardContent if `src` is not set.
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

export type CardContentProps<
  D extends React.ElementType = CardContentTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<CardContentTypeMap<P, D>, D>

export interface CardContentClasses {
  /** Styles applied to the root element. */
  root: string
}

export type CardContentClassKey = keyof CardContentClasses

export function getCardContentUtilityClass(slot: string): string {
  return generateUtilityClass('MuiCardContent', slot)
}

const cardContentClasses: CardContentClasses = generateUtilityClasses(
  'MuiCardContent',
  ['root']
)

export default cardContentClasses
