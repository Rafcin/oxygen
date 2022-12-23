export default function Tab() {
  return {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          "&:active": {
            transform: "scale(.96)",
          },
          "&:hover": {
            background: theme?.palette.text?.secondary,
          },
          "&.Mui-selected": {
            color: theme?.palette.text?.primary,
          },
          width: "auto",
          maxWidth: "auto",
          minHeight: "auto",
          textTransform: "none",
          fontSize: "14px",
          lineHeight: "18px",
          fontWeight: "600",
          borderRadius: "8px",
          border: "none",
          background: "transparent",
          padding: "12px",
          marginTop: "6px",
          marginBottom: "6px",
          marginRight: "6px",
          transition:
            "box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s",
          position: "relative",
          outline: "none",
          color: theme?.palette.text?.primary,
          cursor: "default",
        }),
      },
    },
  }
}
