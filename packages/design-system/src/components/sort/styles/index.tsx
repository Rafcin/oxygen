import { Button } from "@mui/material"
import { styled } from "@mui/system"

import { SortProps } from "../types"

export const SortRoot = styled("div", {
  name: "MuiSort",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: SortProps }>(() => [{}])

export const InteractiveButton = styled(Button, {
  name: "MuiSort-InteractiveButton",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any }>(({ theme }) => [
  {
    backgroundColor: theme?.palette?.background.inverse,
    color: theme?.palette?.background?.default,
    marginBottom: "5px",
    "&:hover": {
      backgroundColor: theme?.palette?.background.inverse,
      color: theme?.palette?.background?.default,
    },
    "&:active": {
      backgroundColor: theme?.palette?.background?.default,
      color: theme?.palette?.background.inverse,
    },
    "&:disabled": {
      backgroundColor: theme?.palette?.background.inverse,
      color: theme?.palette?.background?.default,
      opacity: 0.5,
    },
  },
])
