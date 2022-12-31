import { default as theme } from '../../../theme/theme'

export default function Baseline() {
  return {
    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: true,
      },
      styleOverrides: () => ({
        ...theme.baseline,
      }),
    },
  }
}
