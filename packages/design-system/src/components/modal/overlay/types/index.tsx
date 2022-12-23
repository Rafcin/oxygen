/* eslint-disable @typescript-eslint/ban-types */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type ModalOverlaySlot = 'root'

export interface ModalOverlayTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the ModalOverlay if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
  }
  defaultComponent: D
}

export type ModalOverlayProps<
  D extends React.ElementType = ModalOverlayTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<ModalOverlayTypeMap<P, D>, D>

export interface ModalOverlayClasses {
  /** Styles applied to the root element. */
  root: string
}

export type ModalOverlayClassKey = keyof ModalOverlayClasses

export function getModalOverlayUtilityClass(slot: string): string {
  return generateUtilityClass('MuiModalOverlay', slot)
}

const modalOverlayClasses: ModalOverlayClasses = generateUtilityClasses(
  'MuiModalOverlay',
  ['root']
)

export default modalOverlayClasses
