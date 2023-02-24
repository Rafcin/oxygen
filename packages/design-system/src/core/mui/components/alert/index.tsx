export default function Alert() {
  return {
    MuiAlert: {
      defaultProps: {},
      styleOverrides: {
        root: () => ({
          borderRadius: "12px",
          padding: "12px",
        }),
      },
    },
  }
}
