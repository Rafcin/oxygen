import { Appbar } from '@/content/controls/navigation/appbar'

import { EmotionCache } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'intersection-observer'
import { AppProps } from 'next/app'
import React from 'react'
import {
  Body,
  Content,
  createEmotionCache,
  Shell,
  ThemeProvider,
  InlineFooter,
  Footer,
} from '@oxygen/design-system'
import 'swiper/css'
import '../scripts/wdyr.ts'
import '../styles/styles.css'

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
    <ThemeProvider emotionCache={emotionCache}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        {/* <Hydrate state={pageProps.dehydratedState}> */}

        <Content>
          <Appbar />
          <Shell>
            <Body>
              <Component {...pageProps} data-application="true" />
            </Body>
          </Shell>
          <InlineFooter footerBlockedPages={['/create', '/edit', '/sandbox']} />
          <Footer
            footerBlockedPages={['/s', '/s?', '/create', '/edit', '/sandbox']}
          />
        </Content>

        {/* </Hydrate> */}
      </QueryClientProvider>
    </ThemeProvider>
  )
}
