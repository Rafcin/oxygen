import { styled } from '@mui/system'

import { ContainerProps } from '../types'

// Use to control the width of the content, usually in a flexbox row container
export const ContainerRoot = styled('div', {
  name: 'MuiContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: any; ownerState?: ContainerProps }>(({ theme, ownerState }) => {
  return {
    '--container-padding-inline': ownerState.inlinePadding,
    '--container-margin-block-start': ownerState.marginBlockStart,
    '--container-margin-block-end': ownerState.marginBlockEnd,
    marginInline: 'auto',
    paddingInlineStart: 'var(--container-padding-inline)',
    paddingInlineEnd: 'var(--container-padding-inline)',
    [theme.breakpoints.up('sm')]: {
      marginBlockStart: 'var(--container-margin-block-start)',
      marginBlockEnd: 'var(--container-margin-block-end)',
    },
    maxWidth: 'var(--page-shell-max-width, "1760px")',
    contain: 'paint layout',
    width: '100%',
  }
})
