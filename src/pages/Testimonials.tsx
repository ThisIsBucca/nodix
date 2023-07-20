import React from 'react'
import Image from 'next/image'
import ava from './../../public/ava.jpg'
import bitozi from './../../public/bitozi.jpg'
import  bucca from './../../public/bucca.png'
import { FaArrowAltCircleLeft, FaFacebook, FaInstagram, FaLocationArrow, FaRegArrowAltCircleLeft, FaTwitter } from 'react-icons/fa'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { CgArrowLeft } from 'react-icons/cg'
import { BiLeftArrowAlt, BiLeftArrowCircle, BiLeftIndent, BiRightArrowAlt } from 'react-icons/bi'

export default function Testimonials(props:any) {


  return (
      <div className={`flex flex-col items-center justify-center  gap-4 w-4/5  py-2 carousel-item`} id={props.id}>
       
          <p  className='text-center font-semibold text-sm lg:text-lg  w-full '> 
             &quot;
             {props.quot}
             &quot;
         </p>
       


          <div className="avatar ">
              <div className="w-12 rounded-full ">
                  <Image src={props.name} alt='ava1'  priority />
              </div>
          </div>

          <p className='font-bold'>{props.host}</p>

      </div>
  )
}
