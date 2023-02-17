import { Box, Button, Container } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { signIn, useSession } from 'next-auth/react'
import { FaDiscord } from 'react-icons/fa'
import { ImGithub } from 'react-icons/im'
import React from 'react'

export const Signin: React.FC<any> = React.memo(
  ({ children, ...props }: { children?: React.ReactNode }) => {
    const handleSignIn = useMutation({
      mutationFn: (provider: string) => {
        return signIn(provider, { callbackUrl: '/' })
      },
    })
    return (
      <Box>
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              height: '100vh',
            }}
          >
            <h1>Sign in 👋</h1>
            <Button
              onClick={() => handleSignIn.mutate('discord')}
              variant="outlined"
              endIcon={<FaDiscord />}
              sx={{ paddingLeft: '25px', paddingRight: '25px' }}
            >
              {handleSignIn.isLoading ? '...' : 'Sign in with Discord'}
            </Button>
          </Box>
        </Container>
      </Box>
    )
  }
)
