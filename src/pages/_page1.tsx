import React from 'react'
import Pg1avatar from './Pg1avatar'
import Page1temp from './Page1temp'

export default function Page1() {

    return (

        <div className='w-full h-screen bg-page1-bg flex flex-col items-center justify-center gap-12 relative radial1 glod rounded-b-full z-[1] lg:rounded-b-none '>

            <Page1temp/>

            <h1 className='text-4xl lg:text-6xl font-bold text-center text-slate-100 h-32  w-4/5'>
             <span className='text-page1-btn'>Nodix</span> company 
                <br />
             <span className='text-page1-btn'>Hire</span> us you deserve <span className='text-page1-btn'>better!</span> 
           

            </h1>

            <section className='w-full flex flex-col items-center justify-center gap-8'>
                <Pg1avatar />

                <p className='text-slate-100   lg:w-3/5  text-center'>Join 396+ <strong>developers</strong> supercharging their <br /> coding skills by building daily projects  </p>

                <button title='start' type='button' className='btn border-0 normal-case bg-page1-btn px-8' >Start for FREE</button>

            </section>  
        
        </div>
    )
}
