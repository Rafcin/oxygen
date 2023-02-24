/* eslint-disable @typescript-eslint/ban-types */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type ModalCloseSlot = 'root'

export interface ModalCloseTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the ModalClose if `src` is not set.
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

export type ModalCloseProps<
  D extends React.ElementType = ModalCloseTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<ModalCloseTypeMap<P, D>, D>

export interface ModalCloseClasses {
  /** Styles applied to the root element. */
  root: string
}

export type ModalCloseClassKey = keyof ModalCloseClasses

export function getModalCloseUtilityClass(slot: string): string {
  return generateUtilityClass('MuiModalClose', slot)
}

const modalCloseClasses: ModalCloseClasses = generateUtilityClasses(
  'MuiModalClose',
  ['root']
)

export default modalCloseClasses
