import { styled } from '@mui/system'

import { ShellProps } from '../types'

// Use to control the width of the content, usually in a flexbox row shell
export const ShellRoot = styled('div', {
  name: 'MuiShell',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState?: ShellProps }>(({ ownerState }) => {
  return {
    '--page-shell-max-content-width': ownerState?.pageSize,
  }
})
