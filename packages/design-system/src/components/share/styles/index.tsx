import { styled } from '@mui/system'

import { ShareProps } from '../types'

// Use to control the width of the content, usually in a flexbox row Share
export const ShareRoot = styled('div', {
  name: 'MuiShare',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState?: ShareProps }>(({ ownerState }) => {
  return {}
})
