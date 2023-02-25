export default function Drawer() {
  return {
    MuiDrawer: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) => ({
          "&.MuiDrawer-paper": {
            color: theme?.vars.palette.text?.primary,
            background: theme?.vars.palette.background?.default,
          },
        }),
      },
    },
  };
}
