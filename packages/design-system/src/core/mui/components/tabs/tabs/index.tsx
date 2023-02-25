export default function Tabs() {
  return {
    MuiTabs: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) => ({
          "& > .MuiTabs-scroller > .MuiTabs-indicator": {
            backgroundColor: theme?.vars.palette.text?.primary,
          },
        }),
      },
    },
  };
}
