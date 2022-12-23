/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ButtonUnstyled,
  unstable_composeClasses as composeClasses,
} from "@mui/base"
import { Box, useThemeProps } from "@mui/material"
import { OverridableComponent } from "@mui/types"
import clsx from "clsx"
import * as React from "react"

import { ModalCloseRoot } from "./styles"
import { ModalCloseTypeMap, getModalCloseUtilityClass } from "./types"

const useUtilityClasses = () => {
  const slots = {
    root: ["root"],
  }

  return composeClasses(slots, getModalCloseUtilityClass, {})
}

const ModalClose = React.forwardRef(function ModalClose(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiModalClose",
  })

  const {
    className,
    //@ts-ignore
    component = "div",
    ...other
  } = props

  const ownerState = {
    ...props,
    component,
  }

  const classes = useUtilityClasses()

  return (
    <ModalCloseRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      <Box
        sx={(theme: any) => ({
          [theme.breakpoints.down("sm")]: {
            top: "24px",
          },
          position: "absolute",
          display: "flex",
          top: "16px",
          left: "24px",
          zIndex: 1,
        })}
      >
        <Box
          {...other}
          component={ButtonUnstyled}
          sx={(theme: any) => ({
            appearance: "none",
            display: "inline-block",
            borderRadius: "50%",
            border: "none",
            outline: "none",
            margin: 0,
            padding: 0,
            color: theme?.palette.text?.primary,
            cursor: "pointer",
            touchAction: "manipulation",
            position: "relative",
            background: "transparent",
            transition: "transform 0.25s ease 0s",
            "&:hover": {
              color: "rgb(0, 0, 0)",
            },
            "&:hover::before": {
              background: "rgba(235, 235, 235, 0.178)",
            },
            "&::before": {
              content: '" "',
              display: "block",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 32,
              height: 32,
              borderRadius: "50%",
            },
          })}
        >
          <Box
            component="svg"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            sx={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentcolor",
              strokeWidth: 3,
              overflow: "visible",
            }}
          >
            <path d="m6 6 20 20" />
            <path d="m26 6-20 20" />
          </Box>
        </Box>
      </Box>
    </ModalCloseRoot>
  )
}) as OverridableComponent<ModalCloseTypeMap>

export { ModalClose }
