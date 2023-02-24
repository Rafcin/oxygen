/* eslint-disable @typescript-eslint/ban-ts-comment */
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'

import { ModalContentRoot } from './styles'
import { ModalContentTypeMap, getModalContentUtilityClass } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getModalContentUtilityClass, {})
}

const ModalContent = React.forwardRef(function ModalContent(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiModalContent',
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
    <ModalContentRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children}
    </ModalContentRoot>
  )
}) as OverridableComponent<ModalContentTypeMap>

export { ModalContent }
