/* eslint-disable @typescript-eslint/ban-ts-comment */
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { capitalize, useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'
import { Warning } from '../warning'

import { ErrorRoot } from './styles'
import { ErrorTypeMap, getErrorUtilityClass } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getErrorUtilityClass, {})
}

const Error = React.forwardRef(function Error(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiError',
  })

  const {
    className,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    component = 'div',
    children,
    name,
    error,
    ...other
  } = props

  const ownerState = {
    ...props,
    component,
  }

  const classes = useUtilityClasses()

  return (
    <ErrorRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      {error && (
        <Warning
          title={capitalize(name)}
          description={error ?? children}
          variant="error"
        />
      )}
    </ErrorRoot>
  )
}) as OverridableComponent<ErrorTypeMap>

export { Error }
