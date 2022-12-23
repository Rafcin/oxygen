import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SlotComponentProps } from '@mui/base/utils'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type ContainerSlot = 'root' | 'content'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContainerPropsColorOverrides {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContainerPropsVariantOverrides {}

interface ComponentsProps {
  root?: SlotComponentProps<'div', { sx?: SxProps }, ContainerOwnerState>
  content?: SlotComponentProps<'div', { sx?: SxProps }, ContainerOwnerState>
}

export interface ContainerTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'div'
> {
  props: P & {
    /**
     * Used to render icon or text elements inside the Container if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * The props used for each slot inside the Container.
     * @default {}
     */
    componentsProps?: ComponentsProps
    /**
     * Inline Padding
     */
    inlinePadding?: string
    /**Margin Block */
    marginBlockStart?: string
    marginBlockEnd?: string
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
  }
  defaultComponent: D
}

export type ContainerProps<
  D extends React.ElementType = ContainerTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<ContainerTypeMap<P, D>, D>

export interface ContainerClasses {
  /** Styles applied to the root element. */
  root: string
  /** Styles applied to the content element. */
  content: string
}

export type ContainerClassKey = keyof ContainerClasses

export function getContainerUtilityClass(slot: string): string {
  return generateUtilityClass('MuiContainer', slot)
}

const ContainerClasses: ContainerClasses = generateUtilityClasses('MuiContainer', [
  'root',
  'content',
])

export type ContainerOwnerState = ContainerProps

export default ContainerClasses
