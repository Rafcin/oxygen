export default function Snackbar() {
  return {
    MuiSnackbar: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) => ({
          "& > .MuiSnackbarContent-root": {
            borderRadius: "12px",
            padding: "12px",
            color: theme?.palette.text?.primary,
            backgroundColor: theme?.palette.text?.secondary,
          },
        }),
      },
    },
  }
}
