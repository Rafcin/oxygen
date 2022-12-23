/* eslint-disable @typescript-eslint/ban-types */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type LegendSlot = 'root'

export interface LegendTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the Legend if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
    /**
     * Wtf is LAS again?
     */
    las?: boolean
  }
  defaultComponent: D
}

export type LegendProps<
  D extends React.ElementType = LegendTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<LegendTypeMap<P, D>, D>

export interface LegendClasses {
  /** Styles applied to the root element. */
  root: string
}

export type LegendClassKey = keyof LegendClasses

export function getLegendUtilityClass(slot: string): string {
  return generateUtilityClass('MuiLegend', slot)
}

const legendClasses: LegendClasses = generateUtilityClasses('MuiLegend', ['root'])

export default legendClasses
