import { styled } from '@mui/system'

export const BannerCardContainer = styled('a', {
  name: 'BannerCardContainer',
})<any>((props) => ({
  cursor: 'pointer',
  position: 'relative',
  borderColor: 'black',
  MsTouchAction: 'manipulation',
  touchAction: 'manipulation',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  fontWeight: 'inherit',
  borderRadius: 16,
  borderWidth: 1,
  borderStyle: 'solid',
  outline: 'none',
  paddingTop: 14,
  paddingBottom: 14,
  paddingLeft: 24,
  paddingRight: 24,
  WebkitTransition: 'box-shadow 0.2s ease, -webkit-transform 0.1s ease',
  transform: '0.1s ease',
  MozTransition: 'box-shadow 0.2s ease, transform 0.1s ease',
  transition: 'box-shadow 0.2s ease, -ms-transform 0.1s ease',
  WebkitTransform: '0.1s ease, transform 0.1s ease',
  WebkitTapHighlightColor: 'transparent',
  background: 'transparent',
  border: 'none',
  color: 'inherit',
  display: 'block',
  margin: 0,
  padding: 0,
  textAlign: 'inherit',
  textDecoration: 'none',
  height: '100%',
  width: '100%',
}))

export const BannerCardSize = styled('div', {
  name: 'BannerCardSize',
})<any>(({ theme, ...props }) => ({
  zIndex: 0,
  border: '0px none',
  display: 'block',
  overflow: 'hidden',
  position: 'relative',
  textAlign: 'left',
  textDecoration: 'none',
  width: '100%',
  background: props.bg ? props.bg : 'transparent',
  borderRadius: props.radius ? props.radius : '16px',
  ...(props.size
    ? props.size
    : {
        [theme.breakpoints.down('md')]: {
          height: '360px',
        },
        [theme.breakpoints.down('md')]: {
          height: '400px',
        },
        [theme.breakpoints.down('lg')]: {
          height: '480px',
        },
      }),
}))

export const BannerCardPosition = styled('div')<any>`
  position: absolute;
  inset: -1px 0px;
`

export const BannerCardBackgroundContainer = styled('div')<any>`
  height: 100%;
  width: 100%;
  background-size: cover;

  display: inline-block;
  vertical-align: bottom;
  min-height: 1px;
  position: relative;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`

export const BannerCardBackgroundImage = styled('img', {
  name: 'BannerCardSize',
})<any>(({ theme, ...props }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  objectFit: 'cover',
  objectPosition: '50% 50%',
  verticalAlign: 'bottom',

  height: '100%',
  width: '100%',
  ...(props.filter && {
    filter: props.filter,
  }),
}))
