/* eslint-disable @typescript-eslint/ban-types */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type ModalContentSlot = 'root'

export interface ModalContentTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the ModalContent if `src` is not set.
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
    /**
     * Is full
     */
    full?: boolean
    /**
     * Is lg?
     */
    lg?: boolean
    /**
     * Modal radius
     */
    radius?: string
  }
  defaultComponent: D
}

export type ModalContentProps<
  D extends React.ElementType = ModalContentTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<ModalContentTypeMap<P, D>, D>

export interface ModalContentClasses {
  /** Styles applied to the root element. */
  root: string
}

export type ModalContentClassKey = keyof ModalContentClasses

export function getModalContentUtilityClass(slot: string): string {
  return generateUtilityClass('MuiModalContent', slot)
}

const modalContentClasses: ModalContentClasses = generateUtilityClasses(
  'MuiModalContent',
  ['root']
)

export default modalContentClasses
