import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FooterConfig, IColumnConfig, ILinkConfig } from '../../../config/footer'

export const InlineFooter = ({
  isFooterAllowedOnPage,
}: {
  isFooterAllowedOnPage: Boolean
}) => {
  const theme = useTheme<any>()
  const isMobileMediaQuery = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <span>
      {isFooterAllowedOnPage && (
        <Box
          sx={(theme: any) => ({
            backgroundColor: theme?.palette?.footer?.background,
            borderTop: `1px solid ${theme?.palette?.footer?.border}`,
          })}
        >
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
            maxWidth="xl"
          >
            <Grid container spacing={2} columns={16}>
              {FooterConfig.columns.map((column: IColumnConfig) => (
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
          <Container
            maxWidth="xl"
            sx={(theme: any) => ({
              backgroundColor: theme?.palette?.footer?.background,
              borderTop: `1px solid ${theme?.palette?.footer?.border}`,
              paddingTop: '8px',
              paddingBottom: '8px',
            })}
          >
            <Typography
              component="div"
              sx={(theme: any) => ({
                ...theme.typography.small,
                fontWeight: 500,
                color: 'inherit',
              })}
            >
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  divider={<div>·</div>}
                  alignItems="center"
                >
                  <Box sx={{ paddingRight: '5px' }}>{FooterConfig.title}</Box>
                  {isMobileMediaQuery && (
                    <Box sx={{ paddingLeft: '5px', paddingRight: '5px' }}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={FooterConfig.privacy}
                      >
                        Privacy
                      </a>
                    </Box>
                  )}
                  {isMobileMediaQuery && (
                    <Box sx={{ paddingLeft: '5px' }}>
                      <a target="_blank" rel="noreferrer" href={FooterConfig.terms}>
                        Terms
                      </a>
                    </Box>
                  )}
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Button
                    href={FooterConfig.facebook}
                    sx={{
                      color: 'inherit',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      lineHeight: 'inherit',
                      textTransform: 'none',
                      margin: 0,
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    <FaFacebook style={{ width: '18px', height: '18px' }} />
                  </Button>
                  <Button
                    href={FooterConfig.instagram}
                    sx={{
                      color: 'inherit',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      lineHeight: 'inherit',
                      textTransform: 'none',
                      margin: 0,
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    <FaInstagram style={{ width: '18px', height: '18px' }} />
                  </Button>
                  <Button
                    href={FooterConfig.twitter}
                    sx={{
                      color: 'inherit',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      lineHeight: 'inherit',
                      textTransform: 'none',
                      margin: 0,
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    <FaTwitter style={{ width: '18px', height: '18px' }} />
                  </Button>
                </Stack>
              </Box>
            </Typography>
          </Container>
        </Box>
      )}
    </span>
  )
}
