import { Mode } from '@/content/controls/mode'
import { Signout } from '@/content/controls/signout'
import { Box, Button, Paper, SwipeableDrawer } from '@mui/material'
import { getServerAuthSession } from '@oxygen/amplify-helper-backend'
import { ModalClose, Container } from '@oxygen/design-system'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'

const Home = () => {
  const [accountSettingsOpen, setAccountSettingsOpen] = useState(false)
  return (
    <Box>
      <Paper
        component={SwipeableDrawer}
        anchor="bottom"
        open={accountSettingsOpen}
        onClose={() => setAccountSettingsOpen(false)}
        onOpen={() => setAccountSettingsOpen(true)}
        sx={(theme: any) => ({
          '& > .MuiDrawer-paper': {
            borderTopRightRadius: '12px',
            borderTopLeftRadius: '12px',
            padding: '40px',
            paddingLeft: '0px',
            paddingRight: '0px',
            overflow: 'hidden',
            backgroundColor: theme?.palette.background?.appbar,
            color: theme?.palette.text?.primary,
            backgroundImage: theme?.overlays[4],
          },
          '&.MuiModal-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          },
        })}
      >
        <ModalClose onClick={() => setAccountSettingsOpen(false)} />
        <Box sx={{ marginBottom: '15px' }} />
        <Container maxWidth="md">
          <Signout />
          <Mode />
        </Container>
      </Paper>
      <Box>
        <Box>
          <Box
            sx={{
              left: '24px',
              display: 'block',
              top: '24px',
              bottom: 'auto',
              position: 'absolute',
              zIndex: 1,
              overflowY: 'hidden',
              maxHeight: '163px',
              padding: '8px',
              borderRadius: '12px',
            }}
          >
            <Button
              endIcon={<FaUser />}
              variant="outlined"
              sx={(theme: any) => ({
                backgroundColor: theme?.palette?.background?.default,
                '&:hover': {
                  backgroundColor: theme?.palette?.background?.default,
                },
                paddingLeft: '15px',
                paddingRight: '15px',
                marginLeft: '15px',
              })}
              onClick={() => setAccountSettingsOpen(true)}
            >
              Account
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
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
