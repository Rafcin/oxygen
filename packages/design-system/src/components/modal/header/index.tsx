/* eslint-disable @typescript-eslint/ban-ts-comment */
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'

import { ModalHeaderRoot } from './styles'
import { ModalHeaderTypeMap, getModalHeaderUtilityClass } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getModalHeaderUtilityClass, {})
}

const ModalHeader = React.forwardRef(function ModalHeader(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiModalHeader',
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
    <ModalHeaderRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children}
    </ModalHeaderRoot>
  )
}) as OverridableComponent<ModalHeaderTypeMap>

export { ModalHeader }
