export default function Drawer() {
  return {
    MuiDrawer: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) => ({
          "&.MuiDrawer-paper": {
            color: theme?.palette.text?.primary,
            background: theme?.palette.background?.default,
          },
        }),
      },
    },
  }
}
