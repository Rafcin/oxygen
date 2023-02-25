export default function Button() {
  return {
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: false, // No more ripple, on the whole application 💣!
      },
      styleOverrides: {
        root: () => ({}),
      },
    },
    MuiButton: {
      defaultProps: {
        disableTouchRipple: false,
        disableElevation: true,
        disableRipple: false,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme?.typography.button,
          textTransform: "none",
          cursor: "pointer",
          userSelect: "auto",
          appearance: "none",
          whiteSpace: "nowrap",
          color: "inherit",
          width: "auto",
          height: "auto",
          padding: "12px",
          borderRadius: "50px",
          "&:hover": {
            filter: "brightness(0.95)",
            backgroundColor: "inherit",
          },
        }),
      },
    },
  };
}
