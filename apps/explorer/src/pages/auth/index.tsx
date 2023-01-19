import { Box, Button, Container } from '@mui/material'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { getServerAuthSession } from '@/server/common/get-server-auth-session'
import toast from 'react-hot-toast'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { ImGithub } from 'react-icons/im'
import { Loading } from '@oxygen/design-system'
const Auth = () => {
  const [loading, setLoading] = useState(false)

  const handleSignIn = async () => {
    setLoading(true)
    try {
      await signIn('github', {
        callbackUrl: '/',
      })
    } catch (error) {
      toast('An error occurred while logging in.', {
        icon: '🤔',
      })
    }
  }
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
          <h1>Sign in</h1>
          <Button
            onClick={handleSignIn}
            variant="outlined"
            endIcon={<ImGithub />}
            sx={{ paddingLeft: '25px', paddingRight: '25px' }}
          >
            {loading ? '...' : 'Sign in with GitHub'}
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
