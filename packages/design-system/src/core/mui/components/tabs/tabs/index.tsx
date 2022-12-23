export default function Tabs() {
  return {
    MuiTabs: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) => ({
          "& > .MuiTabs-scroller > .MuiTabs-indicator": {
            backgroundColor: theme?.palette.text?.primary,
          },
        }),
      },
    },
  }
}
