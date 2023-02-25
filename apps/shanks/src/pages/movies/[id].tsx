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
