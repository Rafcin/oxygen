/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type SortSlot = 'root'

export interface SortPropsColorOverrides {}
export interface SortPropsVariantOverrides {}
export interface SortPropsSizeOverrides {}

export interface SortTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the Sort if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
    min: number
    max: number
    sortableComponent: (object: any, form: any) => React.ReactNode
    gridContainer: object
    gridItem: object
    isRemoveable?: boolean
    /**
     * Name
     */
    name: string
  }
  defaultComponent: D
}

export type SortProps<
  D extends React.ElementType = SortTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<SortTypeMap<P, D>, D>

export interface SortClasses {
  /** Styles applied to the root element. */
  root: string
}

export type SortClassKey = keyof SortClasses

export function getSortUtilityClass(slot: string): string {
  return generateUtilityClass('MuiSort', slot)
}

const sortClasses: SortClasses = generateUtilityClasses('MuiSort', ['root'])

export default sortClasses
