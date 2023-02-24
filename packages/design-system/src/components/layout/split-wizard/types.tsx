import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SlotComponentProps } from '@mui/base/utils'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type SplitWizardSlot = 'root' | 'content'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SplitWizardPropsColorOverrides {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SplitWizardPropsVariantOverrides {}

interface ComponentsProps {
  root?: SlotComponentProps<'div', { sx?: SxProps }, SplitWizardOwnerState>
  content?: SlotComponentProps<'div', { sx?: SxProps }, SplitWizardOwnerState>
}

export interface SplitWizardTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'div'
> {
  props: P & {
    /**
     * Used to render icon or text elements inside the SplitWizard if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * The props used for each slot inside the SplitWizard.
     * @default {}
     */
    componentsProps?: ComponentsProps
    footer: React.ReactNode
    info: React.ReactNode
    header: React.ReactNode
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
  }
  defaultComponent: D
}

export type SplitWizardProps<
  D extends React.ElementType = SplitWizardTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<SplitWizardTypeMap<P, D>, D>

export interface SplitWizardClasses {
  /** Styles applied to the root element. */
  root: string
  /** Styles applied to the content element. */
  content: string
}

export type SplitWizardClassKey = keyof SplitWizardClasses

export function getSplitWizardUtilityClass(slot: string): string {
  return generateUtilityClass('MuiSplitWizard', slot)
}

const SplitWizardClasses: SplitWizardClasses = generateUtilityClasses(
  'MuiSplitWizard',
  ['root', 'content']
)

export type SplitWizardOwnerState = SplitWizardProps

export default SplitWizardClasses
