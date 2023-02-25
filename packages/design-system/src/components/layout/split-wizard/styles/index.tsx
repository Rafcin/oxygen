import { styled } from "@mui/system";
import { SplitWizardProps } from "../types";

export const SplitWizardRoot = styled("div", {
  name: "MuiSplitWizard",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState?: SplitWizardProps }>(({ ownerState }) => {
  return {};
});

export const Background = styled("div", {
  name: "Background",
})<any>(({ theme }) => ({
  [theme?.breakpoints.up("sm")]: {
    background:
      "url(https://fox715a163cb7144d2e9374f106e5a879f8160955-dev.s3.us-west-2.amazonaws.com/public/banners-and-more/haskaluth.png) no-repeat",
    backgroundSize: "100% 100%",
  },
  position: "absolute",
  overflow: "hidden",
  height: "100%",
  width: "100%",
  zIndex: "-1",
  background:
    "url(https://fox715a163cb7144d2e9374f106e5a879f8160955-dev.s3.us-west-2.amazonaws.com/public/banners-and-more/haskaluth.png) no-repeat",
  backgroundSize: "100% 100%",
}));

export const Main = styled("main", {
  name: "Main",
})<any>(({ theme }) => ({
  [theme?.breakpoints.up("sm")]: {
    WebkitBoxDirection: "normal",
    WebkitBoxOrient: "horizontal",
    WebkitFlexDirection: "row",
    MsFlexDirection: "row",
    flexDirection: "row",
  },
  WebkitBoxDirection: "normal",
  WebkitBoxOrient: "vertical",
  opacity: "1",
  width: "100%",
  height: "calc(var(--vh, 1vh) * 100)",
  WebkitTransition: "opacity 600ms",
  MozTransition: "opacity 600ms",
  transition: "opacity 600ms",
  display: "flex",
  WebkitFlexDirection: "column",
  MsFlexDirection: "column",
  flexDirection: "column",
}));

export const Info = styled("div", {
  name: "Info",
})<any>(({ theme }) => ({
  [theme?.breakpoints.up("sm")]: {
    WebkitBoxPack: "center",
    MsFlexPack: "center",
    WebkitBoxAlign: "unset",
    MsFlexAlign: "unset",
    WebkitBoxDirection: "normal",
    WebkitBoxOrient: "vertical",
    WebkitFlexDirection: "column",
    MsFlexDirection: "column",
    flexDirection: "column",
    width: "50%",
    height: "100vh",
    maxHeight: "100%",
    position: "fixed",
    WebkitAlignItems: "unset",
    alignItems: "unset",
    WebkitJustifyContent: "center",
    justifyContent: "center",
  },
  WebkitBoxAlign: "end",
  MsFlexAlign: "end",
  WebkitBoxFlex: "1",
  MsFlexPositive: "1",
  display: "flex",
  width: "100%",
  WebkitFlexGrow: "1",
  flexGrow: "1",
  position: "relative",
  WebkitAlignItems: "flex-end",
  alignItems: "flex-end",
  minHeight: "30%",
}));

export const Content = styled("div", {
  name: "Content",
})<any>(({ theme }) => ({
  [theme?.breakpoints.up("sm")]: {
    zIndex: "0",
    width: "50%",
    overflowY: "auto",
    borderRadius: "0px",
    position: "inherit",
    height: "100%",
    minHeight: "unset",
    maxHeight: "unset",
    marginLeft: "50vw",
    WebkitFlex: "50%",
    MsFlex: "1 1 50%",
    flex: "50%",
  },
  MsFlexItemAlign: "end",
  width: "100%",
  borderRadius: "12px 12px 0px 0px",
  WebkitAlignSelf: "flex-end",
  alignSelf: "flex-end",
  overflowY: "visible",
  display: "flex",
  backgroundColor: theme?.vars.palette?.background?.default,
  color: theme?.vars.palette.text.primary,
  height: "auto",
  minHeight: "max(50%, 250px)",
  maxHeight: "75%",
  zIndex: "2",
}));

export const ContentBody = styled("div", {
  name: "ContentBody",
})<any>(({ theme }) => ({
  [theme?.breakpoints.up("sm")]: {
    overflowY: "auto",
    marginTop: "88px",
    paddingLeft: "48px",
    paddingRight: "48px",
    //borderTop: `1px solid ${theme?.vars.palette.background.border}`,
    marginBottom: "82px",
    height: "calc(100vh - calc(88px + 82px))",
  },
  WebkitBoxDirection: "normal",
  WebkitBoxOrient: "vertical",
  backgroundColor: "inherit",
  borderRadius: "inherit",
  height: "calc(100% - 82px)",
  width: "100%",
  display: "flex",
  WebkitFlexDirection: "column",
  MsFlexDirection: "column",
  flexDirection: "column",
  overflowY: "visible",
  WebkitOverflowScrolling: "touch",
  scrollbarWidth: "none",
  zIndex: "inherit",
  paddingLeft: "24px",
  paddingRight: "24px",
}));

export const ContentMargin = styled("div", {
  name: "ContentMargin",
})<any>(() => ({
  marginTop: "auto",
  marginBottom: "auto",
}));

export const Footer = styled("div", {
  name: "Footer",
})<any>(({ theme }) => ({
  [theme?.breakpoints.up("sm")]: {
    width: "50vw",
  },
  backgroundColor: "inherit",
  bottom: 0,
  position: "fixed",
  width: "100vw",
  zIndex: 2,
}));

export const Header = styled("div", {
  name: "Header",
})<any>(({ theme }) => ({
  [theme?.breakpoints.up("sm")]: {
    zIndex: "2",
    width: "50vw",
    left: "50%",
  },
  top: "0px",
  right: "0px",
  position: "fixed",
  width: "100vw",
}));
