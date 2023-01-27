import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import { unstable_capitalize as capitalize } from '@mui/utils'
import clsx from 'clsx'
import * as React from 'react'

import { CardRowContext } from './context'
import { CardRoot } from './styles'
import { CardProps, CardTypeMap, getCardUtilityClass } from './types'

const useUtilityClasses = (ownerState: CardProps) => {
  const { size, row } = ownerState

  const slots = {
    root: ['root', size && `size${capitalize(size)}`, row && 'row'],
  }

  return composeClasses(slots, getCardUtilityClass, {})
}

const CardContainer = React.forwardRef(function Card(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiCard',
  })

  const {
    className,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    component = 'div',
    size = 'md',
    children,
    row = false,
    ...other
  } = props

  const ownerState = {
    ...props,
    component,
    row,
    size,
  }

  const classes = useUtilityClasses(ownerState)

  return (
    <CardRowContext.Provider value={row}>
      <CardRoot
        as={component}
        ownerState={ownerState}
        className={clsx(classes.root, className)}
        ref={ref}
        {...other}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return child
          }
          if (index === 0) {
            return React.cloneElement(child, {
              'data-first-child': '',
            } as Record<string, string>)
          }
          if (index === React.Children.count(children) - 1) {
            return React.cloneElement(child, {
              'data-last-child': '',
            } as Record<string, string>)
          }
          return child
        })}
      </CardRoot>
    </CardRowContext.Provider>
  )
}) as OverridableComponent<CardTypeMap>

export { CardContainer }
