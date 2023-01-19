import { Paper, useTheme } from '@mui/material'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import React from 'react'
import { useWindowScroll } from 'react-use'
import { IFooterConfig } from 'src/config/footer'

import { useNavigationStore } from '../../../context/navigation'
import { Drawer } from '../../drawer'
import { ModalClose } from '../../modal/close'
import { FooterColumns } from '../footer-columns'
import { FooterNavigation } from '../footer-navigation'

export const Footer = ({
  isFooterAllowedOnPage,
  footerConfig,
}: {
  isFooterAllowedOnPage: Boolean
  footerConfig: IFooterConfig
}) => {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme<any>()
  const { isFooterOpen, changeFooterOpen } = useNavigationStore()
  const { x, y } = useWindowScroll()
  React.useEffect(() => {
    changeFooterOpen(y <= 20)
  }, [changeFooterOpen, x, y])

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
              '& > .MuiDrawer-paper': {
                borderTopRightRadius: '12px',
                borderTopLeftRadius: '12px',
                padding: '40px',
                paddingLeft: '0px',
                paddingRight: '0px',
                overflow: 'hidden',
                backgroundColor: theme?.palette.background?.appbar,
                color: theme?.palette.text?.primary,
                backgroundImage: theme?.overlays[4],
              },
            })}
          >
            <ModalClose onClick={() => setOpen(false)} />
            <FooterColumns footerConfig={footerConfig} />
          </Paper>

          <Drawer
            floating={true}
            visible={isFooterOpen}
            sx={{
              zIndex: 1000,
              boxShadow: 'rgb(0 0 0 / 8%) 0 1px 0',
              backgroundColor: theme?.palette.background?.appbar,
              backgroundImage: theme?.overlays[4],
              color: theme?.palette.text?.primary,
              height: '110px',
              borderTop: `1px solid ${theme?.palette?.footer?.border}`,
            }}
          >
            <FooterNavigation isFloating={true} footerConfig={footerConfig} />
          </Drawer>
        </div>
      )}
    </span>
  )
}
