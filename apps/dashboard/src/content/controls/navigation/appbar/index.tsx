import { Button, useMediaQuery, useTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import { Drawer, useNavigationStore } from '@oxygen/design-system'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { IoHomeOutline, IoMoon, IoSunny } from 'react-icons/io5'
import { useWindowScroll } from 'react-use'

export const Appbar = () => {
  const router = useRouter()
  const theme = useTheme<any>()
  const { mode, setMode } = useColorScheme()
  const isMobileMediaQuery = useMediaQuery(theme.breakpoints.down('sm'))
  const { navbarHeight, isDrawerActive, changeIsDrawerActive } = useNavigationStore()

  const { x, y } = useWindowScroll()

  React.useEffect(() => {
    changeIsDrawerActive(y >= 20)
  }, [changeIsDrawerActive, x, y])

  //The home page is the only place the navbar is not active. Every other page is prett much is. If I ever make more pages like the home page ill add conditional check as an array.
  const isNavbarAllowedOnPage = !['/create', '/edit', '/sandbox'].some((key) =>
    router.pathname.includes(key)
  )
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // for server-side rendering
    // Read more on https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null
  }

  return (
    <span>
      {isNavbarAllowedOnPage && (
        <AppBar
          position="sticky"
          sx={(theme: any) => ({
            boxShadow: 'rgb(0 0 0 / 8%) 0 1px 0',
            backgroundColor: theme?.palette.background?.appbar,
            color: theme?.palette.text?.primary,
            height: navbarHeight,

            '& > .MuiToolbar-root': {
              justifyContent: 'center',
              display: 'inline-block',
            },
          })}
        >
          <Toolbar sx={{ height: '100%' }}>
            {!isMobileMediaQuery && (
              <Grid
                container
                columnSpacing={5}
                rowSpacing={0}
                columns={{ xs: 12, sm: 12, md: 12, xl: 16 }}
                sx={{ alignItems: 'center' }}
              >
                <Grid xl lg md>
                  {!isMobileMediaQuery && (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <Link href="/">
                        <Box
                          component="a"
                          sx={{
                            cursor: 'pointer',
                            height: '80px',
                            display: 'inline-flex',
                            position: 'relative',
                            verticalAlign: 'middle',
                            zIndex: 1,
                            alignItems: 'center',
                            color: 'inherit',
                            marginBottom: '5px',
                            '&:before': {
                              content: "''",
                              bottom: '8px',
                              top: '8px',
                              position: 'absolute',
                              left: '-8px',
                              right: '-8px',
                            },
                          }}
                        >

                        </Box>
                      </Link>
                    </Box>
                  )}
                </Grid>
                <Grid xs={12} sm md={4} lg={4} xl={3}>
                  <Box
                    sx={{
                      textAlign: 'center',
                    }}
                  ></Box>
                </Grid>
                <Grid xl lg md>
                  {!isMobileMediaQuery && (
                    <Box
                      component="nav"
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        height: '80px',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flex: 'auto',
                          justifyContent: 'flex-end',
                          marginRight: '8px',
                        }}
                      >
                        {/* <Box sx={{ display: 'inline-block' }}>
                          <Button
                            sx={{
                              fontSize: '14px',
                              lineHeight: '18px',
                              fontWeight: 600,
                              marginTop: '1px',
                            }}
                            href={`/`}
                          >
                            Explore Restaurants
                          </Button>
                        </Box> */}
                        <Box sx={{ display: 'inline-block' }}>
                          {mode !== null && mounted ? (
                            <Button
                              onClick={() => {
                                if (mode === 'light') {
                                  setMode('dark')
                                } else {
                                  setMode('light')
                                }
                              }}
                            >
                              {mode === 'dark' ? (
                                <IoSunny
                                  style={{
                                    display: 'block',
                                    height: '18px',
                                    width: '18px',
                                    fill: 'currentcolor',
                                  }}
                                />
                              ) : (
                                <IoMoon
                                  style={{
                                    display: 'block',
                                    height: '19px',
                                    width: '19px',
                                    fill: 'currentcolor',
                                  }}
                                />
                              )}
                            </Button>
                          ) : null}
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Grid>
              </Grid>
            )}
            {isMobileMediaQuery && (
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Link href="/">
                      <Box
                        component="a"
                        sx={{
                          cursor: 'pointer',
                          height: '80px',
                          display: 'inline-flex',
                          position: 'relative',
                          verticalAlign: 'middle',
                          zIndex: 1,
                          alignItems: 'center',
                          color: 'inherit',
                          marginBottom: '5px',
                          '&:before': {
                            content: "''",
                            bottom: '8px',
                            top: '8px',
                            position: 'absolute',
                            left: '-8px',
                            right: '-8px',
                          },
                        }}
                      >

                      </Box>
                    </Link>
                  </Box>
                }
              </Box>
            )}
          </Toolbar>
        </AppBar>
      )}
      <span>
        {isMobileMediaQuery && isNavbarAllowedOnPage && (
          <Drawer
            floating={true}
            visible={isDrawerActive}
            sx={(theme: any) => ({
              zIndex: 1000,
              boxShadow: 'rgb(0 0 0 / 8%) 0 1px 0',
              backgroundColor: theme?.palette?.background?.default,
              //color: theme?.palette.text?.primary,
              borderTop: `1px solid ${theme?.palette?.navigation?.border}`,
            })}
          >
            <BottomNavigationAction
              sx={{ paddingTop: 0, height: '100%' }}
              label="Home"
              icon={<IoHomeOutline style={{ width: '22px', height: '22px' }} />}
              onClick={() => {
                void router.push('/')
              }}
            />
            {mode !== null && mounted ? (
              <BottomNavigationAction
                sx={{ paddingTop: 0, height: '100%' }}
                label="Theme"
                icon={
                  mode === 'dark' ? (
                    <IoSunny style={{ width: '22px', height: '22px' }} />
                  ) : (
                    <IoMoon style={{ width: '22px', height: '22px' }} />
                  )
                }
                onClick={() => {
                  if (mode === 'light') {
                    setMode('dark')
                  } else {
                    setMode('light')
                  }
                }}
              />
            ) : null}
          </Drawer>
        )}
      </span>
    </span>
  )
}
