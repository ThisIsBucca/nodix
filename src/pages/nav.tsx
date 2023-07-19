import React from 'react'

export default function Nav () {

  return (
    <>
       <nav className='text-black gap-12 flex font- font-semibold mt-3 mb-3'>
            <a href="/" target='_blank' className='btn btn-outline btn-sm capitalize rounded-full ' >Recent</a>
            <a href="/" target='_blank' >Planning</a>
            <a href="/" target='_blank' >To-do</a>
            <a href="/" target='_blank' >In-progress</a>
            <a href="/" target='_blank' >Complete</a>
       </nav>
    </>
  )
}
