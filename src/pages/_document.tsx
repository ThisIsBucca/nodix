
import { Html, Head, Main, NextScript } from 'next/document'

import type { Metadata } from 'next'


export default function Document() {
       
  return (
    <Html lang="en" data-theme={'dark'}>
      <Head />
      <body className='scroll-smooth '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )

}
