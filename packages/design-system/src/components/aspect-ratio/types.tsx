import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SlotComponentProps } from '@mui/base/utils'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type AspectRatioSlot = 'root' | 'content'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AspectRatioPropsColorOverrides {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AspectRatioPropsVariantOverrides {}

interface ComponentsProps {
  root?: SlotComponentProps<'div', { sx?: SxProps }, AspectRatioOwnerState>
  content?: SlotComponentProps<'div', { sx?: SxProps }, AspectRatioOwnerState>
}

export interface AspectRatioTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'div'
> {
  props: P & {
    /**
     * Used to render icon or text elements inside the AspectRatio if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * The props used for each slot inside the AspectRatio.
     * @default {}
     */
    componentsProps?: ComponentsProps
    /**
     * The minimum calculated height of the element (not the CSS height).
     */
    minHeight?: number | string
    /**
     * The maximum calculated height of the element (not the CSS height).
     */
    maxHeight?: number | string
    /**
     * The CSS object-fit value of the first-child.
     */
    objectFit?: React.CSSProperties['objectFit']
    /**
     * The aspect-ratio of the element. The current implementation uses padding instead of the CSS aspect-ratio due to browser support.
     * https://caniuse.com/?search=aspect-ratio
     * @default '16 / 9'
     */
    ratio?: number | string
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
  }
  defaultComponent: D
}

export type AspectRatioProps<
  D extends React.ElementType = AspectRatioTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<AspectRatioTypeMap<P, D>, D>

export interface AspectRatioClasses {
  /** Styles applied to the root element. */
  root: string
  /** Styles applied to the content element. */
  content: string
}

export type AspectRatioClassKey = keyof AspectRatioClasses

export function getAspectRatioUtilityClass(slot: string): string {
  return generateUtilityClass('MuiAspectRatio', slot)
}

const aspectRatioClasses: AspectRatioClasses = generateUtilityClasses(
  'MuiAspectRatio',
  ['root', 'content']
)

export type AspectRatioOwnerState = AspectRatioProps

export default aspectRatioClasses
