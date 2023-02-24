export default function CardActions() {
  return {
    MuiCardActions: {
      defaultProps: {
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: () => ({}),
      },
    },
  }
}
