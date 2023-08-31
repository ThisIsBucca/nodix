
import React, {useEffect} from 'react'
import Page1 from './_page1'
import Page2 from './_page2'
import Page3 from './_page3'
import Page5 from './_page5'
import Motto from './Motto'
import Lenis from '@studio-freight/lenis'
import Table from './Table'
import WatwiDu from './WatwiDu'
import Confused from './Comfused'
import Head from 'next/head'

export default function Main() {


  useEffect(() => {
    const lenis = new Lenis({
      duration:1.2,
      easing: (t)=> Math.min(1,1.001-Math.pow(2,-10*t)),
      orientation:'vertical',
      gestureOrientation:'vertical',
      smoothWheel:true,
      infinite:false,
      touchMultiplier:2,
      smoothTouch:false,
      wheelMultiplier:1
    })

    lenis.on('scroll', (e: any) => {
      console.log(e)
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
       

  return (
   <div className='w-full  font-sans'  data-theme={'wireframe'} >
         <Head>
             <meta charSet='UTF-8'/>
             <link rel="icon" href="/favicon.ico" />
             <meta name='keywords' content='nodix, nodixinc, nordix ' />
             <meta name='author' content='nodixinc' />
             <meta name='theme-color' content='#0E0E0E'/>
             <meta name="referrer" content="no-referrer" />
             <meta name="format-detection" content="telephone=no" />
             <meta name="geo.region" content="TZ" />
             <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
         </Head>
         
        <Page1/>
        <WatwiDu/>
        <Confused/>
        <Page2/>
        <Table/>
        <Page3/>
        <Motto/>
        <Page5/>
   </div>
  )
}
