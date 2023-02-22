import { Box } from '@mui/material'
import { useSession } from 'next-auth/react'
import { Signin } from '@/content/controls/signin'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getServerAuthSession } from '@/server/auth'

const Auth = () => {
  return (
    <div>
      <Box sx={{ padding: '20px' }}>
        <Signin />
      </Box>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(ctx)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

export default Auth
