
import React from 'react'

export default function Footer() {

    const date = new Date();
    const myDate = date.getFullYear();
  return (
    <>
        <section className='flex items-center w-full py-10'>
           <div>
           <span className='text-xl'> &copy;</span>
           <span>XOLO</span>
           <span className='px-3'>{myDate}.</span>
           </div>
           <div>
                <span>All Rights Reserved.</span>
           </div>
        </section>
    </>
)
}
