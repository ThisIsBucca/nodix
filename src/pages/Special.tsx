import React from 'react'
import {motion, useScroll} from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa';

export default function Special(props: any) {

  const {scrollYProgress} = useScroll();

  return (
    <motion.div initial={{  opacity:0, y:30}} whileInView={{  opacity:1, y:0  }} transition={{duration:1,ease:'easeOut'}}   className='flex mt-10  flex-col justify-center items-center  w-64 lg:w-70 gap-2 lg:mt-0 border-2 rounded-xl px-5  py-2 border-pham-text-primary transition-transform hover:translate-x-2 motion-reduce:transform-none '>

      <div className='w-10 h-10 flex items-center justify-center '>
        
       <FaCheckCircle className='text-pham-text-secondary text-2xl'/>

      </div>

      <h3 className='text-xl text-center font-bold text-pham-text-primary'>{props.heading}</h3>
      
      <p className='text-center text-sm text-pham-text-primary'>
        {props.ctent}
      </p>


    </motion.div>
  )
}
