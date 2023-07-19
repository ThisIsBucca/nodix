import React from 'react'

export default function Page1temp() {
  return (
    <nav className='w-80 px-3 lg:w-96 h-14 lg:h-8 text-xs bg-slate-100 flex items-center justify-around rounded-2xl lg:rounded-lg'>
         <h3 className='text-lg font-bold mr-2'>Nod<span className='text-page1-btn'>ix</span></h3>
        <a href="#feature" className='no-underline text-slate-800 font-bold  hover:border-b-2 hover:border-b-page1-btn px-2'>Feature</a>
        <a href="#faqs" className='no-underline text-slate-800 font-bold hover:border-b-2 hover:border-b-page1-btn px-2'>Faqs</a>
        <a href="#testimonials" className='no-underline text-slate-800 font-bold hover:border-b-2 hover:border-b-page1-btn px-2'>Testimonials</a>
        <button className='btn btn-sm lg:btn-xs  bg-page1-btn capitalize border-0'>login</button>

    </nav>
  )
}
