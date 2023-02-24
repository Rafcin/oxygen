export default function Skeleton() {
  return {
    MuiSkeleton: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme?.palette?.background?.skeleton,
        }),
      },
    },
  }
}
