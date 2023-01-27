import { Box, Button, Container } from '@mui/material'
import { getServerAuthSession } from '@oxygen/amplify-helper-backend'
import { useMutation } from '@tanstack/react-query'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { signIn } from 'next-auth/react'
import { FaDiscord } from 'react-icons/fa'
import { ImGithub } from 'react-icons/im'

const Auth = () => {
  const handleSignIn = useMutation({
    mutationFn: (provider: string) => {
      return signIn('github', {
        callbackUrl: '/',
      })
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
            onClick={() => handleSignIn.mutate('github')}
            variant="outlined"
            endIcon={<ImGithub />}
            sx={{ paddingLeft: '25px', paddingRight: '25px', marginBottom: '15px' }}
          >
            {handleSignIn.isLoading ? '...' : 'Sign in with GitHub'}
          </Button>
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

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(ctx)

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

export default Auth
