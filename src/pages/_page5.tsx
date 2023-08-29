import Image from 'next/image'
import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import {FaFacebook, FaInstagram} from 'react-icons/fa'


export default function Page5() {
  return ( 
    <div id="anchor" className='w-full h-screen lg:h-56   bg-pham flex flex-col lg:flex-row justify-center  lg:justify-around gap-5 items-center z-[20] '>

   

    <div className='w-auto lg:w-full h-4/5 lg:h-40   bg-pham flex flex-col lg:flex-row justify-center gap-14  lg:justify-around  items-start'>

    <Image
        src="/nodix.svg"
        alt="nodix Logo"
        className="hidden lg:visible"
        width={200}
        height={48}
        priority
      />
       
        <ul className='flex  flex-col  justify-center items-start font-semibold text-pham-text-primary' >
          <li className="text-3xl  font-bold flex gap-2 items-center capitalize  ">

            <Image
              src="/ic-contact-link-dark.svg"
              alt="nodix Logo"
              className=""
              width={10}
              height={10}
              priority
            />
            <a href='https://twitter.com/Nodix_Inc?t=QCeE-a9-1UJYnb9EpthkjA&s=09' target='_blank' rel='noopener'> twitter</a>
           
          </li>

          <li className="text-3xl  font-bold flex gap-2 items-center capitalize  ">

            <Image
              src="/ic-contact-link-dark.svg"
              alt="nodix Logo"
              className=""
              width={10}
              height={10}
              priority
            />
              <a href='https://instagram.com/nodix_inc?igshid=NTc4MTIwNjQ2YQ==' target='_blank' rel='noopener'>Instagram</a>
          </li>

          <li className="text-3xl  font-bold flex gap-2 items-center capitalize  ">

            <Image
              src="/ic-contact-link-dark.svg"
              alt="nodix Logo"
              className=""
              width={10}
              height={10}
              priority
            />
               <a href='https://www.facebook.com/profile.php?id=100092351478138&mibextid=2JQ9oc' target='_blank' rel='noopener'>Facebook</a>
          </li>

        </ul>

        <ul className='menu menu-horizontal bg-pham-text-primary rounded-box border-b-4 border-pham-btn'>

               <li>
               <a href='https://twitter.com/Nodix_Inc?t=QCeE-a9-1UJYnb9EpthkjA&s=09' target='_blank' rel='noopener'>
                   <AiOutlineTwitter className='text-3xl text-pham hover:text-pham-text-secondary hover:border-2 hover:border-pham-text-secondary  hover:rounded-full hover:p-1 ' />
                   </a>
               </li>

               <li>
               <a href='https://instagram.com/nodix_inc?igshid=NTc4MTIwNjQ2YQ==' target='_blank' rel='noopener'>
                   <FaInstagram className='text-3xl text-pham hover:text-pham-text-secondary hover:border-2 hover:border-pham-text-secondary  hover:rounded-full hover:p-1 ' />
                   </a>
               </li>

               <li>
               <a href='https://www.facebook.com/profile.php?id=100092351478138&mibextid=2JQ9oc' target='_blank' rel='noopener'>
                   <FaFacebook className='text-3xl text-pham hover:text-pham-text-secondary hover:border-2 hover:border-pham-text-secondary  hover:rounded-full hover:p-1 ' />
                   </a>
               </li>
            </ul>

         <div className='flex flex-col gap-8 lg:gap-2 items-start justify-center'>
             <section className=''>
              <h3 className='text-pham-text-primary'>Email</h3>
              <p className='text-pham-p text-sm'>hello@nodixinc.org</p>
              <p className='text-pham-p text-sm'>albinius.lucas@gmail.com</p>
             </section>

             <section className=''>
              <h3 className='text-pham-text-primary'>Phone</h3>
              <p className='text-pham-p text-sm'>+255 767 104 594</p>
              <p className='text-pham-p text-sm'>+255 620 464 036</p>
             </section>
            
         </div>

    </div>

          
    </div>
  )
}

