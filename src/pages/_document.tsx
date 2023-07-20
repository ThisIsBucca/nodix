
import { Html, Head, Main, NextScript } from 'next/document'
import { useState } from 'react'

export default function Document() {
       
  return (
    <Html lang="en" data-theme={'light'}>
      <Head />
      <body className='scroll-smooth'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )

}
