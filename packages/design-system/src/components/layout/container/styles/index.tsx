import { styled } from '@mui/system'

import { ContainerProps } from '../types'

// Use to control the width of the content, usually in a flexbox row container
export const ContainerRoot = styled('div', {
  name: 'MuiContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState?: ContainerProps }>(({ theme, ownerState }) => {
  return {
    marginInline: 'auto',
    paddingInlineStart: 'var(--mui-page-container-padding-inline)',
    paddingInlineEnd: 'var(--mui-page-container-padding-inline)',
    maxWidth: 'var(--mui-page-shell-max-content-width,1760px)',
    contain: 'paint layout',
    width: '100%',
  }
})
