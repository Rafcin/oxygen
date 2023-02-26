import { api } from "@/trpc/api";
import { Subtitle } from "@/types/stream";
import { searchSources } from "@/utils/streams";
import { Box } from "@mui/material";
import { AspectRatio, Loading } from "@oxygen/design-system";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";

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
  const video = api.stream.video.useQuery(
    { id: id },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
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
        {video.isLoading && !video.isError && <Loading />}
        {video.isSuccess &&
          video.data &&
          searchSources(video.data?.sources).url !== "" && (
            <AspectRatio ratio="16 / 9">
              <ReactPlayer
                controls={true}
                url={searchSources(video.data?.sources).url}
                width="100%"
                height="100%"
                config={{
                  file: {
                    attributes: {
                      crossOrigin: "true",
                    },
                    tracks: video.data?.subtitles.map((track: Subtitle) => ({
                      kind: "subtitles",
                      src: track.url,
                      srcLang: track.lang,
                    })),
                  },
                }}
              />
            </AspectRatio>
          )}
      </Box>
    </Box>
  );
};

export default Video;
