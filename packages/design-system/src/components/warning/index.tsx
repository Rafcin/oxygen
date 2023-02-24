/* eslint-disable @typescript-eslint/ban-ts-comment */
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { Box, useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'

import {
  WarningDescription,
  WarningIcon,
  WarningRoot,
  WarningSection,
  WarningTitle,
} from './styles'
import { WarningTypeMap, getWarningUtilityClass } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getWarningUtilityClass, {})
}

const Warning = React.forwardRef(function Warning(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiWarning',
  })

  const {
    className,
    //@ts-ignore
    component = 'div',
    title,
    description,
    ...other
  } = props

  const ownerState = {
    ...props,
    component,
  }

  const classes = useUtilityClasses()

  return (
    <WarningRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      <WarningSection ownerState={ownerState} {...other}>
        <Box
          sx={{
            marginRight: '12px',
          }}
        >
          <WarningIcon ownerState={ownerState} {...other}>
            {ownerState.variant === 'error' && (
              <Box
                component="svg"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 192 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"
                  stroke="none"
                />
              </Box>
            )}
            {ownerState.variant === 'success' && (
              <Box
                component="svg"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                  stroke="none"
                />
              </Box>
            )}
            {ownerState.variant === 'warning' && (
              <Box
                component="svg"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
                  stroke="none"
                />
              </Box>
            )}
          </WarningIcon>
        </Box>
        <Box>
          <WarningTitle ownerState={ownerState}>{title}</WarningTitle>
          <WarningDescription ownerState={ownerState}>
            {description}
          </WarningDescription>
        </Box>
      </WarningSection>
    </WarningRoot>
  )
}) as OverridableComponent<WarningTypeMap>

export { Warning }
