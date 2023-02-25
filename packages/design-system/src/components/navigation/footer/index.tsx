import { Paper } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import React from "react";
import { useWindowScroll } from "react-use";
import { IFooterConfig } from "../../../config";

import { useNavigationStore } from "../../../context/navigation";
import { Drawer } from "../../drawer";
import { ModalClose } from "../../modal/close";
import { FooterColumns } from "../footer-columns";
import { FooterNavigation } from "../footer-navigation";

export const Footer = ({
  isFooterAllowedOnPage,
  footerConfig,
}: {
  isFooterAllowedOnPage: Boolean;
  footerConfig: IFooterConfig;
}) => {
  const [open, setOpen] = React.useState(false);
  const { isFooterOpen, changeFooterOpen } = useNavigationStore();
  const { x, y } = useWindowScroll();
  React.useEffect(() => {
    changeFooterOpen(y <= 20);
  }, [changeFooterOpen, x, y]);

  return (
    <span>
      {isFooterAllowedOnPage && (
        <div>
          <Paper
            component={SwipeableDrawer}
            anchor="bottom"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            sx={(theme: any) => ({
              "& > .MuiDrawer-paper": {
                borderTopRightRadius: "12px",
                borderTopLeftRadius: "12px",
                padding: "40px",
                paddingLeft: "0px",
                paddingRight: "0px",
                overflow: "hidden",
                backgroundColor: theme?.vars.palette.background?.appbar,
                color: theme?.vars.palette.text?.primary,
                backgroundImage: theme?.vars.overlays[4],
              },
            })}
          >
            <ModalClose onClick={() => setOpen(false)} />
            <FooterColumns footerConfig={footerConfig} />
          </Paper>

          <Drawer
            floating={true}
            visible={isFooterOpen}
            sx={(theme: any) => ({
              zIndex: 1000,
              boxShadow: "rgb(0 0 0 / 8%) 0 1px 0",
              backgroundColor: theme?.vars.palette.background?.appbar,
              backgroundImage: theme?.vars.overlays[4],
              color: theme?.vars.palette.text?.primary,
              height: "110px",
              borderTop: `1px solid ${theme?.vars.palette?.footer?.border}`,
            })}
          >
            <FooterNavigation isFloating={true} footerConfig={footerConfig} />
          </Drawer>
        </div>
      )}
    </span>
  );
};
