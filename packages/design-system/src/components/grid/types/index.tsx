import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type GridSlot = 'root'
export type GridColumnsBreakpoints = { [k: string]: number }

// eslint-disable-next-line @typescript-eslint/ban-types
export interface GridTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the Grid if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode | string
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
    /**
     * Grid column gap in px
     */
    columnGap?: string
    /**
     * Grid row gap in px
     */
    rowGap?: string
  }
  defaultComponent: D
}

export type GridProps<
  D extends React.ElementType = GridTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<GridTypeMap<P, D>, D>

export interface GridClasses {
  /** Styles applied to the root element. */
  root: string
}

export type GridClassKey = keyof GridClasses

export function getGridUtilityClass(slot: string): string {
  return generateUtilityClass('MuiGrid', slot)
}

const GridClasses: GridClasses = generateUtilityClasses('MuiGrid', ['root'])

export default GridClasses
