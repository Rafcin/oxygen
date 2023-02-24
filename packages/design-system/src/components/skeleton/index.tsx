/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'

import { SkeletonWrapperRoot } from './styles'
import { getSkeletonWrapperUtilityClass, SkeletonWrapperTypeMap } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getSkeletonWrapperUtilityClass, {})
}

const SkeletonWrapper = React.forwardRef(function SkeletonWrapper(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiSkeletonWrapper',
  })

  const {
    className,
    //@ts-ignore
    component = 'div',
    children,
    isLoaded,
    width,
    height,
    animation = 'pulse',
    ...other
  } = props

  const ownerState = {
    ...props,
    component,
  }

  const classes = useUtilityClasses()

  return (
    <SkeletonWrapperRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {children}
    </SkeletonWrapperRoot>
  )
}) as OverridableComponent<SkeletonWrapperTypeMap>

export { SkeletonWrapper }
