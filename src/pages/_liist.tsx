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
       <li className={`text-slate-100  h-auto flex  w-full justify-between  border-2 border-slate-800  py-2 ${props.borderLine} `}>
                  <div className='flex  flex-col  justify-between items-start w-4/5 '>
                      <h3 className='mb-3 text-lg  font-semibold'>{props.quest}<i className='text-page1-btn ml-1 font-bold' >?</i> </h3>

                      <div className={`${paragraph==='show'?'visible':'hidden'} text-slate-200 text-md  text-start mb-2`}>{props.sama}</div>

                  </div>

                  <button title='view' type='button' onClick={handleClick}>
                      {paragraph === 'show' ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </button> 
              </li>

   </>
  )
}
