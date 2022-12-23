import { styled } from "@mui/system"

import { CardCoverProps } from "../types"

export const CardCoverRoot = styled("div", {
  name: "MuiCardCover",
  slot: "Root",
  overridesResolver: (styles) => styles.root,
})<{ ownerState: CardCoverProps }>({
  position: "absolute",
  zIndex: 0,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: "var(--CardCover-radius)",
  // use data-attribute instead of :first-child to support zero config SSR (emotion)
  // use nested selector for integrating with nextjs image `fill` layout (spans are inserted on top of the img)
  "& [data-first-child]": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    boxSizing: "border-box",
    borderRadius: "var(--CardCover-radius)",
    margin: 0,
    padding: 0,
    "& > img": {
      // support art-direction that uses <picture><img /></picture>
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
})
