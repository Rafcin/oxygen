import { styled } from '@mui/system'
import { OxygenTheme } from 'src/declarations'

import { GridProps } from '../types'

export const GridRoot = styled('div', {
  name: 'MuiGrid',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ theme?: OxygenTheme; ownerState: GridProps }>(({ theme, ownerState }) => [
  {
    '--breakpoint-grid_column-gap': ownerState.columnGap,
    '--breakpoint-grid_row-gap': ownerState.rowGap,
    display: 'grid',
    gridAutoFlow: 'row dense',
    gridAutoRows:
      'var( --breakpoint-grid_auto-rows, minmax(min-content,max-content) )',
    gridGap: 'var(--breakpoint-grid_row-gap,0) var(--breakpoint-grid_column-gap,0)',
    gridTemplateColumns:
      'var( --breakpoint-grid_column-template, repeat(var(--breakpoint-grid_columns,1),minmax(0,1fr)) )',
  },
])
