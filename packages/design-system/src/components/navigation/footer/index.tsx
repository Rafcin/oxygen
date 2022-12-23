import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import React from 'react'
import { useWindowScroll } from 'react-use'

import { default as Grid } from '@mui/material/Unstable_Grid2'
import { ModalClose } from '../../modal/close'
import { useNavigationStore } from '../../../context/navigation'
import { FooterConfig, IColumnConfig, ILinkConfig } from '../../../config/footer'
import { Drawer } from '../../drawer'

export const Footer = ({
  isFooterAllowedOnPage,
}: {
  isFooterAllowedOnPage: Boolean
}) => {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme<any>()
  const isMobileMediaQuery = useMediaQuery(theme.breakpoints.up('sm'))
  const { isFooterOpen, changeFooterOpen } = useNavigationStore()
  const { x, y } = useWindowScroll()
  React.useEffect(() => {
    changeFooterOpen(y <= 20)
  }, [changeFooterOpen, x, y])

  return (
    <span>
      {isFooterAllowedOnPage && (
        <div>
          <SwipeableDrawer
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
                backgroundColor: theme?.palette.background?.default,
                color: theme?.palette.text?.primary,
              },
            })}
          >
            <ModalClose onClick={() => setOpen(false)} />
            <Container
              sx={(theme: any) => ({
                [theme.breakpoints.down('sm')]: {
                  overflowY: 'scroll',
                  margin: '20px',
                  width: '100%',
                  maxWidth: '100%',
                },
              })}
              maxWidth="md"
            >
              <Box
                sx={{
                  [theme.breakpoints.up('lg')]: {
                    paddingRight: '80px',
                    paddingLeft: '80px',
                  },
                  [theme.breakpoints.up('md')]: {
                    paddingRight: '48px',
                    paddingLeft: '48px',
                  },
                  marginTop: '16px',
                }}
              >
                <Grid container spacing={2} columns={16}>
                  {FooterConfig.columns.map((column: IColumnConfig) => (
                    <Grid xs={16} sm key={column.column}>
                      <Typography
                        component="div"
                        sx={(theme: any) => ({
                          fontWeight: 600,
                          color: theme?.palette.text?.primary,
                          fontSize: '16px',
                          lineHeight: '18px',
                        })}
                      >
                        <Box
                          sx={{
                            marginBottom: '15px',
                          }}
                        >
                          {column.column}
                        </Box>
                      </Typography>
                      <Stack
                        direction="column"
                        justifyContent="stretch"
                        alignItems="flex-start"
                        spacing={2}
                      >
                        {column.links.map((link: ILinkConfig) => (
                          <Typography
                            component="div"
                            key={link.name}
                            sx={() => ({
                              fontWeight: 100,
                              color: 'inherit',
                              fontSize: '14px',
                              lineHeight: '18px',
                              paddingBottom: '8px',
                            })}
                          >
                            <a href={link.link} key={link.name}>
                              {link.name}
                            </a>
                          </Typography>
                        ))}
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </SwipeableDrawer>
          <Drawer
            floating={true}
            visible={isFooterOpen}
            sx={{
              zIndex: 1000,
              boxShadow: 'rgb(0 0 0 / 8%) 0 1px 0',
              background: theme?.palette.background?.default,
              color: theme?.palette.text?.primary,
              height: '110px',
              borderTop: `1px solid ${theme?.palette?.footer?.border}`,
            }}
          >
            <Container maxWidth="xl">
              <Typography
                component="div"
                sx={(theme: any) => ({
                  ...theme.typography.small,
                  fontWeight: 500,
                  color: 'inherit',
                })}
              >
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    divider={<div>·</div>}
                    alignItems="center"
                  >
                    <Box sx={{ paddingRight: '5px' }}>{FooterConfig.title}</Box>
                    {isMobileMediaQuery && (
                      <Box sx={{ paddingLeft: '5px', paddingRight: '5px' }}>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={FooterConfig.privacy}
                        >
                          Privacy
                        </a>
                      </Box>
                    )}
                    {isMobileMediaQuery && (
                      <Box sx={{ paddingLeft: '5px' }}>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={FooterConfig.terms}
                        >
                          Terms
                        </a>
                      </Box>
                    )}
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Button
                      endIcon={
                        <Box
                          component="svg"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          sx={{
                            display: 'block',
                            fill: 'none',
                            height: 16,
                            width: 16,
                            stroke: 'currentcolor',
                            strokeWidth: 4,
                            overflow: 'visible',
                          }}
                        >
                          <g fill="none">
                            <path d="m4 20 11.2928932-11.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l11.2928932 11.29289322"></path>
                          </g>
                        </Box>
                      }
                      sx={{
                        color: 'inherit',
                        cursor: 'pointer',
                        fontSize: 'inherit',
                        lineHeight: 'inherit',
                        textTransform: 'none',
                        margin: 0,
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Support & Resources
                    </Button>
                  </Stack>
                </Box>
              </Typography>
            </Container>
          </Drawer>
        </div>
      )}
    </span>
  )
}
