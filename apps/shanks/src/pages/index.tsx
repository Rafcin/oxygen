import { GenericCard } from "@/content/ui/cards/generic";
import { api } from "@/trpc/api";
import { Box } from "@mui/material";
import { Grid, OxygenTheme, Container } from "@oxygen/design-system";
import dynamic from "next/dynamic";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Home = () => {
  const search = api.stream.search.useQuery({ query: "Blue Lock" });
  return (
    <Box sx={{ marginTop: "30px", marginBottom: "80px" }}>
      <Container>
        <Box
          component={Grid}
          rowGap="40px"
          columnGap="24px"
          sx={(theme: any) => ({
            [theme.breakpoints.up("xs")]: {
              "--breakpoint-grid_columns": 1,
            },
            [theme.breakpoints.up("sm")]: {
              "--breakpoint-grid_columns": 2,
            },
            [theme.breakpoints.up("md")]: {
              "--breakpoint-grid_columns": 4,
            },
            [theme.breakpoints.up("lg")]: {
              "--breakpoint-grid_columns": 5,
            },
          })}
        >
          {search.isSuccess &&
            search.data?.results?.map((stream, index) => (
              <GenericCard
                key={index}
                direction="vertical"
                waitBeforeShow={1500 + index * 150}
                ar="20 / 19"
                cover={<Image src={stream.image} fill alt="shanks-cover" />}
                isMetadataEnabled={true}
                id={index}
              />
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
