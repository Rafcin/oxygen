export default function Card() {
  return {
    MuiCard: {
      defaultProps: {
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.boxShadow && {
            boxShadow: `${ownerState.boxShadow}`,
          }),

          ...(ownerState.background && {
            background: `${ownerState.background}`,
          }),

          ...(ownerState.border && {
            border: `${ownerState.border}`,
          }),

          ...(ownerState.radius
            ? {
                borderRadius: `${ownerState.radius}`,
              }
            : {
                borderRadius: `${theme?.vars.shape.borderRadius}`,
              }),

          display: "flex",
          overflow: "hidden",
          position: "relative",

          webkitBoxDirection: "normal",

          ...(ownerState.vertical === true && {
            webkitBoxOrient: "vertical",
            flexDirection: "column",
          }),
        }),
      },
    },
  };
}
