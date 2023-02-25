import { styled } from "@mui/system";

import { AspectRatioProps } from "../types";

// Use to control the width of the content, usually in a flexbox row container
export const AspectRatioRoot = styled("div", {
  name: "MuiAspectRatio",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: AspectRatioProps }>(({ ownerState }) => {
  const minHeight =
    typeof ownerState.minHeight === "number"
      ? `${ownerState.minHeight}px`
      : ownerState.minHeight;
  const maxHeight =
    typeof ownerState.maxHeight === "number"
      ? `${ownerState.maxHeight}px`
      : ownerState.maxHeight;
  return {
    // a context variable for any child component
    "--aspectratio-paddingBottom":
      minHeight || maxHeight
        ? `clamp(${minHeight || "0px"}, calc(100% / (${ownerState.ratio})), ${
            maxHeight || "9999px"
          })`
        : `calc(100% / (${ownerState.ratio}))`,
    flexDirection: "column",
    margin: "var(--aspectratio-margin)",
  };
});

export const AspectRatioContent = styled("div", {
  name: "MuiAspectRatio",
  slot: "Content",
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: AspectRatioProps }>(({ ownerState }) => [
  {
    flex: 1,
    position: "relative",
    borderRadius: "var(--aspectratio-radius)",
    height: 0,
    paddingBottom: "var(--aspectratio-paddingBottom)",
    overflow: "hidden",
    // use data-attribute instead of :first-child to support zero config SSR (emotion)
    // use nested selector for integrating with nextjs image `fill` layout (spans are inserted on top of the img)
    "& [data-first-child]": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: ownerState.objectFit,
      margin: 0,
      padding: 0,
      "& > img": {
        // support art-direction that uses <picture><img /></picture>
        width: "100%",
        height: "100%",
        objectFit: ownerState.objectFit,
      },
    },
  },
  //theme?.vars.variants[ownerState.variant!]?.[ownerState.color!]
]);
