export default function TextField() {
  return {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme?.vars.palette.text?.primary,
          "& label.Mui-focused": {
            color: theme?.vars.palette.inputs?.inputFocusedBorder,
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: theme?.vars.palette.inputs?.inputFocusedBorder,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: theme?.vars.palette.inputs?.inputBorder,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme?.vars.palette.inputs?.inputFocusedBorder,
              color: theme?.vars.palette.text?.primary,
            },
          },
        }),
      },
    },
  };
}
