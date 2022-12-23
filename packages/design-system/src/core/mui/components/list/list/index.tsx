export default function List() {
  return {
    MuiList: {
      defaultProps: {},
      styleOverrides: {
        root: () => ({
          "& .MuiListSubheader-root": {
            fontSize: "14px",
            lineHeight: "18px",
            textAlign: "left",
            fontWeight: "600",
            padding: 0,
            paddingBottom: "10px",
          },
        }),
      },
    },
  }
}
