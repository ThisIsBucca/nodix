import React from 'react'
import {motion, useScroll} from 'framer-motion'

export default function Page3() {
    
  const {scrollYProgress} = useScroll();


    return (
        <div className='w-full h-auto flex gap-10 flex-col justify-center items-center  py-12 z-[15]' id='faqs' data-theme={'wireframe'} >

            <h2 className='text-3xl  font-bold'>FAQ</h2>

            <ul className='w-4/5 flex flex-col gap-4'>

                <li tabIndex={0} className="collapse collapse-arrow border border-pham-text-primary bg-transparent origin-left">
                    <h2 className="collapse-title text-xl">
                    What about nodix?
                    </h2>
                    <div className="collapse-content">
                    <p>
                            &quot;Dear <span className='text-nodix-primary' >Client</span>, <br/>
                            At NODIX, we&apos;re dedicated to driving innovation through technology product development. As a startup company, we specialize in <span className='text-nodix-primary' >crafting cutting-edge solutions </span> that cater to your unique needs. Our services encompass the entire product lifecycle, from conceptualization and design to development and deployment. We pride ourselves on delivering tailored, forward-thinking solutions that empower your business <span className='text-nodix-primary' >empower your business </span> to thrive in today&apos;s dynamic market. Partner with NODIX to unlock the potential of technology and shape a brighter future for your business.
                    </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
