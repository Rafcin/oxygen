import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SlotComponentProps } from '@mui/base/utils'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type ShellSlot = 'root' | 'content'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ShellPropsColorOverrides {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ShellPropsVariantOverrides {}

interface ComponentsProps {
  root?: SlotComponentProps<'div', { sx?: SxProps }, ShellOwnerState>
  content?: SlotComponentProps<'div', { sx?: SxProps }, ShellOwnerState>
}

export interface ShellTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'div'
> {
  props: P & {
    /**
     * Used to render icon or text elements inside the Shell if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * The props used for each slot inside the Shell.
     * @default {}
     */
    componentsProps?: ComponentsProps
    /**
     * Page Max Width
     */
    pageSize?: string
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
  }
  defaultComponent: D
}

export type ShellProps<
  D extends React.ElementType = ShellTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<ShellTypeMap<P, D>, D>

export interface ShellClasses {
  /** Styles applied to the root element. */
  root: string
  /** Styles applied to the content element. */
  content: string
}

export type ShellClassKey = keyof ShellClasses

export function getShellUtilityClass(slot: string): string {
  return generateUtilityClass('MuiShell', slot)
}

const ShellClasses: ShellClasses = generateUtilityClasses('MuiShell', [
  'root',
  'content',
])

export type ShellOwnerState = ShellProps

export default ShellClasses
