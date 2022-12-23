import { styled } from '@mui/system'

import { CardContentProps } from '../types'

export const CardContentRoot = styled('div', {
  name: 'MuiCardContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: CardContentProps }>({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  zIndex: 1,
})
