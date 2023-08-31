import '@/styles/globals.css'
import '@/styles/custom.css'
import type { AppProps } from 'next/app'
import {DefaultSeo} from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <DefaultSeo
        title = "nodixinc - Hire us you deserve better"
        description='The official landing page of nodix company'
        openGraph={{
            type:'website',
            locale: 'en_TZ',
            url: 'https://nodixinc.org',
            siteName: 'NodixInc'
        }}

        twitter={{
          site: '@buccaprezdz333',
          handle: '@buccaprezdz333',
          cardType: 'summary_large_image'
        }
        }
    />

    <Component {...pageProps} />
    </>
   
  )
}
