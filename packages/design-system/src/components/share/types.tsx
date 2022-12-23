import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SlotComponentProps } from '@mui/base/utils'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type ShareSlot = 'root' | 'content'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SharePropsColorOverrides {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SharePropsVariantOverrides {}

interface ComponentsProps {
  root?: SlotComponentProps<'div', { sx?: SxProps }, ShareOwnerState>
  content?: SlotComponentProps<'div', { sx?: SxProps }, ShareOwnerState>
}

export interface ShareTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'div'
> {
  props: P & {
    /**
     * Used to render icon or text elements inside the Share if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * The props used for each slot inside the Share.
     * @default {}
     */
    componentsProps?: ComponentsProps
    /**
     * Domain for share
     */
    domain?: string
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
  }
  defaultComponent: D
}

export type ShareProps<
  D extends React.ElementType = ShareTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<ShareTypeMap<P, D>, D>

export interface ShareClasses {
  /** Styles applied to the root element. */
  root: string
  /** Styles applied to the content element. */
  content: string
}

export type ShareClassKey = keyof ShareClasses

export function getShareUtilityClass(slot: string): string {
  return generateUtilityClass('MuiShare', slot)
}

const ShareClasses: ShareClasses = generateUtilityClasses('MuiShare', [
  'root',
  'content',
])

export type ShareOwnerState = ShareProps

export default ShareClasses
