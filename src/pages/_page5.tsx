import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Page5() {
  return (
    <div className='w-full h-56 lg:h-28 bg-page1-bg flex flex-col lg:flex-row justify-center  lg:justify-around gap-5 items-center z-[20] relative'>

       <h3 className='text-2xl  font-bold text-white'>Nod<span className='text-page1-btn'>ix</span></h3>
       
       <section className='flex  flex-col lg:flex-row  text-sm justify-center items-center gap-4 text-slate-300 font-semibold' >
        <p>&copy; 2023 nodix, All right reserved</p>
        <p>Privacy Policy</p>
        <p>Terms of use</p>
       </section>

         <div className='flex gap-4 items-center justify-center'>
             <AiOutlineTwitter className='text-xl text-white'/>
             <FaDiscord className='text-xl text-white'/>
             <FaInstagram  className='text-xl text-white'/>
             <FaFacebook  className='text-xl text-white'/>
         </div>
    </div>
  )
}
