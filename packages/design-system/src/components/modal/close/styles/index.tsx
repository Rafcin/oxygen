import { styled } from "@mui/system"

import { ModalCloseProps } from "../types"

export const ModalCloseRoot = styled("div", {
  name: "ModalCloseRoot",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: ModalCloseProps }>(() => [{}])
