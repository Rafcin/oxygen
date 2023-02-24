/* eslint-disable @typescript-eslint/ban-types */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type ModalFooterSlot = 'root'

export interface ModalFooterTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the ModalFooter if `src` is not set.
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

export type ModalFooterProps<
  D extends React.ElementType = ModalFooterTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<ModalFooterTypeMap<P, D>, D>

export interface ModalFooterClasses {
  /** Styles applied to the root element. */
  root: string
}

export type ModalFooterClassKey = keyof ModalFooterClasses

export function getModalFooterUtilityClass(slot: string): string {
  return generateUtilityClass('MuiModalFooter', slot)
}

const modalFooterClasses: ModalFooterClasses = generateUtilityClasses(
  'MuiModalFooter',
  ['root']
)

export default modalFooterClasses
