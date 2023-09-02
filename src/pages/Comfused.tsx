import {motion, useScroll} from 'framer-motion'
import { FaLongArrowAltDown } from 'react-icons/fa';
export default function Confused () {

    const {scrollYProgress} = useScroll();

    return(
        <div  className='w-full h-auto py-10  z-1 lg:mb-48' data-theme={'wireframe'} >

            <div className="w-full flex flex-col items-center justify-center gap-10" >
            
                 <h2 className='text-4xl lg:text-7xl w-3/5 text-center font-bold uppercase '><span className='text-nodix-primary'>confused!</span> get some brief of what we do, down here </h2>

                 <FaLongArrowAltDown className='text-3xl lg:text-5xl text-nodix-primary'/>
         
            </div>
             
        </div>
    )
}
