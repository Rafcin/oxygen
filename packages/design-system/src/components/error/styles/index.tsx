import { styled } from "@mui/system"

import { ErrorProps } from "../types"

export const ErrorRoot = styled("div", {
  name: "MuiError",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: ErrorProps }>({})
