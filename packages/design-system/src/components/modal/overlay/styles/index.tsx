import { styled } from '@mui/system'

import { ModalOverlayProps } from '../types'

export const ModalOverlayRoot = styled('div', {
  name: 'MuiModalOverlay',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: ModalOverlayProps }>({

})
