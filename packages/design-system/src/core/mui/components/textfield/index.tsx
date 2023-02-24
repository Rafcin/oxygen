export default function TextField() {
  return {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme?.palette.text?.primary,
          "& label.Mui-focused": {
            color: theme?.palette.inputs?.inputFocusedBorder,
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: theme?.palette.inputs?.inputFocusedBorder,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: theme?.palette.inputs?.inputBorder,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme?.palette.inputs?.inputFocusedBorder,
              color: theme?.palette.text?.primary,
            },
          },
        }),
      },
    },
  }
}
