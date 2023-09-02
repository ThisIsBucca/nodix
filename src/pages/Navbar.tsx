import React from 'react'
import { FaSmile } from 'react-icons/fa'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='navbar  flex  fixed top-1 left-0  backdrop-blur-md border-0 border-t-0 border-x-0 z-[100]'  data-theme='wireframe'>
        <div className='flex-1'>
        <div className='h-10 w-40  flex items-center rounded-full justify-center'>
          
          <Image
                src="/nodix.svg"
                alt="nodix Logo"
                className=" mr-2 animate-pulse "
                width={200}
                height={48}
                priority
              />
  
          </div>
        </div>

        <div className='flex-none'>
            <button className='btn btn-square btn-ghost '>
                <FaSmile className='text-lg text-nodix-primary animate-bounce'/>
            </button>
        </div>

    </div>
  )
}
