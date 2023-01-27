import { Button } from '@mui/material'
import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import { signOut, useSession } from 'next-auth/react'

export const Signout: React.FC<any> = React.memo(
  ({ children, ...props }: { children?: React.ReactNode }) => {
    const handleLogout = async () => {
      try {
        await signOut({
          callbackUrl: '/',
        })
      } catch (error) {
      } finally {
      }
    }
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
        onClick={handleLogout}
      >
        Sign Out
      </Button>
    )
  }
)
