/* eslint-disable @typescript-eslint/no-explicit-any */
import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme,
} from '@mui/material/styles'
import React from 'react'
import { dls } from '../../theme'

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
