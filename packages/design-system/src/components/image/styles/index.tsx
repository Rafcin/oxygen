import { styled } from '@mui/system'

const styles = {
  imageContainer: {
    definition: {
      paddingTop: 'var(--dls-liteimage-padding-top)',
      position: 'relative',
      flex: 1,
    },
  },
  imageContainerAspectRatio: {
    definition: {
      ['@supports (aspect-ratio: 1 / 1)']: {
        aspectRatio: 'var(--dls-liteimage-aspect-ratio)',
      },
      ['@supports not (aspect-ratio: 1 / 1)']: {
        paddingTop: 'var(--dls-liteimage-padding-top)',
        position: 'relative',
      },
    },
  },
  imagePositioner: {
    definition: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  absoluteFill: {
    definition: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
  absoluteFillAspectRatio: {
    definition: {
      ['@supports (aspect-ratio: 1 / 1)']: {
        height: '100%',
        width: '100%',
        position: 'unset',
      },
      ['@supports not (aspect-ratio: 1 / 1)']: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
  },
  shimmerContainer: {
    definition: {
      background: '#FFFFFF',
      bottom: 0,
      left: 0,
      opacity: 1,
      position: 'absolute',
      right: 0,
      top: 0,
      transition: '300ms opacity ease-out',
    },
  },
  shimmerContainerFadeOut: {
    definition: {
      opacity: 0,
    },
  },
  backgroundImage: {
    definition: {
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
    },
  },
  removeDivExceptInIE: {
    definition: {
      display: 'inline-block',
      verticalAlign: 'bottom',
      height: '100%',
      width: '100%',
      ['@supports (object-fit: cover)']: {
        display: 'none',
        backgroundImage: 'none',
      },
    },
  },
  img: {
    definition: {
      height: 0,
      width: 0,
      position: 'absolute',
      ['@supports (object-fit: cover)']: {
        height: '100%',
        width: '100%',
        position: 'static',
      },
    },
  },
  imgPicture: {
    definition: {
      height: 0,
      width: 0,
      position: 'absolute',
      ['@supports (object-fit: cover)']: {
        height: '100%',
        width: '100%',
      },
    },
  },
  imgContainPaint: {
    definition: {
      contain: 'paint',
    },
  },
  imgHighlighted: {
    definition: {},
  },
  imgAutoHeightOverride: {
    definition: {
      height: '100%',
      width: '100%',
      position: 'static',
    },
  },
  pictureAspectRatio: {
    definition: {
      ['@supports (aspect-ratio: 1 / 1)']: {
        height: '100%',
        width: '100%',
      },
    },
  },
}

export const ImageOuterWrapper = styled('div', {
  name: 'ImageOuterWrapper',
})<any>(({ theme, ...props }) => ({
  ...(props.dynamic
    ? {
        width: '100%',
        height: '100%',
        position: 'relative',
      }
    : {
        ['@supports (aspect-ratio: 1 / 1)']: {
          aspectRatio: `${props.ar}`,
        },
        ['@supports not (aspect-ratio: 1 / 1)']: {
          paddingTop: `${(1 / props.ar) * 100}%`,
          position: 'relative',
          flex: '1 0 0%',
        },
        //BG
        ...styles.backgroundImage.definition,
      }),
}))

export const ImageInnerWrapper = styled('div', {
  name: 'ImageInnerWrapper',
})<any>(({ theme, ...props }) => ({
  ...(props.dynamic
    ? {
        //Div Fix
        display: 'inline-block',
        verticalAlign: 'bottom',
        height: '100%',
        width: '100%',
        //BG
        ...styles.backgroundImage.definition,
        minHeight: '1px',
      }
    : {
        ...styles.imagePositioner.definition,
        ['@supports (aspect-ratio: 1 / 1)']: {
          height: '100%',
          width: '100%',
          position: 'unset',
        },
        ['@supports not (aspect-ratio: 1 / 1)']: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      }),
}))

export const ImageElement = styled('img', {
  name: 'ImageElement',
})<any>(({ theme, ...props }) => ({
  height: 0,
  width: 0,
  position: 'absolute',
  ['@supports (object-fit: cover)']: {
    height: '100%',
    width: '100%',
    ...(props.static && {
      position: 'static',
    }),
  },
  ...(props.paint && {
    contain: 'paint',
  }),
  ...(props.overrideHeight && {
    height: '100%',
    width: '100%',
    position: 'static',
  }),
  ...(props.dynamic
    ? {
        objectFit: 'cover',
        verticalAlign: 'bottom',
      }
    : {
        objectFit: 'cover',
      }),
}))

export const ImageBackgroundFallback = styled('div', {
  name: 'ImageBackgroundFallback',
})<any>(({ theme, ...props }) => ({
  //Div Fix
  ...styles.removeDivExceptInIE.definition,
  //BG
  ...styles.backgroundImage.definition,
  //Inset
  inset: '0px',
  backgroundSize: 'cover',
  backgroundImage: `url(${props.src})`,
}))
