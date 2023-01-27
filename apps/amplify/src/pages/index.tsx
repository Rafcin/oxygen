import { getServerAuthSession } from '@oxygen/amplify-helper-backend'
import { Box } from '@mui/material'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { trpc } from '@/trpc/api'

const Home = () => {
  const helloworld = trpc.account.findFirstAccount.useQuery()
  return <Box>Hello World</Box>
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
