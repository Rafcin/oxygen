/* eslint-disable @typescript-eslint/ban-types */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type ModalHeaderSlot = 'root'

export interface ModalHeaderTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the ModalHeader if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
    /**
     * MHS
     */
    mhs?: string
    /**
     * MHN
     */
    mhn?: string
    /**
     * Is header borderless
     */
    borderless?: boolean
  }
  defaultComponent: D
}

export type ModalHeaderProps<
  D extends React.ElementType = ModalHeaderTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<ModalHeaderTypeMap<P, D>, D>

export interface ModalHeaderClasses {
  /** Styles applied to the root element. */
  root: string
}

export type ModalHeaderClassKey = keyof ModalHeaderClasses

export function getModalHeaderUtilityClass(slot: string): string {
  return generateUtilityClass('MuiModalHeader', slot)
}

const modalHeaderClasses: ModalHeaderClasses = generateUtilityClasses(
  'MuiModalHeader',
  ['root']
)

export default modalHeaderClasses
