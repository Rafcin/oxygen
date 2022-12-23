import { styled } from '@mui/system'

export const FlexContainer = styled('div', {
  name: 'FlexContainer',
})<any>(({ theme, ...props }) => ({
  height: 'auto !important',
  '&:before': {
    display: 'flex',
    content: "''",
  },
  '&:after': {
    display: 'flex',
    content: "''",
  },
}))
