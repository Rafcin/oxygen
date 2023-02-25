/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Button,
  unstable_composeClasses as composeClasses,
} from "@mui/material";
import { Box, useThemeProps } from "@mui/material";
import { OverridableComponent } from "@mui/types";
import clsx from "clsx";
import * as React from "react";

import { ModalCloseRoot } from "./styles";
import { ModalCloseTypeMap, getModalCloseUtilityClass } from "./types";

const useUtilityClasses = () => {
  const slots = {
    root: ["root"],
  };

  return composeClasses(slots, getModalCloseUtilityClass, {});
};

const ModalClose = React.forwardRef(function ModalClose(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiModalClose",
  });

  const {
    className,
    //@ts-ignore
    component = "div",
    ...other
  } = props;

  const ownerState = {
    ...props,
    component,
  };

  const classes = useUtilityClasses();

  return (
    <ModalCloseRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    >
      <Box
        sx={{
          position: "absolute",
          top: "12px",
          left: "12px",
          zIndex: 1,
          display: "flex",
        }}
      >
        {
          // @ts-ignore
          <Button
            {...other}
            sx={(theme: any) => ({
              borderRadius: "50%",
              color: theme?.vars.palette.text?.primary,
              width: "32px",
              height: "32px",
              maxWidth: "32px",
              maxHeight: "32px",
              minWidth: "32px",
              minHeight: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
          </Button>
        }
      </Box>
    </ModalCloseRoot>
  );
}) as OverridableComponent<ModalCloseTypeMap>;

export { ModalClose };
