import { styled } from "@mui/system";

import { UploadProps } from "../types";

export const UploadRoot = styled("div", {
  name: "MuiUpload",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: UploadProps }>(({ theme }) => [
  {
    verticalAlign: "top",
    width: "100%",
    height: "100%",
    position: "relative",
    overflowX: "hidden",
    color: theme?.vars.palette.text.primary,
  },
]);

export const UploadContent = styled("div", {
  name: "MuiUpload-Content",
  overridesResolver: (props, styles) => styles.root,
})<{
  theme?: any;
  ownerState?: any;
  isFocused: boolean;
  isDragAccept: boolean;
  isDragReject: boolean;
}>(({ theme }) => [
  {
    [theme?.breakpoints.up("sm")]: {
      padding: "80px",
    },
    position: "absolute",
    display: "flex",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    paddingLeft: "24px",
    paddingRight: "24px",
    color: theme?.vars.palette.text.primary,
  },
]);

export const UploadStyle = styled("div", {
  name: "MuiUpload-Style",
  overridesResolver: (props, styles) => styles.root,
})<{
  theme?: any;
  ownerState?: any;
  isFocused: boolean;
  isDragAccept: boolean;
  isDragReject: boolean;
}>(({ theme, isDragAccept, isDragReject }) => [
  {
    position: "absolute",
    display: "flex",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    border: `1px dashed ${theme?.vars.palette.inputs?.inputBorder}`,
    ...(isDragReject && {
      border: `1px dashed ${theme?.vars.palette.error.main}`,
    }),
    ...(isDragAccept && {
      border: `1px solid ${theme?.vars.palette.inputs?.inputFocusedBorder}`,
      backgroundColor: theme?.vars.palette.primary.light,
    }),
    color: theme?.vars.palette.text.primary,
  },
]);

export const UploadCenter = styled("div", {
  name: "MuiUpload-Center",
  overridesResolver: (props, styles) => styles.root,
})<{
  theme?: any;
  ownerState?: any;
  isFocused: boolean;
  isDragAccept: boolean;
  isDragReject: boolean;
}>(({ theme }) => [
  {
    [theme?.breakpoints.up("sm")]: {
      WebkitBoxPack: "center",
      justifyContent: "center",
    },
    WebkitBoxAlign: "center",
    WebkitBoxDirection: "normal",
    WebkitBoxOrient: "vertical",
    color: theme?.vars.palette.text.primary,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: "auto",
    alignItems: "center",
  },
]);
