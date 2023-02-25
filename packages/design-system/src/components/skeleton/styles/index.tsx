import { keyframes, styled } from "@mui/system";

import { SkeletonWrapperProps } from "../types";

const skeletonKeyframes = keyframes`
  0% {
    opacity: 0.09049773755656108;
  }
  100% {
    opacity: 0.15384615384615385;
  }
`;

const loadedKeyframe = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const SkeletonWrapperRoot = styled("span", {
  name: "MuiSkeletonWrapper",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: SkeletonWrapperProps }>(
  ({ theme, ownerState }) => [
    {
      opacity: ownerState.isLoaded ? 1 : 0.7,
      backgroundColor: ownerState.isLoaded
        ? "transparent"
        : theme?.vars.palette?.background?.skeleton,
      borderRadius: theme?.vars.border?.default,
      height: ownerState.height ?? "auto",
      width: ownerState.width ?? "100%",
      animation: `${skeletonKeyframes} 1s ease-in-out infinite forwards alternate`,
      "& > *": {
        visibility: ownerState.isLoaded ? "visible" : "hidden",
      },
      ...(ownerState.isLoaded && {
        animation: `${loadedKeyframe} 0.8s ease-in-out`,
      }),
    },
  ]
);
