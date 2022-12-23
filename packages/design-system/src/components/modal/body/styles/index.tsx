import { styled } from "@mui/system"

import { ModalBodyProps } from "../types"

export const ModalBodyRoot = styled("div", {
  name: "ModalBodyRoot",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: ModalBodyProps }>(({ ownerState }) => [
  {
    flex: "1 1 auto",
    overflowY: "auto",
    outline: "none",
    ...(ownerState.size
      ? {
          padding: `${ownerState.size}px`,
        }
      : {
          padding: "24px",
        }),
    ...(ownerState.lg && {
      paddingTop: "8px",
      paddingBottom: "8px",
      paddingLeft: "48px",
      paddingRight: "48px",
      height: "100%",
      overflow: "auto",
    }),
  },
])
