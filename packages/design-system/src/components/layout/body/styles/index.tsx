import { styled } from '@mui/system'

export const BodyContainer = styled('main', {
  name: 'MuiBodyContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any }>(() => [
  {
    position: 'relative',
    minHeight: '100vh',
  },
])
