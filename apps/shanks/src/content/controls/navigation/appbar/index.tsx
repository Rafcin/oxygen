import { avoidpaths } from "@/utils/navigation";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import { useColorScheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { default as Grid } from "@mui/material/Unstable_Grid2";
import {
  Drawer,
  useNavigationStore,
  useWindowScroll,
  Container,
} from "@oxygen/design-system";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoHomeOutline, IoMoon, IoSunny } from "react-icons/io5";

export const Appbar = () => {
  const router = useRouter();
  const theme = useTheme<any>();
  const { mode, setMode } = useColorScheme();
  const isMobileMediaQuery = useMediaQuery(theme?.breakpoints.down("sm"));
  const { navbarHeight, isDrawerActive, changeIsDrawerActive } =
    useNavigationStore();

  const { x, y, isTopOfPage, isBottomOfPage } = useWindowScroll();

  React.useEffect(() => {
    changeIsDrawerActive(y >= 20);
    if (isBottomOfPage) changeIsDrawerActive(false);
  }, [changeIsDrawerActive, x, y, isTopOfPage, isBottomOfPage]);

  //The home page is the only place the navbar is not active. Every other page is prett much is. If I ever make more pages like the home page ill add conditional check as an array.
  const isNavbarAllowedOnPage = !avoidpaths.some((key) =>
    router.pathname.includes(key)
  );
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // for server-side rendering
    // Read more on https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null;
  }

  return (
    <span>
      {isNavbarAllowedOnPage && (
        <AppBar
          position="sticky"
          sx={(theme: any) => ({
            boxShadow: "rgb(0 0 0 / 8%) 0 1px 0",
            backgroundColor: theme?.vars.palette.background?.appbar,
            color: theme?.vars.palette.text?.primary,
            height: navbarHeight,
            "& .MuiToolbar-root": {
              padding: 0,
            },
          })}
        >
          <Toolbar sx={{ height: "100%", padding: 0 }}>
            <Container>
              <Grid
                container
                columnSpacing={0}
                rowSpacing={0}
                columns={{ xs: 12, sm: 12, md: 12, xl: 16 }}
                sx={{ alignItems: "center", width: "100%" }}
              >
                <Grid xl lg md>
                  {!isMobileMediaQuery && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Box
                        component={Link}
                        href="/"
                        sx={{
                          outline: "none",
                          alignItems: "center",
                          display: "inline-flex",
                          height: 80,
                          position: "relative",
                          verticalAlign: "middle",
                          zIndex: 1,
                          transition: "color 250ms ease",
                          "&:before": {
                            borderRadius: "var(--i-g-gvoq)",
                            left: "-8px",
                            right: "-8px",
                            bottom: 8,
                            content: "''",
                            position: "absolute",
                            top: 8,
                          },
                        }}
                      ></Box>
                    </Box>
                  )}
                </Grid>
                <Grid xs={12} sm md={4} lg={4} xl={3}>
                  <Box
                    sx={{
                      textAlign: "center",
                    }}
                  ></Box>
                </Grid>
                <Grid xl lg md>
                  {!isMobileMediaQuery && (
                    <Box
                      component="nav"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        height: "80px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flex: "auto",
                          justifyContent: "flex-end",
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
                        <Box sx={{ display: "inline-block" }}>
                          {mode !== null && mounted ? (
                            <Button
                              onClick={() => {
                                if (mode === "light") {
                                  setMode("dark");
                                } else {
                                  setMode("light");
                                }
                              }}
                            >
                              {mode === "dark" ? (
                                <IoSunny
                                  style={{
                                    display: "block",
                                    height: "18px",
                                    width: "18px",
                                    fill: "currentcolor",
                                  }}
                                />
                              ) : (
                                <IoMoon
                                  style={{
                                    display: "block",
                                    height: "19px",
                                    width: "19px",
                                    fill: "currentcolor",
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
            </Container>
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
              boxShadow: "rgb(0 0 0 / 8%) 0 1px 0",
              backgroundColor: theme?.vars.palette?.background?.default,
              //color: theme?.vars.palette.text?.primary,
              borderTop: `1px solid ${theme?.vars.palette?.navigation?.border}`,
            })}
          >
            <BottomNavigationAction
              sx={{ paddingTop: 0, height: "100%" }}
              label="Home"
              icon={<IoHomeOutline style={{ width: "22px", height: "22px" }} />}
              onClick={() => {
                void router.push("/");
              }}
            />
            {mode !== null && mounted ? (
              <BottomNavigationAction
                sx={{ paddingTop: 0, height: "100%" }}
                label="Theme"
                icon={
                  mode === "dark" ? (
                    <IoSunny style={{ width: "22px", height: "22px" }} />
                  ) : (
                    <IoMoon style={{ width: "22px", height: "22px" }} />
                  )
                }
                onClick={() => {
                  if (mode === "light") {
                    setMode("dark");
                  } else {
                    setMode("light");
                  }
                }}
              />
            ) : null}
          </Drawer>
        )}
      </span>
    </span>
  );
};
