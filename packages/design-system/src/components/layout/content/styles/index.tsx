import { styled } from '@mui/system'

export const ContentContainer = styled('div', {
  name: 'MuiContentContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any }>(() => [
  {
    display: 'contents',
  },
])
