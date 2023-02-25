export default function HelperText() {
  return {
    MuiFormHelperText: {
      defaultProps: {
        variant: "simple",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          marginTop: "6px",
          color: `${theme?.vars.palette.text?.textMuted}`,
          fontSize: "12px",
          lineHeight: "16px",
          fontWeight: "400",

          ...(ownerState.variant === "simple" && {
            color: `${theme?.vars.palette.text?.textMuted}`,
          }),
        }),
      },
    },
  };
}
