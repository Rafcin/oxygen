import { Box, Container, Stack, Typography } from '@mui/material'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import { IColumnConfig, IFooterConfig, ILinkConfig } from '../../../config/footer'

export const FooterColumns = ({ footerConfig }: { footerConfig: IFooterConfig }) => {
  return (
    <Container
      sx={(theme: any) => ({
        [theme.breakpoints.down('sm')]: {
          overflowY: 'scroll',
          width: '100%',
          maxWidth: '100%',
        },
        backgroundColor: theme?.palette?.footer?.background,
        paddingTop: '30px',
        paddingBottom: '20px',
      })}
    >
      <Grid container spacing={2} columns={16}>
        {footerConfig.columns.map((column: IColumnConfig) => (
          <Grid xs={16} sm key={column.column}>
            <Typography
              component="div"
              sx={(theme: any) => ({
                fontWeight: 600,
                color: theme?.palette.text?.primary,
                fontSize: '16px',
                lineHeight: '18px',
              })}
            >
              <Box
                sx={{
                  marginBottom: '15px',
                }}
              >
                {column.column}
              </Box>
            </Typography>
            <Stack
              direction="column"
              justifyContent="stretch"
              alignItems="flex-start"
              spacing={2}
            >
              {column.links.map((link: ILinkConfig) => (
                <Typography
                  key={link.name}
                  component="div"
                  sx={() => ({
                    fontWeight: 100,
                    color: 'inherit',
                    fontSize: '14px',
                    lineHeight: '18px',
                    paddingBottom: '8px',
                  })}
                >
                  <a href={link.link} key={link.name}>
                    {link.name}
                  </a>
                </Typography>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
