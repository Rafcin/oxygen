/* eslint-disable @typescript-eslint/ban-ts-comment */
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'

import { ModalFooterRoot } from './styles'
import { ModalFooterTypeMap, getModalFooterUtilityClass } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getModalFooterUtilityClass, {})
}

const ModalFooter = React.forwardRef(function ModalFooter(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiModalFooter',
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
    <ModalFooterRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children}
    </ModalFooterRoot>
  )
}) as OverridableComponent<ModalFooterTypeMap>

export { ModalFooter }
