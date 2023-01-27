import { Appbar } from '@/content/controls/navigation/appbar'

import { EmotionCache } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'intersection-observer'
import { AppProps } from 'next/app'
import React from 'react'
import {
  Body,
  Content,
  Shell,
  ThemeProvider,
  InlineFooter,
  Footer,
} from '@oxygen/design-system'
import 'swiper/css'
import '../scripts/wdyr.ts'
import '../styles/styles.css'
import { footerConfig } from '@/config/footer'
import { createEmotionCache } from '@/styles'
import { CacheProvider } from '@emotion/react'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface Base extends AppProps {
  emotionCache?: EmotionCache
  settings?: any
}

export default function NextApp(props: Base) {
  const {
    Component,
    pageProps: { emotionCache = clientSideEmotionCache, ...pageProps },
  } = props as any
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider emotionCache={emotionCache}>
          <Content>
            <Appbar />
            <Shell>
              <Body>
                <Component {...pageProps} data-application="true" />
              </Body>
            </Shell>
            <InlineFooter isFooterAllowedOnPage={true} footerConfig={footerConfig} />
            <Footer isFooterAllowedOnPage={true} footerConfig={footerConfig} />
          </Content>
        </ThemeProvider>
      </QueryClientProvider>
    </CacheProvider>
  )
}
