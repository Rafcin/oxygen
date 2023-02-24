import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type ErrorSlot = 'root'

// eslint-disable-next-line @typescript-eslint/ban-types
export interface ErrorTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the Error if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode | string
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
    /**
     * Error component to render.
     */
    error?: string | React.ReactNode
    /**
     * Name of the error.
     */
    name: string
  }
  defaultComponent: D
}

export type ErrorProps<
  D extends React.ElementType = ErrorTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<ErrorTypeMap<P, D>, D>

export interface ErrorClasses {
  /** Styles applied to the root element. */
  root: string
}

export type ErrorClassKey = keyof ErrorClasses

export function getErrorUtilityClass(slot: string): string {
  return generateUtilityClass('MuiError', slot)
}

const errorClasses: ErrorClasses = generateUtilityClasses('MuiError', ['root'])

export default errorClasses
