import { styled } from "@mui/system";

import { ModalHeaderProps } from "../types";

export const ModalHeaderRoot = styled("div", {
  name: "ModalHeaderRoot",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: ModalHeaderProps }>(({ theme, ownerState }) => [
  {
    [theme?.breakpoints.down("sm")]: {
      ...(ownerState.mhs
        ? {
            minHeight: `${ownerState.mhs}px`,
          }
        : {
            minHeight: "64px",
          }),
    },
    WebkitBoxPack: "justify",
    WebkitBoxAlign: "center",
    display: "flex",
    flex: "0 0 auto",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 24px",
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: 800,
    borderBottom: `1px solid ${theme?.vars.palette.navigation.border}`,
    color: theme?.vars.palette.text?.primary,
    ...(ownerState.mhn
      ? {
          minHeight: `${ownerState.mhn}px`,
        }
      : {
          minHeight: "48px",
        }),
    ...(ownerState.borderless && {
      borderBottom: "none",
    }),
  },
]);
