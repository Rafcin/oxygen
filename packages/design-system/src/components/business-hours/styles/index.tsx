import { Button } from "@mui/material"
import { styled } from "@mui/system"

import { BusinessHoursProps } from "../types"

export const BusinessHoursRoot = styled("div", {
  name: "MuiBusinessHours",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: BusinessHoursProps }>(() => [{}])

export const SelectionButton = styled(Button, {
  name: "MuiBusinessHours-SelectionButton",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any }>(() => [
  {
    width: "45px",
    height: "45px",
    maxWidth: "45px",
    maxHeight: "45px",
    minWidth: "45px",
    minHeight: "45px",
    borderRadius: "50%",
  },
])

export const InteractiveButton = styled(Button, {
  name: "MuiBusinessHours-InteractiveButton",
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

export const DayIndicator = styled("div", {
  name: "MuiBusinessHours-DayIndicator",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any }>(({ theme }) => [
  {
    backgroundColor: theme?.palette?.background.inverse,
    color: theme?.palette?.background?.default,
    borderRadius: "50%",
    padding: "10px",
    width: "45px",
    height: "45px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
])
