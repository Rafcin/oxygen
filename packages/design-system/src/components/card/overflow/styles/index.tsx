import { styled } from "@mui/system"

import { CardOverflowProps } from "../types"

export const CardOverflowRoot = styled("div", {
  name: "MuiCardOverflow",
  slot: "Root",
  overridesResolver: (styles) => styles.root,
})<{
  ownerState: CardOverflowProps & {
    row: boolean
    "data-first-child"?: string
    "data-last-child"?: string
  }
}>(({ ownerState }) => {
  const childRadius =
    "calc(var(--CardOverflow-radius) - var(--variant-borderWidth))"
  return [
    ownerState.row
      ? {
          "--AspectRatio-margin": "calc(-1 * var(--Card-padding)) 0px",
          marginTop: "var(--CardOverflow-offset)",
          marginBottom: "var(--CardOverflow-offset)",
          padding: "var(--Card-padding) 0px",
          borderRadius: "var(--CardOverflow-radius)",
          position: "relative",
          // use data-attribute instead of :first-child, :last-child to support zero config SSR (emotion)
          ...(ownerState["data-first-child"] !== undefined && {
            "--AspectRatio-radius": `${childRadius} 0 0 ${childRadius}`,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            marginLeft: "var(--CardOverflow-offset)",
          }),
          ...(ownerState["data-last-child"] !== undefined && {
            "--AspectRatio-radius": `0 ${childRadius} ${childRadius} 0`,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            marginRight: "var(--CardOverflow-offset)",
          }),
        }
      : {
          "--AspectRatio-margin": "0px calc(-1 * var(--Card-padding))",
          marginLeft: "var(--CardOverflow-offset)",
          marginRight: "var(--CardOverflow-offset)",
          padding: "0px var(--Card-padding)",
          borderRadius: "var(--CardOverflow-radius)",
          position: "relative",
          // use data-attribute instead of :first-child, :last-child to support zero config SSR (emotion)
          ...(ownerState["data-first-child"] !== undefined && {
            "--AspectRatio-radius": `${childRadius} ${childRadius} 0 0`,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            marginTop: "var(--CardOverflow-offset)",
          }),
          ...(ownerState["data-last-child"] !== undefined && {
            "--AspectRatio-radius": `0 0 ${childRadius} ${childRadius}`,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            marginBottom: "var(--CardOverflow-offset)",
          }),
        },
  ]
})
