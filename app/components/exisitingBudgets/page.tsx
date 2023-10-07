"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Progress } from "@/components/ui/progress"
import { Button } from '@/components/ui/button'

const tryToast = () => toast("Button clicked mumu!");


export default function ExistingBudget({budgetArray} : {budgetArray: any}) {

    function formatCurrency(number : number, locale = 'en-US', currency = 'USD') {
        return new Intl.NumberFormat(locale, {
          style: 'currency',
          currency: currency
        }).format(number);
      }
      
  return (
    <>
        <section className='my-5'>
            {
                budgetArray.length === 0 ? "" : <h1 className='text-2xl font-bold'>Existing Budgets</h1>
            }

            <ToastContainer className='z-50 mt-20' />

           <div className='gap-5 sm:flex-wrap sm:flex'>
                {
                    budgetArray.map((datum : any, i : any) => {
                        let budgeted = formatCurrency(datum.budgetAmount);
                        let spent = formatCurrency(datum.amountSpent);
                        let remaining = datum.budgetAmount - datum.amountSpent;

                        let percentage = (100 * datum.amountSpent)/datum.budgetAmount;
                        return(
                            <>
                                <div key={i}  className='rounded-xl my-3 text-sm py-3 px-5 shadow-sm shadow-slate-500 bordedr-4 border-blue-5d00/50 backdrop-blur-lg bg-blue-950/25 sm:w-[32%] '>
                                    <div className='flex justify-between font-semibold '>
                                        <span className='text-md'>{datum.budgetName}</span>
                                        <span>{budgeted} Budgeted</span>
                                    </div>
                                    <div className='py-3'>
                                        <Progress value={percentage} />
                                    </div>
                                    <div className='flex justify-between text-gray-400'>
                                        <span>{spent} spent</span>
                                        <span>{formatCurrency(remaining)} remaining</span>
                                    </div>
                                    <div className='mt-4'>
                                        <Button onClick={tryToast} className='flex mx-auto'>View Details</Button>
                                    </div>

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





  