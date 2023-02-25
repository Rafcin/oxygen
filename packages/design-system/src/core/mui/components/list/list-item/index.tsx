export default function ListItemButton() {
  return {
    MuiListItemButton: {
      defaultProps: {},
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          marginTop: "6px",
          marginBottom: "6px",
          paddingTop: "0px",
          paddingBottom: "0px",
          paddingLeft: "4px",
          paddingRight: "4px",
          webkitAppearance: "none",
          mozAppearance: "none",
          appearance: "none",
          background: "transparent",
          border: "0",
          cursor: "pointer",
          margin: "0",
          webkitUserSelect: "auto",
          mozUserSelect: "auto",
          msUserSelect: "auto",
          userSelect: "auto",
          "&:hover": {
            background: "transparent",
            textDecoration: "underline",
          },
          textDecoration: "none",
          outline: "none",
          "& .MuiListItemText-root": {
            "& .MuiTypography-root": {},
          },
          ...(ownerState.selected === true && {
            background: "transparent",
            textDecoration: "underline",
            "& .MuiListItemText-root": {
              "& .MuiTypography-root": {
                fontWeight: "800",
              },
              borderLeft: `4px solid ${theme?.vars.palette.text?.primary}`,
              paddingLeft: "8px",
            },
          }),
        }),
      },
    },
  };
}
