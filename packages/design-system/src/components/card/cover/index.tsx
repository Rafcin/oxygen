/* eslint-disable @typescript-eslint/ban-ts-comment */
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'

import { CardCoverRoot } from './styles'
import { CardCoverTypeMap, getCardCoverUtilityClass } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getCardCoverUtilityClass, {})
}

const CardCover = React.forwardRef(function CardCover(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiCardCover',
  })

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
  }

  const classes = useUtilityClasses()

  return (
    <CardCoverRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {React.Children.map(children, (child, index) =>
        index === 0 && React.isValidElement(child)
          ? React.cloneElement(child, { 'data-first-child': '' } as Record<
              string,
              string
            >)
          : child
      )}
    </CardCoverRoot>
  )
}) as OverridableComponent<CardCoverTypeMap>

export { CardCover }
