import { createEmotionCache } from '@/styles/index'
import { trpc } from '@/trpc/api'
import { EmotionCache } from '@emotion/react'
import { Body, Content, Shell, ThemeProvider } from '@oxygen/design-system'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'intersection-observer'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import React from 'react'
import 'swiper/css'
import '../scripts/wdyr.ts'
import '../styles/styles.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface Base extends AppProps {
  emotionCache?: EmotionCache
  settings?: any
}

function NextApp(props: Base) {
  const {
    Component,
    pageProps: { emotionCache = clientSideEmotionCache, ...pageProps },
  } = props as any
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider emotionCache={emotionCache}>
          <Content>
            <Shell>
              <Body>
                <Component {...pageProps} data-application="true" />
                <ReactQueryDevtools initialIsOpen={false} />
              </Body>
            </Shell>
          </Content>
        </ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default trpc.withTRPC(NextApp)
