/* eslint-disable @typescript-eslint/ban-ts-comment */
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'

import { GridRoot } from './styles'
import { getGridUtilityClass, GridTypeMap } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getGridUtilityClass, {})
}

const Grid = React.forwardRef(function Grid(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiGrid',
  })

  const {
    className,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    component = 'div',
    children,
    rowGap,
    columnGap,
    ...other
  } = props

  const ownerState = {
    ...props,
    component,
  }

  const classes = useUtilityClasses()

  return (
    <GridRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children}
    </GridRoot>
  )
}) as OverridableComponent<GridTypeMap>

export { Grid }
