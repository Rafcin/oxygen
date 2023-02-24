/* eslint-disable @typescript-eslint/ban-ts-comment */
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'

import { LegendRoot } from './styles'
import { getLegendUtilityClass, LegendTypeMap } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getLegendUtilityClass, {})
}

const Legend = React.forwardRef(function Legend(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiLegend',
  })

  const {
    className,
    //@ts-ignore
    component = 'div',
    children,
    ...other
  } = props

  const ownerState = {
    ...props,
    component,
  }

  const classes = useUtilityClasses()

  return (
    <LegendRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children}
    </LegendRoot>
  )
}) as OverridableComponent<LegendTypeMap>

export { Legend }
