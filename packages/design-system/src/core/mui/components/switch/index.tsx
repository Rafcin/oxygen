export default function Switch() {
  return {
    MuiSwitch: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) => ({
          width: 42,
          height: 26,
          padding: 0,
          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 2,
            transitionDuration: "300ms",
            "&.Mui-checked": {
              transform: "translateX(16px)",
              color: "#fff",
              "& + .MuiSwitch-track": {
                backgroundColor: theme?.vars.palette.background.inverse,
                opacity: 1,
                border: 0,
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
              },
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
              color: theme?.vars.palette.background.inverse,
              border: "6px solid #fff",
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
              color: theme?.vars.palette.text.inverse,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: theme?.vars.mode === "light" ? 0.7 : 0.3,
            },
          },
          "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 22,
            height: 22,
          },
          "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: theme?.vars.palette.background.border,
            opacity: 1,
            transition: theme?.vars.transitions.create(["background-color"], {
              duration: 500,
            }),
          },
        }),
      },
    },
  };
}
