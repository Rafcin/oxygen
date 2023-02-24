/* eslint-disable @typescript-eslint/ban-types */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type ModalBodySlot = 'root'

export interface ModalBodyTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the ModalBody if `src` is not set.
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
     * Size
     */
    size?: string
    /**
     * Is LG
     */
    lg?: boolean
  }
  defaultComponent: D
}

export type ModalBodyProps<
  D extends React.ElementType = ModalBodyTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<ModalBodyTypeMap<P, D>, D>

export interface ModalBodyClasses {
  /** Styles applied to the root element. */
  root: string
}

export type ModalBodyClassKey = keyof ModalBodyClasses

export function getModalBodyUtilityClass(slot: string): string {
  return generateUtilityClass('MuiModalBody', slot)
}

const modalBodyClasses: ModalBodyClasses = generateUtilityClasses('MuiModalBody', [
  'root',
])

export default modalBodyClasses
