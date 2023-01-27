/* eslint-disable @typescript-eslint/ban-ts-comment */
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'

import { ModalOverlayRoot } from './styles'
import { ModalOverlayTypeMap, getModalOverlayUtilityClass } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getModalOverlayUtilityClass, {})
}

const ModalOverlay = React.forwardRef(function ModalOverlay(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiModalOverlay',
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
    <ModalOverlayRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children}
    </ModalOverlayRoot>
  )
}) as OverridableComponent<ModalOverlayTypeMap>

export { ModalOverlay }
