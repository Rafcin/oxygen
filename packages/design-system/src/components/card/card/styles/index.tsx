import { styled } from "@mui/system";

import { CardProps } from "../types";
export const CardRoot = styled("div", {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: CardProps }>(({ theme, ownerState }) => [
  {
    // a context variable for any child component
    "--Card-childRadius":
      "max((var(--Card-radius) - var(--variant-borderWidth)) - var(--Card-padding), min(var(--Card-padding) / 2, (var(--Card-radius) - var(--variant-borderWidth)) / 2))",
    // AspectRatio integration
    "--AspectRatio-radius": "var(--Card-childRadius)",
    // Link integration
    "--internal-action-margin": "calc(-1 * var(--variant-borderWidth))",
    // Link, Radio, Checkbox integration
    // '--internal-action-radius': resolveSxValue(
    //   { theme, ownerState },
    //   'borderRadius',
    //   'var(--Card-radius)'
    // ),
    // CardCover integration
    "--CardCover-radius":
      "calc(var(--Card-radius) - var(--variant-borderWidth))",
    // CardOverflow integration
    "--CardOverflow-offset": `calc(-1 * var(--Card-padding))`,
    "--CardOverflow-radius":
      "calc(var(--Card-radius) - var(--variant-borderWidth))",
    ...(ownerState.size === "sm" && {
      "--Card-radius": theme?.vars.shape?.borderRadius,
      "--Card-padding": "0.5rem",
    }),
    ...(ownerState.size === "md" && {
      "--Card-radius": theme?.vars.shape?.borderRadius,
      "--Card-padding": "1rem",
    }),
    ...(ownerState.size === "lg" && {
      "--Card-radius": theme?.vars.shape?.borderRadius,
      "--Card-padding": "1.5rem",
    }),
    padding: "var(--Card-padding)",
    borderRadius: "var(--Card-radius)",
    //boxShadow: theme?.vars.shadows[0],
    backgroundColor: theme?.vars.palette?.background?.default,
    fontFamily: "inherit",
    // TODO: discuss the theme transition.
    // This value is copied from mui-material Sheet.
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    position: "relative",
    display: "flex",
    flexDirection: ownerState.row ? "row" : "column",
  },
  //theme?.vars.variants[ownerState.variant!]?.[ownerState.color!]
]);
