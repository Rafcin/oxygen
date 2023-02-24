import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'
import { isFragment } from 'react-is'

import { Flex } from '../layout/flex'

import { DrawerRoot } from './styles'
import { DrawerTypeMap, getDrawerUtilityClass } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }
  return composeClasses(slots, getDrawerUtilityClass, {})
}

const Drawer = React.forwardRef(function Drawer(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiDrawer',
  })

  const {
    className,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    component = 'div',
    children,
    onChange,
    showLabels = false,
    value,
    ...other
  } = props

  const ownerState = {
    ...props,
    component,
    showLabels,
  }

  const classes = useUtilityClasses()

  return (
    <Flex>
      <DrawerRoot
        as={component}
        ownerState={ownerState}
        className={clsx(classes.root, className)}
        ref={ref}
        {...other}
      >
        {React.Children.map(children, (child: any, childIndex: number) => {
          if (!React.isValidElement(child)) {
            return null
          }

          if (process.env.NODE_ENV !== 'production') {
            if (isFragment(child)) {
              console.error(
                [
                  "MUI: The BottomNavigation component doesn't accept a Fragment as a child.",
                  'Consider providing an array instead.',
                ].join('\n')
              )
            }
          }

          const childValue =
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            child.props.value === undefined ? childIndex : child.props.value

          return React.cloneElement(child, {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            selected: childValue === value,
            showLabel:
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              child.props.showLabel !== undefined
                ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  child.props.showLabel
                : showLabels,
            value: childValue,
            onChange,
          })
        })}
      </DrawerRoot>
    </Flex>
  )
}) as OverridableComponent<DrawerTypeMap>

export { Drawer }
