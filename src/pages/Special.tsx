import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import { FaDev } from 'react-icons/fa'

export default function Special(props:any) {
  return (
    <div className='flex mt-10  flex-col justify-center items-center  w-64 lg:w-64 gap-2 lg:mt-0'>

      <div className='w-10 h-10 flex items-center justify-center bg-slate-300 rounded-lg'> 

      {props?.ico}

      </div>

      <h3 className='text-xl font-bold'>{props.heading}</h3>

    <p className='text-center text-sm'>
         {props.ctent}
    </p>
       

    </div> 
  )
}
