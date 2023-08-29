import React,{useEffect,useRef} from 'react'
import Pg1avatar from './Pg1avatar'
import {motion, useScroll,useMotionValue} from 'framer-motion'
import gsap from 'gsap'
import Navbar from './Navbar'

export default function Page1() {

         const {scrollYProgress} = useScroll();
         const x = useMotionValue(0);
         const juiceRef = useRef(null);
         const progressRef = useRef(null); 
         

         useEffect(():any=>{
           gsap.to(juiceRef.current,{
                ease:'bounce',
                duration:5,
                rotate:360,
                repeat:-1,
                yoyo:true
              })

              gsap.to(progressRef.current,{
                scaleX:window.scrollY,
                ease:'power3.inOut',
                duration:5
              })

        
            
         },[])

    return (

        <div className='w-full h-screen   flex flex-col items-center bg-pham-bg justify-center gap-12 relative z-[1]'>

            <Navbar/>
        
            <motion.h1 initial={{ opacity:0 }} whileInView={{ opacity:1 }} className='text-4xl mt-10 lg:text-7xl font-bold text-center text-pham-text-primary h-32  w-4/5'>
                <span className='text-pham-text-secondary'>Nodix</span> company
                <br />
                <span className='text-pham-text-secondary'>Hire</span> us you deserve <span className='text-pham-text-secondary'>better!</span>
            </motion.h1>

            <section className='w-full  flex flex-col items-center justify-center gap-8'>
                <Pg1avatar />

                <p className='text-pham-text-primary   lg:w-3/5  text-center'>Join 396+ <strong>developers</strong> supercharging their <br /> coding skills by building daily projects  </p>


                <motion.a href='#anchor' title='start' type='button' className='btn-outline btn border-2 border-pham-btn text-pham-text-primary px-6 normal-case text-lg'>
                    Get connected -- <span className='text-md'>it&apos;s free</span>
                </motion.a>


            </section>

            <motion.div style={{ scaleX:scrollYProgress }} className='fixed origin-left top-0 left-0 w-full h-1 bg-pham-btn'>
            </motion.div>

           

        </div>
    )
}
