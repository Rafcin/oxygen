import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useSlotProps } from '@mui/base/utils'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import * as React from 'react'
import { ContainerTypeMap, getContainerUtilityClass } from './types'
import { ContainerRoot } from './styles'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
    content: ['content'],
  }

  return composeClasses(slots, getContainerUtilityClass, {})
}

const Container = React.forwardRef(function Container(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiContainer',
  })

  const {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    component = 'div',
    children,
    componentsProps = {},
    inlinePadding = '80px',
    marginBlockStart = '16px',
    marginBlockEnd = '48px',
    ...other
  } = props

  const ownerState = {
    ...props,
    inlinePadding,
    marginBlockStart,
    marginBlockEnd,
    component,
  }

  const classes = useUtilityClasses()

  const rootProps = useSlotProps({
    elementType: ContainerRoot,
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
    <ContainerRoot {...rootProps}>
      {React.Children.map(children, (child, index) =>
        index === 0 && React.isValidElement(child)
          ? React.cloneElement(child, { 'data-first-child': '' } as Record<
              string,
              string
            >)
          : child
      )}
    </ContainerRoot>
  )
}) as OverridableComponent<ContainerTypeMap>

export { Container }
