import { styled } from "@mui/system"

import { WarningProps } from "../types"

export const WarningRoot = styled("div", {
  name: "MuiWarning",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: WarningProps }>(({ ownerState }) => [
  {
    "@keyframes fade": {
      "0%": {
        opacity: 0,
      },
      "100%": {
        opacity: 1,
      },
    },
    animationDuration: "400ms",
    animationIterationCount: 1,
    animationFillMode: "both",
    animationName: "fade",
    marginTop: "10px",
    marginBottom: "10px",
    ...(ownerState.inline && {
      display: "inline",
    }),
    ...(ownerState.block && {
      display: "block",
    }),
  },
])

export const WarningSection = styled("div", {
  name: "MuiWarningSection",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: WarningProps }>(({ theme, ownerState }) => [
  {
    borderRadius: "12px",
    padding: "16px",
    width: "100%",
    display: "inline-flex",
    contain: "layout",
    color: theme?.palette.text?.primary,
    background: theme?.palette.background?.default,
    border: `1px solid ${theme?.palette.background?.border}`,
    ...(ownerState.borderless && {
      border: "1px solid transparent",
      borderRadius: 8,
      boxShadow: `${theme?.palette.background?.border} 0px 0px 0px 1px inset`,
    }),
  },
])

export const WarningIcon = styled("div", {
  name: "MuiWarningIcon",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: WarningProps }>(({ theme, ownerState }) => [
  {
    WebkitBoxPack: "center",
    WebkitBoxAlign: "center",
    width: 44,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    color: theme?.palette.error.contrastText,
    background: theme?.palette.background?.default,
    ...(ownerState.variant === "error" && {
      background: `linear-gradient(
        to right,
        ${theme?.palette.error.main} 0%,
        ${theme?.palette.error.main} 50%,
        ${theme?.palette.error.light} 100%
      )`,
    }),
    ...(ownerState.variant === "success" && {
      background: `linear-gradient(
        to right,
        ${theme?.palette.success.main} 0%,
        ${theme?.palette.success.main} 50%,
        ${theme?.palette.success.light} 100%
      )`,
    }),
    ...(ownerState.variant === "warning" && {
      background: `linear-gradient(
        to right,
        ${theme?.palette.warning.main} 0%,
        ${theme?.palette.warning.main} 50%,
        ${theme?.palette.warning.light} 100%
      )`,
    }),
  },
])

export const WarningTitle = styled("div", {
  name: "MuiWarningTitle",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: WarningProps }>(({ theme }) => [
  {
    lineHeight: "inherit",
    margin: 0,
    padding: 0,
    fontWeight: "600",
    color: theme?.palette.text?.primary,
  },
])

export const WarningDescription = styled("div", {
  name: "MuiWarningDescription",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: WarningProps }>(({ theme }) => [
  {
    lineHeight: "inherit",
    margin: 0,
    padding: 0,
    fontWeight: "500",
    color: theme?.palette.text?.primary,
  },
])
