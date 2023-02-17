import { Button } from '@mui/material'
import { signOut } from 'next-auth/react'
import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'

export const Signout: React.FC<any> = React.memo(
  ({ children, ...props }: { children?: React.ReactNode }) => {
    return (
      <Button
        endIcon={<FaSignOutAlt />}
        variant="outlined"
        sx={(theme: any) => ({
          backgroundColor: theme?.palette?.background?.default,
          '&:hover': {
            backgroundColor: theme?.palette?.background?.default,
          },
          paddingLeft: '25px',
          paddingRight: '25px',
          marginLeft: '15px',
          marginRight: '15px',
        })}
        onClick={(e) => {
          e.preventDefault()
          signOut({
            callbackUrl: '/',
          })
        }}
      >
        Sign Out
      </Button>
    )
  }
)
