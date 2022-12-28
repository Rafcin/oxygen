/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import { Box, Button, Container } from '@mui/material'

const Home = () => {
  return (
    <Box sx={{ marginTop: '30px', marginBottom: '80px' }}>
      <Container maxWidth="xl">
        <Button>Hello World</Button>
      </Container>
    </Box>
  )
}

export default Home
