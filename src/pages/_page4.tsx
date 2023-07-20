import React from 'react'
import Testimonials from './Testimonials'
import chui from './../../public/chui.jpg'
import bitozi from './../../public/bitozi.jpg'
import bucca from './../../public/bucca.png'

export default function Page4() {
    return (

        <div className='w-full h-screen  bg-slate-100 flex flex-col items-center justify-around pb-4 gap-2 z-[18] relative ' id='testimonials'>
            <h4 className='font-bold text-sm'>TESTIMONIALS</h4>
            <h2 className='font-bold text-3xl'>What others have said</h2>

            <div className='carousel items-start carousel-center  w-4/5 gap-10  py-3'>

                <Testimonials 

                id='item1' 
                name={bitozi} 
                host='john doe' 
                quot={`This is the single most mind-blowing tech company  i've ever seen. hire nodix you deserve better`}

                />

                <Testimonials
                 id='item2' 
                 name={bucca} 
                 host='Bucca prezdz' 
                 quot={`Nodix  strive to be at the forefront of what is possible and delivering cutting-edge products and services that meet the evolving needs of their customers.`}
                 />

                <Testimonials 
                id='item3' 
                name={chui} 
                host='Revaycolizer' 
                quot={`The company's focus is on developing products that are user-friendly, efficient, and cost-effective. `}

                />
              
            </div>


            <section className='flex flex-col justify-center gap-4 items-center'>
                <h3 className='text-2xl font-bold'>Join the hub now!</h3>

                <button title='join' type='button' className=' mx-4 btn border-0 normal-case bg-page1-btn '>Get started</button>
            </section>


        </div>
    )
}
