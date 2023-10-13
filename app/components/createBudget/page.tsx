"use client"
import React from 'react'
import { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function CreatBudget(props : any ){  
  return (
    <>
        <section>
            <Card className="text-white bg-slate-700/75 backdrop-blur-lg dark:bg-blue-950/25">
                <CardHeader>
                    <CardTitle>Create Budget</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={props.handleBudget} action="" className='flex flex-col gap-5'> 

                    {/* Budget name */}
                    <div className='flex flex-col gap-3'>
                      <Label htmlFor='budget-name'>Budget Name</Label>
                      <Input ref={props.budgetName}  placeholder='e.g. Groceries' type='text' id='budget-name' />
                    </div>

                    {/* Budget amount */}
                    <div  className='flex flex-col gap-3'>
                      <Label htmlFor='budget-name'>Amount</Label>
                      <Input ref={props.budgetAmount} placeholder='-----' type='number' id='budget-amount' />
                    </div>

                    <Button className='bg-green-900 w-fit dark:bg-green-700 dark:text-white'>Create Budget</Button>
                  </form>
                </CardContent>
            </Card>
        </section>
    </>
  )
}
