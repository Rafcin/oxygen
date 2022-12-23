export default function InputLabel() {
  return {
    MuiInputLabel: {
      defaultProps: {},
      styleOverrides: {
        root: ({ theme }) => ({
          //background: 'transparent',
          borderRadius: "12px",
          "&.Mui-error": {
            color: theme?.palette.inputs.inputInvalidBorder,
            borderColor: theme?.palette.inputs.inputInvalidBorder,
          },
        }),
      },
    },
  }
}
