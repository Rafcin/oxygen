import { Button } from '@mui/material'
import { styled } from '@mui/system'

export const ArrowButton = styled(Button, {
  name: 'ArrowButton',
})<any>(({ theme }) => ({
  minWidth: 'auto',
  backgroundColor: theme?.palette.background?.default,
  color: theme?.palette.text?.primary,
  WebkitBoxPack: 'center',
  WebkitBoxAlign: 'center',
  appearance: 'none',
  display: 'inline-flex',
  borderRadius: '50%',
  border: 'none',
  outline: 'none',
  margin: 0,
  padding: 0,
  cursor: 'pointer',
  touchAction: 'manipulation',
  position: 'relative',
  transition: 'transform 0.25s ease opacity 0.3s ease-in-out',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px !important',
  height: '32px !important',
  '&:focus': {
    boxShadow: 'none',
    backgroundColor: theme?.palette.background?.default,
    color: theme?.palette.text?.primary,
  },
  '&:disabled': {
    backgroundColor: theme?.palette.background?.default,
    color: theme?.palette.text?.primary,
    cursor: 'not-allowed',
    transform: 'scale(1)',
  },
  '&:hover:not([disabled])': {
    backgroundColor: theme?.palette.background?.default,
    color: theme?.palette.text?.primary,
    transform: 'scale(1.04)',
  },
}))
