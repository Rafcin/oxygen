import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { IColumnConfig, IFooterConfig, ILinkConfig } from '../../../config/footer'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { ModalClose } from '../../modal/close'
import React, { useState } from 'react'
import { default as Grid } from '@mui/material/Unstable_Grid2'

export const FooterNavigation = React.memo(
  ({
    isFloating,
    footerConfig,
    isInline,
  }: {
    isFloating: boolean
    footerConfig: IFooterConfig
    isInline?: boolean
  }) => {
    const theme = useTheme<any>()
    const isMobileMediaQuery = useMediaQuery(theme.breakpoints.up('sm'))
    const [open, setOpen] = useState(false)
    return (
      <Box
        sx={(theme: any) => ({
          width: '100%',
          paddingTop: '8px',
          paddingBottom: '8px',
        })}
      >
        {isFloating && (
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
                backgroundImage: theme?.overlays[4],
                color: theme?.palette.text?.primary,
              },
            })}
          >
            <ModalClose onClick={() => setOpen(false)} />
            <Container
              sx={(theme: any) => ({
                background: 'transparent',
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
                  {footerConfig.columns.map((column: IColumnConfig) => (
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
        )}
        <Container
          sx={(theme: any) => ({
            borderTop: `1px solid ${theme?.palette?.footer?.border}`,
            paddingTop: isInline ? '0px' : '8px',
            paddingBottom: isInline ? '0px' : '8px',
          })}
        >
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
                <Box sx={{ paddingRight: '5px' }}>{footerConfig.title}</Box>
                {isMobileMediaQuery && (
                  <Box sx={{ paddingLeft: '5px', paddingRight: '5px' }}>
                    <Box
                      component="a"
                      sx={{
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                      target="_blank"
                      rel="noreferrer"
                      href={footerConfig.privacy}
                    >
                      Privacy
                    </Box>
                  </Box>
                )}
                {isMobileMediaQuery && (
                  <Box sx={{ paddingLeft: '5px' }}>
                    <Box
                      component="a"
                      sx={{
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                      target="_blank"
                      rel="noreferrer"
                      href={footerConfig.sitemap}
                    >
                      Sitemap
                    </Box>
                  </Box>
                )}
                {isMobileMediaQuery && (
                  <Box sx={{ paddingLeft: '5px' }}>
                    <Box
                      component="a"
                      sx={{
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                      target="_blank"
                      rel="noreferrer"
                      href={footerConfig.terms}
                    >
                      Terms
                    </Box>
                  </Box>
                )}
                {isMobileMediaQuery && (
                  <Box sx={{ paddingLeft: '5px' }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box
                        component="a"
                        sx={{
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                        target="_blank"
                        rel="noreferrer"
                        href={footerConfig.yourprivacy}
                      >
                        Your Privacy Choices
                      </Box>
                      <Box
                        component="svg"
                        fill="none"
                        sx={{ width: '26px', height: '12px' }}
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="25"
                          height="11"
                          rx="5.5"
                          fill={theme?.palette.primary?.contrastText}
                        ></rect>
                        <path
                          d="M14 1h7a5 5 0 010 10H11l3-10z"
                          fill={theme?.palette.primary?.main}
                        ></path>
                        <path
                          d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                          stroke={theme?.palette.primary?.main}
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                          stroke={theme?.palette.primary?.contrastText}
                          stroke-linecap="round"
                        ></path>
                        <rect
                          x="0.5"
                          y="0.5"
                          width="25"
                          height="11"
                          rx="5.5"
                          stroke={theme?.palette.primary?.contrastText}
                        ></rect>
                      </Box>
                    </Stack>
                  </Box>
                )}
              </Stack>
              <Stack direction="row" spacing={1}>
                {isMobileMediaQuery && !isFloating && (
                  <Button
                    href={footerConfig.facebook}
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
                  >
                    <FaFacebook style={{ width: '18px', height: '18px' }} />
                  </Button>
                )}
                {isMobileMediaQuery && !isFloating && (
                  <Button
                    href={footerConfig.instagram}
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
                  >
                    <FaInstagram style={{ width: '18px', height: '18px' }} />
                  </Button>
                )}
                {isMobileMediaQuery && !isFloating && (
                  <Button
                    href={footerConfig.facebook}
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
                  >
                    <Button
                      href={footerConfig.twitter}
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
                    >
                      <FaTwitter style={{ width: '18px', height: '18px' }} />
                    </Button>
                  </Button>
                )}
                {isFloating && (
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
                )}
              </Stack>
            </Box>
          </Typography>
        </Container>
      </Box>
    )
  }
)
