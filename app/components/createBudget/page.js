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


export function CreatBudget({handleBudget, budgetName, budgetAmount} ){  
  return (
    <>
        <section>
            <Card className="backdrop-blur-lg bg-blue-950/25">
                <CardHeader>
                    <CardTitle>Create Budget</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBudget} action="" className='flex flex-col gap-5'> 

                    {/* Budget name */}
                    <div className='flex flex-col gap-3'>
                      <Label htmlFor='budget-name'>Budget Name</Label>
                      <Input ref={budgetName}  placeholder='e.g. Groceries' type='text' id='budget-name' />
                    </div>

                    {/* Budget amount */}
                    <div  className='flex flex-col gap-3'>
                      <Label htmlFor='budget-name'>Amount</Label>
                      <Input ref={budgetAmount} placeholder='-----' type='number' id='budget-amount' />
                    </div>

                    <Button className='w-fit dark:bg-green-700 dark:text-white'>Create Budget</Button>
                  </form>
                </CardContent>
            </Card>
        </section>
    </>
  )
}


export default function Check4(){
  return(
    <>

    </>
  )
}