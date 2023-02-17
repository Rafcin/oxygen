import { createEmotionCache } from '@/styles/index'
import { api } from '@/trpc/api'
import { EmotionCache } from '@emotion/react'
import { Body, Content, Shell, ThemeProvider } from '@oxygen/design-system'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'intersection-observer'
import { SessionProvider } from 'next-auth/react'
import { type AppType } from 'next/app'
import { type Session } from 'next-auth'
import React from 'react'
import 'swiper/css'
import '../scripts/wdyr.ts'
import '../styles/styles.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const NextApp: AppType<{
  session: Session | null
  emotionCache?: EmotionCache
  settings?: any
}> = ({
  Component,
  pageProps: { emotionCache = clientSideEmotionCache, session, ...pageProps },
}) => {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <SessionProvider session={session}>
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

export default api.withTRPC(NextApp)
