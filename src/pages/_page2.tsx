import React from 'react'
import Special from './Special'
import { FaDev, FaHtml5, FaLaptopCode } from 'react-icons/fa'
import { BiDesktop } from 'react-icons/bi'

export default function Page2() {

  let wdev = <FaDev className='text-page1-bg text-xl'/>
  let design = <BiDesktop className='text-page1-bg text-xl'/>
  let pshop =  <FaHtml5 className='text-page1-bg text-xl' />

  return (
    <div className='w-full h-auto  pb-10 pt-10   flex gap-2  flex-col  justify-center items-center  lg:gap-10 bg-slate-100 lg:h-96 z-[10] relative  ' id='feature'>
        <h4 className='font-bold text-sm'>FEATURES</h4>
        <h2 className='text-2xl lg:text-3xl font-bold'>What makes nodix special</h2>
             
             <section className='w-full  pb-4  flex flex-col lg:flex-row items-center   lg:place-content-around lg:items-start  lg:mb-0 lg:pb-0'>
             <Special 
             heading= 'Web development'
             ico = {wdev}
             ctent= 'HTML, CSS(bootstrap, tailwindcss), javascript(React, Node, Express, Mongodb)? you name it. we have it all covered!'
              />

             <Special  
             heading= 'Responsive Design' 
             ico = {design}
             ctent= {`In 2023 you can't go online without having a mobile responsive website. let us take care of that for you`}
             />

             <Special  
             heading= 'PSD to HTML'
             ico = {pshop}
             ctent= {`Do you have a nice design in photoshop or even sketch? contact us and we'll convert them into fully responsive, nice looking websites!`}
              />
             </section>
       
    </div>
  )
}
