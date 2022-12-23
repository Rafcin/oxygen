import { styled } from "@mui/system"

import { AddressProps } from "../types"
export const AddressRoot = styled("div", {
  name: "MuiAddress",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: AddressProps }>(() => [{}])
