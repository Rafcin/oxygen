/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'
import { DropzoneOptions } from 'react-dropzone'

export type UploadSlot = 'root'

export interface UploadPropsColorOverrides {}
export interface UploadPropsVariantOverrides {}
export interface UploadPropsSizeOverrides {}

export interface UploadTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the Upload if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
    /**
     * Tagline for file upload
     */
    tag: string
    /**
     * Options
     */
    options?: DropzoneOptions
    /**
     * Is uploader loading / uploading a file?
     */
    loading?: boolean
  }
  defaultComponent: D
}

export type UploadProps<
  D extends React.ElementType = UploadTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<UploadTypeMap<P, D>, D>

export interface UploadClasses {
  /** Styles applied to the root element. */
  root: string
}

export type UploadClassKey = keyof UploadClasses

export function getUploadUtilityClass(slot: string): string {
  return generateUtilityClass('MuiUpload', slot)
}

const uploadClasses: UploadClasses = generateUtilityClasses('MuiUpload', ['root'])

export default uploadClasses
