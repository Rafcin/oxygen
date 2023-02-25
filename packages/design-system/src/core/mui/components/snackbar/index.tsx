export default function Snackbar() {
  return {
    MuiSnackbar: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) => ({
          "& > .MuiSnackbarContent-root": {
            borderRadius: "12px",
            padding: "12px",
            color: theme?.vars.palette.text?.primary,
            backgroundColor: theme?.vars.palette.text?.secondary,
          },
        }),
      },
    },
  };
}
