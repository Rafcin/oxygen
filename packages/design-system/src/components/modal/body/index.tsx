/* eslint-disable @typescript-eslint/ban-ts-comment */
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'

import { ModalBodyRoot } from './styles'
import { ModalBodyTypeMap, getModalBodyUtilityClass } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getModalBodyUtilityClass, {})
}

const ModalBody = React.forwardRef(function ModalBody(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiModalBody',
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
    <ModalBodyRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children}
    </ModalBodyRoot>
  )
}) as OverridableComponent<ModalBodyTypeMap>

export { ModalBody }
