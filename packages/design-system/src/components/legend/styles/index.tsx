import { styled } from "@mui/system";

import { LegendProps } from "../types";
export const LegendRoot = styled("div", {
  name: "MuiLegend",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: LegendProps }>(({ theme }) => [
  {
    [theme?.breakpoints.up("sm")]: {
      fontSize: "26px",
      lineHeight: "26px",
      marginBottom: "20px",
    },
    color: theme?.vars.palette.text?.primary,
    marginBottom: "20px",

    fontSize: "16px",
    lineHeight: "16px",
    fontWeight: 600,
  },
]);
