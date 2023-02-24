/* eslint-disable @typescript-eslint/ban-ts-comment */
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'

import { CardRowContext } from '../card/context'

import { CardOverflowRoot } from './styles'
import { CardOverflowTypeMap, getCardOverflowUtilityClass } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getCardOverflowUtilityClass, {})
}

const CardOverflow = React.forwardRef(function CardOverflow(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiCardOverflow',
  })

  const row = React.useContext(CardRowContext)

  const {
    className,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    component = 'div',
    children,
    ...other
  } = props

  const ownerState = {
    ...props,
    component,
    row,
  }

  const classes = useUtilityClasses()

  return (
    <CardOverflowRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children}
    </CardOverflowRoot>
  )
}) as OverridableComponent<CardOverflowTypeMap>

export { CardOverflow }
