export default function TabsPanel() {
  return {
    MuiTabPanel: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme?.vars.palette.text?.primary,
        }),
      },
    },
  };
}
