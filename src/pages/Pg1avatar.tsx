import React from 'react'
import Image from 'next/image'
import boy1 from './../../public/boy1.jpg'
import gal1 from './../../public/gal1.jpg'
import  bucca from './../../public/bucca.png'
import  boy2 from './../../public/boy2.jpg'
import  boy3 from './../../public/boy3.jpg'
import  boy5 from './../../public/boy5 (2).jpg'
import {motion} from 'framer-motion'

export default function Pg1avatar() {
    return (
        <div className='avatar-group -space-x-4 ring-pham-bg z-[90]' >
               

            <div className="avatar border-pham-bg">
                <div className="w-16 ">
                    <Image src={gal1} alt='ava1'  priority />
                </div>
            </div>

            <div className="avatar  border-pham-bg">
                <div className="w-16 ">
                    <Image src={bucca} alt='ava2'  priority />
                </div>
            </div>

            <div className="avatar border-pham-bg">
                <div className="w-16 ">
                    <Image src={boy2} alt='ava2'  priority />
                </div>
            </div>

            <div className="avatar border-pham-bg">
                <div className="w-16 ">
                    <Image src={boy3} alt='ava2'  priority />
                </div>
            </div>

            <div className="avatar border-pham-bg placeholder">
                <div className="w-16 bg-pham-text-primary font-bold">
                    <span className='text-xl text-pham'>+396</span>
                </div>
            </div>

        </div>
    )
}
