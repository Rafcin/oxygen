import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useSlotProps } from '@mui/base/utils'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import * as React from 'react'
import { AspectRatioTypeMap, getAspectRatioUtilityClass } from './types'
import { AspectRatioContent, AspectRatioRoot } from './styles'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
    content: ['content'],
  }

  return composeClasses(slots, getAspectRatioUtilityClass, {})
}

const AspectRatio = React.forwardRef(function AspectRatio(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiAspectRatio',
  })

  const {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    component = 'div',
    children,
    componentsProps = {},
    ratio = '16 / 9',
    minHeight,
    maxHeight,
    objectFit = 'cover',
    ...other
  } = props

  const ownerState = {
    ...props,
    component,
    minHeight,
    maxHeight,
    objectFit,
    ratio,
  }

  const classes = useUtilityClasses()

  const rootProps = useSlotProps({
    elementType: AspectRatioRoot,
    ownerState,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref,
      as: component,
    },
    className: classes.root,
  })

  const contentProps = useSlotProps({
    elementType: AspectRatioContent,
    ownerState,
    externalSlotProps: componentsProps.content,
    className: classes.content,
  })

  return (
    <AspectRatioRoot {...rootProps}>
      <AspectRatioContent {...contentProps}>
        {React.Children.map(children, (child, index) =>
          index === 0 && React.isValidElement(child)
            ? React.cloneElement(child, { 'data-first-child': '' } as Record<
                string,
                string
              >)
            : child
        )}
      </AspectRatioContent>
    </AspectRatioRoot>
  )
}) as OverridableComponent<AspectRatioTypeMap>

export { AspectRatio }
