import { dls } from '../../../theme'

export default function Baseline() {
  return {
    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: true,
      },
      styleOverrides: () => ({
        ...dls.baseline,
      }),
    },
  }
}
