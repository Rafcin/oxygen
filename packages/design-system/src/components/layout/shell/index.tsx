import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useSlotProps } from '@mui/base/utils'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import * as React from 'react'
import { ShellTypeMap, getShellUtilityClass } from './types'
import { ShellRoot } from './styles'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
    content: ['content'],
  }

  return composeClasses(slots, getShellUtilityClass, {})
}

const Shell = React.forwardRef(function Shell(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiShell',
  })

  const {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    component = 'div',
    children,
    componentsProps = {},
    pageSize = '1760px',
    ...other
  } = props

  const ownerState = {
    ...props,
    pageSize,
    component,
  }

  const classes = useUtilityClasses()

  const rootProps = useSlotProps({
    elementType: ShellRoot,
    ownerState,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref,
      as: component,
    },
    className: classes.root,
  })

  return (
    <ShellRoot {...rootProps}>
      {React.Children.map(children, (child, index) =>
        index === 0 && React.isValidElement(child)
          ? React.cloneElement(child, { 'data-first-child': '' } as Record<
              string,
              string
            >)
          : child
      )}
    </ShellRoot>
  )
}) as OverridableComponent<ShellTypeMap>

export { Shell }
