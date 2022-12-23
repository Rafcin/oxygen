/* eslint-disable @typescript-eslint/no-explicit-any */
import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme,
  Theme as MuiTheme,
} from '@mui/material/styles'
import {
  Baseline,
  Border,
  Breakpoints,
  ColorSchemes,
  Components,
  Opacity,
  Palette,
  Shape,
  Transitions,
  Typography,
  ZIndex,
} from '../../theme/types/theme'
import React from 'react'
import { dls } from '../../theme'

declare module '@mui/material/styles' {
  interface Theme {
    vars: Omit<
      MuiTheme,
      'typography' | 'mixins' | 'breakpoints' | 'direction' | 'transitions'
    >
    baseline: Baseline
    breakpoints: Breakpoints
    border: Border
    direction: string
    shape: Shape
    mixins: Components
    shadows: string[]
    typography: Typography
    transitions: Transitions
    zIndex: ZIndex
    prefix: string
    opacity: Opacity
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    overlays: any[]
    palette: Palette
    colorSchemes: ColorSchemes
  }
}

export const ThemeProvider: React.FC<any> = ({
  children,
  emotionCache,
}: {
  children: any
  emotionCache: EmotionCache
}) => {
  // Client-side cache, shared for the whole session of the user in the browser.
  const theme_ = experimental_extendTheme(dls as any)
  return (
    <CacheProvider value={emotionCache}>
      <CssVarsProvider defaultMode="system" theme={theme_}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </CacheProvider>
  )
}
