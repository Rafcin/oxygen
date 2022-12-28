import { Box } from '@mui/material'
import { IFooterConfig } from 'src/config/footer'
import { FooterColumns } from '../footer-columns'
import { FooterNavigation } from '../footer-navigation'

export const InlineFooter = ({
  isFooterAllowedOnPage,
  footerConfig,
}: {
  isFooterAllowedOnPage: Boolean
  footerConfig: IFooterConfig
}) => {
  return (
    <span>
      {isFooterAllowedOnPage && (
        <Box
          sx={(theme: any) => ({
            backgroundColor: theme?.palette?.footer?.background,
            borderTop: `1px solid ${theme?.palette?.footer?.border}`,
          })}
        >
          <FooterColumns footerConfig={footerConfig} />
          <FooterNavigation isFloating={false} footerConfig={footerConfig} />
        </Box>
      )}
    </span>
  )
}
