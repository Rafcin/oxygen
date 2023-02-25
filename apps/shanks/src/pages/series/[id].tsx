import { StreamCard } from "@/content/ui/cards/stream";
import { api } from "@/trpc/api";
import { chunkEpisodes, convertStreamType } from "@/utils/streams";
import { Box, Button, capitalize, Chip, Theme, useTheme } from "@mui/material";
import { border } from "@mui/system";
import {
  Grid,
  OxygenTheme,
  Container,
  AspectRatio,
  CardContainer,
  CardCover,
  CardContent,
  useWindowScroll,
  SkeletonWrapper,
  Loading,
} from "@oxygen/design-system";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import LinearProgress from "@mui/material/LinearProgress";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  if (!id || typeof id !== "string") {
    return {
      notFound: true,
    };
  }

  return {
    props: { id },
  };
};

const Series: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id }) => {
  const theme = useTheme();
  const details = api.stream.details.useQuery(
    {
      id: id,
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  const meta = api.stream.meta.useQuery(
    {
      id: details.data?.alID,
    },
    {
      enabled: Boolean(details.isSuccess && details.data?.alID),
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  const { y } = useWindowScroll();
  const [op, sop] = useState(1);
  const [selected, setSelected] = useState(0);
  const [episodes, setEpisodes] = useState<Array<Array<any>> | Array<any>>([]);
  const [season, setSeason] = useState<number>(0);
  useEffect(() => {
    const maxOpacity = 0.85;
    const minOpacity = 0.5;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    const opacityRange = maxOpacity - minOpacity;
    const scrollRange = scrollHeight - windowHeight;
    const opacityStep = opacityRange / scrollRange;

    const newOpacity = maxOpacity - y * opacityStep;
    sop(newOpacity < minOpacity ? minOpacity : newOpacity);
  }, [y]);
  useEffect(() => {
    setEpisodes(chunkEpisodes(meta.data?.episodes, 30));
  }, [meta.isSuccess && meta.data?.episodes]);
  return (
    <Box>
      <Box
        sx={(theme) => ({
          overflowY: "hidden",
          display: "block",
          flexGrow: 1,
          flexShrink: 0,
          minHeight: "calc(100vh - 250px)",
          overflowX: "hidden",
          padding: "0 calc(3.5vw + 24px)",
          position: "relative",
          [theme?.breakpoints.down("sm")]: {
            justifyContent: "center",
          },
        })}
      >
        <Box>
          <Box
            component="article"
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "112px",
              position: "relative",
            }}
          >
            {/** Stream Background */}
            <Box
              sx={{
                opacity: op,
                left: "0px",
                position: "fixed",
                right: "0px",
                top: "0px",
                transition: "opacity 200ms ease 0s",
                width: "100%",
                zIndex: -1,
              }}
            >
              {meta.isSuccess && (
                <AspectRatio ratio="1.78">
                  <Box
                    component="img"
                    sx={{
                      width: "100vw",
                    }}
                    src={meta.data?.cover}
                  />
                </AspectRatio>
              )}
              <Box
                sx={(theme: any) => ({
                  backgroundImage: `radial-gradient(farthest-side at 73% 21%, transparent, ${theme?.vars.palette.background.default})`,
                  position: "absolute",
                  inset: 0,
                })}
              />
            </Box>
            {/** Stream Logo */}
            <Box
              sx={(theme: any) => ({
                opacity: 1,
                zIndex: 1,
                alignItems: "flex-end",
                display: "flex",
                WebkitBoxPack: "start",
                justifyContent: "flex-start",
                margin: "0px auto",
                minHeight: "170px",
                paddingTop: "56px",
                transition: "opacity 200ms ease 0s",
                width: "100%",
                [theme?.breakpoints.down("sm")]: {
                  justifyContent: "center",
                  alignItems: "center",
                },
              })}
            >
              {details.isLoading && !(details.isError || details.isSuccess) && (
                <Loading />
              )}
              {details.isSuccess && (
                <Box
                  component="h1"
                  sx={{
                    fontSize: "4rem",
                    margin: 0,
                  }}
                >
                  {details.data?.title}
                </Box>
              )}
            </Box>
            {/** Captions & Stream Date */}
            <Box
              sx={{
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  maxWidth: "874px",
                }}
              >
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    minHeight: "20px",
                  }}
                >
                  <Box
                    sx={(theme: any) => ({
                      margin: 0,
                      fontSize: "15px",
                      letterSpacing: "-.1px",
                      lineHeight: "1.6",
                      color: theme?.vars.palette.text.secondary,
                    })}
                  >
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        margin: "0px 0px 5px",
                      }}
                    >
                      {meta.isLoading && !(meta.isError || meta.isSuccess) && (
                        <Loading />
                      )}
                      {meta.isSuccess && (
                        <Box>
                          {meta.data?.genres.map(
                            (genre: string, index: number) => (
                              <Chip
                                key={genre}
                                sx={(theme: any) => ({
                                  backgroundColor:
                                    theme?.vars.palette?.background?.inverse,
                                  color: theme?.vars.palette.text?.contrastText,
                                  margin: 0,
                                  borderRadius: "20px",
                                  padding: "4px",
                                  border: "none",
                                  "&:hover": {
                                    border: "none",
                                    textDecoration: "underline",
                                  },
                                  fontWeight: 500,
                                  marginBottom: "5px",
                                  marginRight:
                                    index !== meta.data?.genres.length
                                      ? "5px"
                                      : "0px",
                                })}
                                label={capitalize(genre)}
                              />
                            )
                          )}
                        </Box>
                      )}
                    </Box>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        margin: "0px 0px 5px",
                      }}
                    >
                      {meta.isLoading && !(meta.isError || meta.isSuccess) && (
                        <Loading />
                      )}
                      {meta.isSuccess && (
                        <Box>
                          {meta.data?.studios.map(
                            (studio: string, index: number) => (
                              <Chip
                                key={studio}
                                sx={(theme: any) => ({
                                  backgroundColor:
                                    theme?.vars.palette?.background?.inverse,
                                  color: theme?.vars.palette.text?.contrastText,
                                  margin: 0,
                                  borderRadius: "20px",
                                  padding: "4px",
                                  border: "none",
                                  "&:hover": {
                                    border: "none",
                                    textDecoration: "underline",
                                  },
                                  fontWeight: 500,
                                  marginBottom: "5px",
                                  marginRight:
                                    index !== meta.data?.genres.length
                                      ? "5px"
                                      : "0px",
                                })}
                                label={studio}
                              />
                            )
                          )}
                        </Box>
                      )}
                    </Box>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        margin: "0px 0px 5px",
                      }}
                    >
                      {meta.isLoading && !(meta.isError || meta.isSuccess) && (
                        <Loading />
                      )}
                      {meta.isSuccess && (
                        <Box>
                          {meta.data?.releaseDate} -{" "}
                          {meta.data?.endDate.year
                            ? meta.data?.endDate.year
                            : new Date().getFullYear()}{" "}
                          • Total Episodes: {meta.data?.totalEpisodes}
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/** Play/Continue */}
            <Box
              sx={(theme: any) => ({
                alignItems: "center",
                display: "flex",
                flexFlow: "row wrap",
                minHeight: "56px",
                width: "200px",
                justifyContent: "center",
                [theme?.breakpoints.down("sm")]: {
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                },
              })}
            >
              <Button
                startIcon={<FaPlay />}
                sx={(theme: any) => ({
                  backgroundColor: theme?.vars.palette?.background?.inverse,
                  color: theme?.vars.palette.text?.contrastText,
                  "&:hover": {
                    backgroundColor: theme?.vars.palette?.background?.inverse,
                    color: theme?.vars.palette.text?.contrastText,
                  },
                  borderRadius: "20px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  width: "100%",
                })}
              >
                Play
              </Button>
            </Box>
            {/** Progress */}
            <Box
              sx={(theme: any) => ({
                width: "200px",
                marginTop: "15px",
                marginBottom: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexFlow: "row wrap",
                [theme?.breakpoints.down("sm")]: {
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                },
              })}
            >
              <LinearProgress
                variant="determinate"
                value={50}
                sx={(theme: any) => ({
                  width: "200px",
                  [theme?.breakpoints.down("sm")]: {
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  },
                })}
              />
            </Box>
            <Tabs
              value={selected}
              aria-label="stream-nav-tab"
              onChange={(_, index) => setSelected(index)}
            >
              <Tab label="Episodes" />
              <Tab label="Suggested" />
              <Tab label="Details" />
            </Tabs>
            {selected === 0 && (
              <Box sx={{ marginTop: "35px" }}>
                <Swiper
                  spaceBetween={10}
                  breakpoints={{
                    [theme.breakpoints.values.xs]: {
                      slidesPerView: 1,
                    },
                    [theme.breakpoints.values.sm]: {
                      slidesPerView: 2,
                    },
                    [theme.breakpoints.values.md]: {
                      slidesPerView: 3,
                    },
                    [theme.breakpoints.values.lg]: {
                      slidesPerView: 4,
                    },
                  }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {meta.isLoading && !(meta.isError || meta.isSuccess) && (
                    <Loading />
                  )}
                  {meta.isSuccess && episodes.length <= 0 && (
                    <Box>No Streams Found</Box>
                  )}
                  {meta.isSuccess &&
                  episodes.length > 0 &&
                  Array.isArray(episodes[0])
                    ? episodes[season].map((episode: any, index: number) => (
                        <SwiperSlide key={episode.title}>
                          <Link href={`/video/${episode.id}`}>
                            <StreamCard
                              direction="vertical"
                              waitBeforeShow={1500 + index * 150}
                              ar="20 / 12"
                              cover={
                                <Box
                                  component="img"
                                  sx={{
                                    filter: "brightness(0.94)",
                                  }}
                                  src={episode.image}
                                  alt={`${episode.title}-image`}
                                />
                              }
                              isMetadataEnabled={true}
                              id={episode.id}
                              details={
                                <Box
                                  sx={{
                                    marginLeft: "10px",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      fontSize: "15px",
                                      lineHeight: "1.6",
                                      letterSpacing: "-.1px",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {episode.number}. {episode.title}
                                  </Box>
                                  <Box
                                    sx={{
                                      fontSize: "12px",
                                      lineHeight: "1.6",
                                      letterSpacing: "-.1px",
                                      fontWeight: 500,
                                    }}
                                  >
                                    {episode.description}
                                  </Box>
                                </Box>
                              }
                            >
                              <Box
                                sx={(theme: any) => ({
                                  margin: "0px 15px 15px",
                                  fontSize: "3rem",
                                  fontWeight: 700,
                                  color:
                                    theme?.vars.palette?.text?.contrastText,
                                })}
                              >
                                {episode.number}
                              </Box>
                            </StreamCard>
                          </Link>
                        </SwiperSlide>
                      ))
                    : episodes.map((episode: any, index: number) => (
                        <SwiperSlide key={episode.id}>{index}</SwiperSlide>
                      ))}
                </Swiper>
              </Box>
            )}
            {selected === 2 && (
              <Box
                sx={{
                  marginTop: "15px",
                }}
              >
                {details.isLoading &&
                  !(details.isError || details.isSuccess) && <Loading />}
                {details.isSuccess && <Box>{details.data?.description}</Box>}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Series;
