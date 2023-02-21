import { Box } from '@mui/material'
import { useSession } from 'next-auth/react'
import { Signout } from '@/content/controls/signout'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getServerAuthSession } from '@/server/auth'

const Home = () => {
  //Auth
  const { data: session } = useSession()

  return (
    <div>
      <Box sx={{ padding: '20px' }}>
        <Signout />
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

export default Home
