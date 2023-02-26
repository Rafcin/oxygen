import { Box } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

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

const Movies: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id }) => {
  return <Box></Box>;
};

export default Movies;
