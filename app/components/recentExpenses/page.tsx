import React from 'react'


interface Expense {
  expenseName: string;
  expenseAmount: string;
  expenseCategory: string;
  expenseTime: string;
}

export default function RecentExpenses(props : any) {

  function formatCurrency(number : number, locale = 'en-US', currency = 'USD') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(number);
  }

  return (
    <>
        <section className='mb-16'>
        <h1 className='text-2xl font-bold'>Recent Expenses</h1>

        <div className='w-full py-3 overflow-x-scroll sm:overflow-hidden'>
          {/* Table head */}
            <div className='flex py-2 w-[1000px] mt-3 text-md border-b-4 border-gray-400'>
              <span className='w-[50%] font-semibold text-md'>Name</span>
              <span className='w-[50%] font-semibold'>Amount</span>
              <span  className='w-[50%] font-semibold'>Date</span>
              <span  className='w-[50%] font-semibold'>Budget</span>
              
            </div>


            {
              props.expensesArray && props.expensesArray.map((datum : Expense , i : number) => {
                return(
                  <>
                    <div key={i} className='flex items-center  w-[1000px] py-3 dark:text-gray-400 text-md text-black'>
                      <span className='w-[50%]'>{datum.expenseName}</span>
                      <span className='w-[50%] '>{formatCurrency(parseInt(datum.expenseAmount))}</span>
                      <span className='w-[50%] '>{datum.expenseTime}</span>
                      <span className='w-[50%] text-center text-white dark:text-gray-400 rounded-full bg-slate-800 py-3 text-[12px]'>{datum.expenseCategory}</span>
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
