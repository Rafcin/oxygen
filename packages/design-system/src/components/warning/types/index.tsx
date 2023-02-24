import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type WarningSlot = 'root'

// eslint-disable-next-line @typescript-eslint/ban-types
export interface WarningTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the Warning if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
    /**
     * Is the warning displayed inline?
     */
    inline?: boolean
    /**
     * Is the warning displayed block?
     */
    block?: boolean
    /**
     * Is the warning borderless?
     */
    borderless?: boolean
    /**
     * Warning Variant
     */
    variant: 'error' | 'warning' | 'success'
    /**
     * Title
     */
    title?: React.ReactNode | string | undefined | null
    /**
     * Description
     */
    description?: React.ReactNode | string | undefined | null
  }
  defaultComponent: D
}

export type WarningProps<
  D extends React.ElementType = WarningTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<WarningTypeMap<P, D>, D>

export interface WarningClasses {
  /** Styles applied to the root element. */
  root: string
}

export type WarningClassKey = keyof WarningClasses

export function getWarningUtilityClass(slot: string): string {
  return generateUtilityClass('MuiWarning', slot)
}

const cardCoverClasses: WarningClasses = generateUtilityClasses('MuiWarning', [
  'root',
])

export default cardCoverClasses
