/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type SkeletonWrapperSlot = 'root'

export interface SkeletonWrapperPropsColorOverrides {}
export interface SkeletonWrapperPropsVariantOverrides {}
export interface SkeletonWrapperPropsSizeOverrides {}

export interface SkeletonWrapperTypeMap<
  P = {},
  D extends React.ElementType = 'div'
> {
  props: P & {
    /**
     * Used to render icon or text elements inside the SkeletonWrapper if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode
    /**
     * Is the skeleton loaded and ready to render?
     */
    isLoaded?: boolean
    /**
     * Height of the skeleton.
     * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
     */
    height?: number | string
    /**
     * Width of the skeleton.
     * Useful when the skeleton is inside an inline element with no width of its own.
     */
    width?: number | string
    /**
     * The animation.
     * If `false` the animation effect is disabled.
     * @default 'pulse'
     */
    animation?: 'pulse' | 'wave' | false
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
  }
  defaultComponent: D
}

export type SkeletonWrapperProps<
  D extends React.ElementType = SkeletonWrapperTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<SkeletonWrapperTypeMap<P, D>, D>

export interface SkeletonWrapperClasses {
  /** Styles applied to the root element. */
  root: string
}

export type SkeletonWrapperClassKey = keyof SkeletonWrapperClasses

export function getSkeletonWrapperUtilityClass(slot: string): string {
  return generateUtilityClass('MuiSkeletonWrapper', slot)
}

const skeletonWrapperClasses: SkeletonWrapperClasses = generateUtilityClasses(
  'MuiSkeletonWrapper',
  ['root']
)

export default skeletonWrapperClasses
