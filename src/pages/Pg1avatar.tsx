import React from 'react'
import Image from 'next/image'
import ava from './../../public/ava.jpg'
import bitozi from './../../public/bitozi.jpg'
import  bucca from './../../public/bucca.png'
import  chui from './../../public/chui.jpg'

export default function Pg1avatar() {
    return (
        <div className='avatar-group -space-x-4 ring-page1-bg' >

            <div className="avatar border-radial">
                <div className="w-12 ">
                    <Image src={chui} alt='ava1'  priority />
                </div>
            </div>

            <div className="avatar border-radial">
                <div className="w-12 ">
                    <Image src={ava} alt='ava2'  priority />
                </div>
            </div>

            <div className="avatar border-radial">
                <div className="w-12 ">
                    <Image src={bitozi} alt='ava2'  priority />
                </div>
            </div>

            <div className="avatar border-radial">
                <div className="w-12 ">
                    <Image src={bucca} alt='ava2'  priority />
                </div>
            </div>

            <div className="avatar border-radial placeholder">
                <div className="w-12 bg-neutral-focus text-neutral-content">
                    <span>+396</span>
                </div>
            </div>

        </div>
    )
}
