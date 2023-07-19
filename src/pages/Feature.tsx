import React from 'react'
import { useState } from 'react'
import { AiOutlineCloseCircle, AiOutlineVerified } from 'react-icons/ai'
import { FaCheck, FaDollarSign } from 'react-icons/fa'
import { MdOutlineVerified, MdVerified, MdVerifiedUser } from 'react-icons/md'

export default function Feature({res,plan,amount,dolcolor='text-black', hed='text-slate-600',foro, order }) {
  
  const pro={
    list:[ ['Unlimited projects',true],['Unlimited assets',true],['Log history',true],['Priority support',false]],
    boda:'outline'
  };

  const basic = {
    list:[['5 projects',true],['100 assets',true],['Log history',false],['Priority support',false]],
    boda:'outline'
  };
  
  const enterprise = {
    list:[['Unlimited projects',true],['Unlimited assets',true],['Log history',true],['Priority support',true]],
    boda:'outline'
  };
  
  const plans = [basic,pro,enterprise];
  const pla = plans[order]||plans[0];


  // check and close icons
  const check = <FaCheck size={19} className='text-green-500 inline mr-2'/> 
  const close = <AiOutlineCloseCircle size={19} className='text-error inline mr-2' /> 

  return (
    <div className={`w-72 h-full  flex flex-col border-2 ${(res.radioB === true && plan !== 'Pro')?'border-black':''} justify-around items-center ${(res.radioA === true && plan === 'Pro')?'border-blue-600':''} shadow-2xl `}>

         <div className='' >
         <h1 className={`text-4xl ${hed} block font-semibold`}>{plan}</h1>
         <p className={`text-lg font-semibold text-slate-600`}>{foro}</p>
         </div>
         
         <div className='w-3/5'>
            <h1 className={`text-5xl ${dolcolor} block font-bold float-left mr-2`} >
                <FaDollarSign size={24} className={` align-super inline`}/>
                {amount}</h1>
            <p className='text-xs ml mt-2' >per user/month billed annually</p>
         </div>

         <ul className='text-sm flex flex-col gap-4'>
             {  pla.list.map((x)=><li key={x}>{(x[1])?check:close}{x[0]}</li>) }
         </ul>

         <button type='button' className={`btn rounded-none  ${(plan === 'Pro')?'bg-blue-600 border-none':'btn-outline'}  px-10`}>Get started</button>
       
    </div>
  )
}
