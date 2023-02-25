import { styled } from "@mui/system";

import { ModalFooterProps } from "../types";

export const ModalFooterRoot = styled("div", {
  name: "ModalFooterRoot",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState: ModalFooterProps }>(({ theme }) => [
  {
    WebkitBoxPack: "justify",
    WebkitBoxAlign: "center",
    display: "flex",
    flex: "0 0 auto",
    borderTop: `1px solid ${theme?.vars.palette.navigation.border}`,
    padding: "16px 24px",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 16,
    lineHeight: 20,
  },
]);
