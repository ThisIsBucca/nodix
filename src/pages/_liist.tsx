import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export default function List(props:any) {
    let [paragraph, setParagraph] = useState('notShow');

    let handleClick = () => {
        if (paragraph === 'notShow') {
            setParagraph('show')
        } else {
            setParagraph('notShow')
        }
    }
  return (
   <>
       <li className={`text-pham-text-secondary  h-auto flex  w-full justify-between  border-2 border-text-pham-text-primary  py-2 ${props.borderLine} `}>
                  <div className='flex text-pham-text-primary flex-col  justify-between items-start w-4/5 '>

                      <h3 className='mb-3 text-lg  font-semibold text-pham-text-secondary'>{props.quest}<i className=' ml-1 font-bold text-pham-text-secondary' >?</i> </h3>

                      <div className={`${paragraph==='show'?'visible':'hidden'} text-md  text-start mb-2 `}>
                        {props.sama}
                      </div>

                  </div>

                  <button title='view' type='button' onClick={handleClick} className='text-pham-text-primary'>
                      {paragraph === 'show' ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </button> 

              </li>

   </>
  )
}
