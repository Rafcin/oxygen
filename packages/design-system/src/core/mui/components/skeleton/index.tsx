export default function Skeleton() {
  return {
    MuiSkeleton: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme?.vars.palette?.background?.skeleton,
        }),
      },
    },
  };
}
