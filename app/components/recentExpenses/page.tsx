import React from 'react'

export default function RecentExpenses() {
  return (
    <>
        <section>
        <h1 className='text-2xl font-bold'>Recent Expenses</h1>

        <div className='w-full overflow-x-scroll sm:overflow-hidden'>
          {/* Table head */}
            <div className='flex w-[1000px] mt-3 text-md'>
              <span className='w-[50%] font-semibold text-md'>Name</span>
              <span className='w-[50%] font-semibold'>Amount</span>
              <span  className='w-[50%] font-semibold'>Date</span>
              <span  className='w-[50%] font-semibold'>Budget</span>
              <span  className='w-[50%] font-semibold'></span>
            </div>

            {/* Table content */}
            <div className='flex  w-[1000px] py-3 text-md'>
              <span className='w-[50%] text-gray-400'>Clothes</span>
              <span className='w-[50%] text-gray-400 '>$23.43</span>
              <span className='w-[50%] text-gray-400 '>2/13/2023</span>
              <span className='w-[50%] text-center text-gray-400 rounded-full bg-slate-800'>Groceries</span>
              <button className='w-[50%] text-gray-400 '>remove</button>
            </div>
        </div>
        </section>
    </>
  )
}
