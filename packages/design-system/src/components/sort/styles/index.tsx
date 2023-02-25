import { Button } from "@mui/material";
import { styled } from "@mui/system";

import { SortProps } from "../types";

export const SortRoot = styled("div", {
  name: "MuiSort",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: SortProps }>(() => [{}]);

export const InteractiveButton = styled(Button, {
  name: "MuiSort-InteractiveButton",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any }>(({ theme }) => [
  {
    backgroundColor: theme?.vars.palette?.background.inverse,
    color: theme?.vars.palette?.background?.default,
    marginBottom: "5px",
    "&:hover": {
      backgroundColor: theme?.vars.palette?.background.inverse,
      color: theme?.vars.palette?.background?.default,
    },
    "&:active": {
      backgroundColor: theme?.vars.palette?.background?.default,
      color: theme?.vars.palette?.background.inverse,
    },
    "&:disabled": {
      backgroundColor: theme?.vars.palette?.background.inverse,
      color: theme?.vars.palette?.background?.default,
      opacity: 0.5,
    },
  },
]);
