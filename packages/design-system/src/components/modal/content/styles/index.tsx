import { styled } from "@mui/system";

import { ModalContentProps } from "../types";

export const ModalContentRoot = styled("div", {
  name: "ModalContentRoot",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: ModalContentProps }>(({ theme, ownerState }) => [
  {
    "@keyframes mt": {
      from: {
        opacity: 0,
        transform: "translate(0px, 100%)",
      },
      to: {
        opacity: 1,
        transform: "none",
      },
    },
    [theme?.breakpoints.up("sm")]: {
      width: "100%",
      maxWidth: "568px",
      ...(ownerState.full
        ? {
            borderRadius: `${ownerState.radius}px`,
          }
        : {
            borderRadius: 12,
          }),
      ...(ownerState.lg && {
        maxWidth: "780px",
      }),
      ...(ownerState.full && {
        maxWidth: "100%",
        height: "100%",
        borderRadius: 0,
      }),
    },
    animationDuration: "400ms",
    animationIterationCount: 1,
    animationFillMode: "both",
    animationName: "mt",
    WebkitBoxDirection: "normal",
    WebkitBoxOrient: "vertical",
    background: theme?.vars.palette.modal.background,
    position: "relative",
    width: "100vw",
    maxWidth: "100vw",
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "rgb(0 0 0 / 28%) 0px 8px 28px",
    ...(ownerState.full && {
      maxWidth: "100%",
      height: "100%",
      borderRadius: 0,
    }),
    ...(ownerState.radius
      ? {
          borderTopLeftRadius: `${ownerState.radius}px`,
          borderTopRightRadius: `${ownerState.radius}px`,
        }
      : {
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }),
  },
]);
