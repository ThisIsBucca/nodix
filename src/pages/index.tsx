import React from 'react'
import Page1 from './_page1'
import Page2 from './_page2'
import Page3 from './_page3'
import Page4 from './_page4'
import Page5 from './_page5'

export default function Main() {
  return (
   <div className='w-full  bg-page1-bg' >
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
   </div>
  )
}
