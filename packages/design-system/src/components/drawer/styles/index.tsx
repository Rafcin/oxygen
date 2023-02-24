import { styled } from "@mui/system"

import { DrawerProps } from "../types"

export const DrawerRoot = styled("div", {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: (styles) => styles.root,
})<{ theme?: any; ownerState: DrawerProps }>(({ ownerState }) => [
  {
    display: "flex",
    justifyContent: "center",
    height: 56,
    ...(ownerState.floating === true && {
      WebkitBoxAlign: "center",
      display: "flex",
      alignItems: "center",
      contain: "paint",
      position: "fixed",
      bottom: "-60px",
      height: "125px",
      left: 0,
      right: 0,
      zIndex: 200,
      paddingBottom: "60px",
      transition:
        "transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s, visibility 0.2s ease 0s",
    }),
    ...(ownerState.visible === true
      ? {
          transform: "translateY(0%)",
          visibility: "visible",
        }
      : {
          transform: "translateY(100%)",
          visibility: "hidden",
        }),
  },
])
