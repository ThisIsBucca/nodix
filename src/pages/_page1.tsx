import React from 'react'
import Pg1avatar from './Pg1avatar'
import { motion, useScroll } from 'framer-motion'
import Navbar from './Navbar'

export default function Page1() {

    const { scrollYProgress } = useScroll();

    return (

        <div className='w-full h-screen   flex flex-col items-center justify-center gap-12 relative z-[1]' data-theme={'wireframe'}>

            <Navbar />

            <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, ease: 'easeOut' }} className='text-4xl mt-10 lg:text-7xl font-bold text-center  h-32  w-4/5'>
                <span className='text-nodix-primary'>Nodix</span> company
                <br />
                <span className='text-nodix-primary'>Hire</span> us you deserve <span className='text-nodix-primary'>better!</span>
            </motion.h1>

            <section className='w-full  flex flex-col items-center justify-center gap-8'>
                <Pg1avatar />

                <p className='lg:w-3/5  text-center'>Join 396+ <strong>developers</strong> supercharging their <br /> coding skills by building daily projects  </p>


                <a href='#anchor' title='start' type='button' className='btn bg-nodix-primary border-0  px-6 normal-case text-lg'>
                    Get connected -- <span className='text-md'>it&apos;s free</span>
                </a>


            </section>

            <motion.div style={{ scaleX: scrollYProgress }} className='fixed origin-left top-0 left-0 w-full h-1 bg-nodix-primary'>
            </motion.div>



        </div>
    )
}
