export default function Chip() {
  return {
    MuiChip: {
      defaultProps: {},
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          cursor: "pointer",
          textAlign: "center",
          backgroundColor: `${theme?.palette.background?.default} `,
          border: `1px solid ${theme?.palette.inputs?.inputBorder} `,
          color: `${theme?.palette.text?.primary} `,
          outline: "none",
          margin: "0px",
          position: "relative",
          transitionProperty:
            "-ms-transform, -webkit-transform, transform, background-color, border-color",
          transitionDuration: "0.15s",
          transitionTimingFunction: "ease-in-out",
          padding: "10px 8px",
          borderRadius: "30px",
          lineHeight: "20px",
          fontFamily:
            'Belle, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          width: "auto",
          height: "auto",
          "&:hover": {
            border: `1px solid ${theme?.palette.inputs?.inputFocusedBorder}`,
          },
          ...(ownerState.variant === "simple" && {
            backgroundColor: `${theme?.palette.background?.default} `,
            color: `${theme?.palette.text?.primary} `,
          }),
        }),
      },
    },
  }
}
