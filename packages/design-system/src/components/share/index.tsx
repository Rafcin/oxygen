import { Alert, Box, Modal } from '@mui/material'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import toast from 'react-hot-toast'
import { FaCopy, FaEnvelope, FaFacebook, FaTwitter } from 'react-icons/fa'
import { useCopyToClipboard } from 'react-use'
import { v4 as uuidv4 } from 'uuid'
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useSlotProps } from '@mui/base/utils'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import * as React from 'react'
import { ShareTypeMap, getShareUtilityClass } from './types'
import { ShareRoot } from './styles'
import { ModalView } from '../modal/view'
import { ModalContent } from '../modal/content'
import { useNavigationStore } from '../../context/navigation'
import { ModalClose } from '../modal/close'
import { ModalBody } from '../modal/body'
import { AspectRatio } from '../aspect-ratio'
import { CardContainer } from '../card/card'
import { CardCover } from '../card/cover'
import { CardContent } from '../card/content'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
    content: ['content'],
  }

  return composeClasses(slots, getShareUtilityClass, {})
}

const Share = React.forwardRef(function Share(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiShare',
  })

  const {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    component = 'div',
    children,
    componentsProps = {},
    domain,
    ...other
  } = props

  const ownerState = {
    ...props,
    domain,
    component,
  }

  const classes = useUtilityClasses()

  const rootProps = useSlotProps({
    elementType: ShareRoot,
    ownerState,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref,
      as: component,
    },
    className: classes.root,
  })

  const [clipboardState, copyToClipboard] = useCopyToClipboard()
  const { isShared, changeIsShared, urlToShare } = useNavigationStore()

  const media = [
    {
      title: 'Copy Link',
      icon: <FaCopy />,
    },
    {
      title: 'Email',
      icon: <FaEnvelope />,
      href: `mailto:?subject=Hey%20check%20out%20this%20page&body=https://${domain}${urlToShare}`,
    },
    {
      title: 'Twitter',
      icon: <FaTwitter />,
      href: `https://twitter.com/intent/tweet?text=Hey%20check%20out%20this%20page%20on%20https://${domain}${urlToShare}`,
    },
    {
      title: 'Facebook',
      icon: <FaFacebook />,
      href: `https://www.facebook.com/sharer/sharer.php?u=https://${domain}${urlToShare}`,
    },
  ]

  return (
    <ShareRoot {...rootProps}>
      <span>
        <Modal
          open={isShared}
          onClose={() => changeIsShared(!isShared)}
          sx={() => ({
            ...ModalView({}),
          })}
        >
          <ModalContent>
            <ModalClose onClick={() => changeIsShared(false)} />
            <ModalBody>
              <Box sx={{ padding: '20px' }}>
                <Box
                  sx={(theme: any) => ({
                    ...theme.typography.h5,
                    fontWeight: 600,
                  })}
                >
                  Share this page with friends or family!
                </Box>
                <br />
                <span>
                  <Grid
                    sx={{
                      marginTop: '16px',
                    }}
                    container
                    spacing={{ xs: 1, md: 1 }}
                    columns={12}
                  >
                    {media.map((obj: any) => (
                      <Grid xs={4} sm={6} md={6} lg={4} key={`share-${obj.title}`}>
                        <Box
                          key={`${obj.title}-${uuidv4()}`}
                          onClick={() => {
                            if (obj.title === 'Copy Link') {
                              copyToClipboard(urlToShare)
                              toast.custom(
                                <Alert
                                  severity="success"
                                  aria-label={`Copy link ${clipboardState}`}
                                >
                                  Copied To Clipboard!
                                </Alert>
                              )
                            }
                          }}
                        >
                          <a href={'href' in obj ? obj.href : null}>
                            <AspectRatio ratio="20/19">
                              <CardContainer
                                sx={(theme: any) => ({
                                  background: 'transparent',
                                  border: `1px solid ${theme?.palette.background?.border}`,
                                  borderRadius: '15px',
                                  cursor: 'pointer',
                                })}
                              >
                                <CardCover></CardCover>
                                <CardContent>
                                  <Box
                                    sx={{
                                      width: '100%',
                                      height: '100%',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      marginTop: 'auto',
                                      marginBottom: 'auto',
                                      '& > *': {
                                        width: '66px',
                                        height: '66px',
                                      },
                                    }}
                                  >
                                    {obj.icon}
                                  </Box>
                                </CardContent>
                              </CardContainer>
                            </AspectRatio>
                          </a>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </span>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </span>
    </ShareRoot>
  )
}) as OverridableComponent<ShareTypeMap>

export { Share }
