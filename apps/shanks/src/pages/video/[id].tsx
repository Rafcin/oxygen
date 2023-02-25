import { GenericCard } from "@/content/ui/cards/stream";
import { api } from "@/trpc/api";
import { Box } from "@mui/material";
import {
  Grid,
  OxygenTheme,
  Container,
  AspectRatio,
  CardContainer,
  CardCover,
  CardContent,
} from "@oxygen/design-system";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

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

const Video: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id }) => {
  const details = api.stream.details.useQuery({ id: id });
  return (
    <Box
      sx={{
        top: "0px",
        right: "0px",
        bottom: "0px",
        height: "100%",
        width: "100%",
        alignItems: "center",
        backgroundColor: "black",
        boxSizing: "border-box",
        display: "flex",
        overflow: "hidden",
        position: "absolute",
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          position: "relative",
          maxHeight: "100vh",
          maxWidth: "100vw",
          transition: "all 0.5s ease 0s, visibility 0s ease 0s",
          width: "100%",
        }}
      >
        <AspectRatio ratio="16 / 9">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="100%"
          />
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default Video;
