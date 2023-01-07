/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import { Box, Container } from '@mui/material'
import { Grid, OxygenTheme } from '@oxygen/design-system'
//import { default as Grid } from '@mui/material/Unstable_Grid2'
import { trpc } from '@/api'
import { HomeCard } from '@/content/ui/cards/home'
import { v4 as uuidv4 } from 'uuid'

const Home = () => {
  const images = [
    'https://picsum.photos/id/20/3670/2462',
    'https://picsum.photos/id/21/3008/2008',
    'https://picsum.photos/id/22/4434/3729',
    'https://picsum.photos/id/23/3887/4899',
    'https://picsum.photos/id/24/4855/1803',
    'https://picsum.photos/id/25/5000/3333',
    'https://picsum.photos/id/26/4209/2769',
    'https://picsum.photos/id/27/3264/1836',
    'https://picsum.photos/id/28/4928/3264',
    'https://picsum.photos/id/29/4000/2670',
  ]
  const createSanity = trpc.sanity.upsertOneSanity.useMutation();
  const handleCreateSanity = async () => {
    createSanity.mutate({
      isSane: true,
    });
  };
  return (
    <Box sx={{ marginTop: '30px', marginBottom: '80px' }}>
      <Container>
      <button
                onClick={handleCreateSanity}
                disabled={createSanity.isLoading}
              >
                Sanity Check
              </button>
              {createSanity.error && (
                <p>Something went wrong! {createSanity.error.message}</p>
              )}
        <Box
          component={Grid}
          rowGap="40px"
          columnGap="24px"
          sx={(theme: OxygenTheme) => ({
            [theme.breakpoints.up('xs')]: {
              '--breakpoint-grid_columns': 1,
            },
            [theme.breakpoints.up('sm')]: {
              '--breakpoint-grid_columns': 2,
            },
            [theme.breakpoints.up('md')]: {
              '--breakpoint-grid_columns': 4,
            },
            [theme.breakpoints.up('lg')]: {
              '--breakpoint-grid_columns': 5,
            },
          })}
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <HomeCard
              key={uuidv4()}
              direction="vertical"
              waitBeforeShow={1500 + index * 150}
              ar="20 / 19"
              srcs={images}
              isMetadataEnabled={true}
              id={uuidv4()}
              location="Location"
              description="Description"
              address="Address"
              name="Name"
              locality="Locality"
              href="/"
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Home
