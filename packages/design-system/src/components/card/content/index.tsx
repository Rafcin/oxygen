import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'

import { CardContentRoot } from './styles'
import { CardContentTypeMap, getCardContentUtilityClass } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getCardContentUtilityClass, {})
}

const CardContent = React.forwardRef(function CardContent(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiCardContent',
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
    <CardContentRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children}
    </CardContentRoot>
  )
}) as OverridableComponent<CardContentTypeMap>

export { CardContent }
