/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { generateUtilityClass, generateUtilityClasses } from '@mui/material'
import { SxProps } from '@mui/system'
import { OverrideProps } from '@mui/types'
import * as React from 'react'

export type DrawerSlot = 'root'

export interface DrawerPropsColorOverrides {}
export interface DrawerPropsVariantOverrides {}
export interface DrawerPropsSizeOverrides {}

export interface DrawerTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    /**
     * Callback fired when the value changes.
     *
     * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
     * @param {any} value We default to the index of the child.
     */
    onChange?: (event: React.SyntheticEvent, value: any) => void
    /**
     * If `true`, all `BottomNavigationAction`s will show their labels.
     * By default, only the selected `BottomNavigationAction` will show its label.
     * @default false
     */
    showLabels?: boolean
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps
    /**
     * Is floating style
     */
    floating?: boolean
    /**
     * Is visible?
     */
    visible?: boolean
    /**
     * The value of the currently selected `BottomNavigationAction`.
     */
    value?: any
  }
  defaultComponent: D
}

export type DrawerProps<
  D extends React.ElementType = DrawerTypeMap['defaultComponent'],
  P = { component?: React.ElementType }
> = OverrideProps<DrawerTypeMap<P, D>, D>

export interface DrawerClasses {
  /** Styles applied to the root element. */
  root: string
}

export type DrawerClassKey = keyof DrawerClasses

export function getDrawerUtilityClass(slot: string): string {
  return generateUtilityClass('MuiDrawer', slot)
}

const drawerClasses: DrawerClasses = generateUtilityClasses('MuiDrawer', ['root'])

export default drawerClasses
