import {motion, useScroll} from 'framer-motion'
export default function Confused () {

    const {scrollYProgress} = useScroll();

    return(
        <div  className='w-full h-screen bg-pham-btn  z-1 lg:mb-48'>

            <div className="w-full flex flex-col items-center justify-center  h-full bg-transparent backdrop-blur-sm gap-10 z-10">
            
                 <motion.h2 initial={{  y:150, opacity:0  }} whileInView={{  y:0, opacity:1 }} transition={{duration:1,ease:'easeOut'}} className='text-5xl lg:text-7xl w-3/5 text-center font-bold  text-pham  uppercase '>confused! get some brief of what we do, down here </motion.h2>
         
            </div>
             
        </div>
    )
}
