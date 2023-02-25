import { StreamCard } from "@/content/ui/cards/stream";
import { api } from "@/trpc/api";
import { Box } from "@mui/material";
import { Grid, OxygenTheme, Container, Loading } from "@oxygen/design-system";
import dynamic from "next/dynamic";
import Image from "next/image";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { animes } from "@/config/animes";
import Link from "next/link";
import { Stream } from "@/types/stream";
import { convertStreamType } from "@/utils/streams";

export const getServerSideProps: GetServerSideProps = async ({}) => {
  return {
    props: { random: animes[Math.floor(Math.random() * animes.length)] },
  };
};

const Home: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ random }) => {
  const search = api.stream.search.useQuery({
    query: "one piece",
  });
  return (
    <Box sx={{ marginTop: "30px", marginBottom: "80px" }}>
      <Container>
        {search.isLoading && <Loading />}
        {search.isSuccess && (
          <Box
            component={Grid}
            rowGap="30px"
            columnGap="24px"
            sx={(theme: any) => ({
              [theme?.breakpoints.up("xs")]: {
                "--breakpoint-grid_columns": 1,
              },
              [theme?.breakpoints.up("sm")]: {
                "--breakpoint-grid_columns": 2,
              },
              [theme?.breakpoints.up("md")]: {
                "--breakpoint-grid_columns": 4,
              },
              [theme?.breakpoints.up("lg")]: {
                "--breakpoint-grid_columns": 5,
              },
            })}
          >
            {search.data?.results?.map((stream: Stream, index: number) => (
              <Link
                href={`/${convertStreamType(stream.type)}/${stream.id}`}
                key={index}
              >
                <StreamCard
                  key={index}
                  direction="vertical"
                  waitBeforeShow={1500 + index * 150}
                  ar="20 / 28"
                  cover={<Image src={stream.image} fill alt="shanks-cover" />}
                  isMetadataEnabled={true}
                  id={index}
                />
              </Link>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Home;
