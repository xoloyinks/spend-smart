"use client"

import React, { FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Budget {
  budgetName: string;
  budgetAmount: string;
  budgetId: number;
  amountSpent: number;
}

export default function NewExpenses(props : any){
  return (
    <>
        <section>
            <Card className="text-white backdrop-blur-lg dark:bg-blue-950/25 bg-slate-700/75">
                <CardHeader>
                    <CardTitle>Add New Expenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={props.handleExpenses} action="" className='flex flex-col gap-5'> 

                   <div className='flex flex-col gap-5 sm:flex-row sm:justify-between'>
                     {/* Expenses name */}
                     <div className='flex flex-col gap-3 sm:w-[49%]'>
                      <Label htmlFor='expenses-name'>Expenses Name</Label>
                      <Input ref={props.expenseName} placeholder='e.g. Coffee' type='text' id='expenses-name' />
                    </div>

                    {/* Expenses amount */}
                    <div  className='flex flex-col gap-3 sm:w-[49%]'>
                      <Label htmlFor='expenses-amount'>Amount</Label>
                      <Input ref={props.expenseAmount} placeholder='-----' type='number' id='expenses-amount' />
                    </div>
                   </div>

                    {/* Select Category */}
                    <div  className='flex flex-col gap-3'>
                      <Label htmlFor='budget-category'>Budget Category</Label>
                        <select className='flex items-center justify-between w-full h-10 px-3 py-2 text-sm border rounded-md bg-gray-400/25 dark:bg-background border-input ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' ref={props.expenseCategory}>
                              {
                                props.budgetArray && props.budgetArray.map((datum : Budget , i : number) => <option key={i} value={datum.budgetName}>{datum.budgetName}</option> )
                              }
                        </select>
                    </div>

                    <Button className='bg-green-900 w-fit dark:bg-green-700 dark:text-white'>
                        Add Expenses
                    </Button>
                  </form>
                </CardContent>
            </Card>
        </section>
    </>
  )
}
