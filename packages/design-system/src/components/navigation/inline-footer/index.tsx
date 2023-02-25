import { Box } from "@mui/material";
import { IFooterConfig } from "../../../config";
import { FooterColumns } from "../footer-columns";
import { FooterNavigation } from "../footer-navigation";

export const InlineFooter = ({
  isFooterAllowedOnPage,
  footerConfig,
}: {
  isFooterAllowedOnPage: Boolean;
  footerConfig: IFooterConfig;
}) => {
  return (
    <span>
      {isFooterAllowedOnPage && (
        <Box
          sx={(theme: any) => ({
            backgroundColor: theme?.vars.palette?.footer?.background,
            backgroundImage: theme?.vars.overlays[4],
            borderTop: `1px solid ${theme?.vars.palette?.footer?.border}`,
          })}
        >
          <FooterColumns footerConfig={footerConfig} />
          <FooterNavigation
            isFloating={false}
            footerConfig={footerConfig}
            isInline={true}
          />
        </Box>
      )}
    </span>
  );
};
