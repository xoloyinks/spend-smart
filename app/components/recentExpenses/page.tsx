import React from 'react'

export default function RecentExpenses({expensesArray} : {expensesArray: any}) {

  function formatCurrency(number : number, locale = 'en-US', currency = 'USD') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(number);
  }

  return (
    <>
        <section>
        <h1 className='text-2xl font-bold'>Recent Expenses</h1>

        <div className='w-full py-3 overflow-x-scroll sm:overflow-hidden'>
          {/* Table head */}
            <div className='flex w-[1000px] mt-3 text-md'>
              <span className='w-[50%] font-semibold text-md'>Name</span>
              <span className='w-[50%] font-semibold'>Amount</span>
              <span  className='w-[50%] font-semibold'>Date</span>
              <span  className='w-[50%] font-semibold'>Budget</span>
              <span  className='w-[50%] font-semibold'></span>
            </div>


            {
              expensesArray && expensesArray.map((datum: any, i: number) => {
                return(
                  <>
                    <div key={i} className='flex  w-[1000px] py-3 text-md'>
                      <span className='w-[50%] text-gray-400'>{datum.expenseName}</span>
                      <span className='w-[50%] text-gray-400 '>{formatCurrency(datum.expenseAmount)}</span>
                      <span className='w-[50%] text-gray-400 '>{datum.expenseTime}</span>
                      <span className='w-[50%] text-center text-gray-400 rounded-full bg-slate-800'>{datum.expenseCategory}</span>
                      <button className='w-[50%] text-gray-400 '>remove</button>
                    </div>
                  </>
                )
              })
            }
        </div>
        </section>
    </>
  )
}
