import { styled } from "@mui/system"

import { PinPointProps } from "../types"
export const PinPointRoot = styled("div", {
  name: "MuiPinPoint",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: PinPointProps }>(() => [{}])
