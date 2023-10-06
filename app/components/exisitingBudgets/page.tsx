"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Progress } from "@/components/ui/progress"
import { Button } from '@/components/ui/button'

const tryToast = () => toast("Button clicked mumu!");

export default function ExistingBudget() {
  return (
    <>
        <section className='my-5'>
            <h1 className='text-2xl font-bold'>Existing Budgets</h1>

            <div className='rounded-xl my-3 text-sm py-3 px-5 border-4 border-blue-500/50 backdrop-blur-lg bg-blue-950/25 sm:w-[32%] '>
        <ToastContainer className='z-50' />

                <div className='flex justify-between font-semibold '>
                    <span className='text-md'>Groceries</span>
                    <span>$12,000 Budgeted</span>
                </div>
                <div className='py-3'>
                    <Progress value={33} />
                </div>
                <div className='flex justify-between text-gray-400'>
                    <span>$20 spent</span>
                    <span>$11,980 remaining</span>
                </div>
                <div className='mt-4'>
                    <Button onClick={tryToast} className='flex mx-auto'>View Details</Button>
                </div>

            </div>
        </section>
    </>
  )
}
