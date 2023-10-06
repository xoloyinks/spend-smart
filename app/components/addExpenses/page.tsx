"use client"

import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  



export default function NewExpenses() {
  return (
    <>
        <section>
            <Card className="backdrop-blur-lg bg-blue-950/25">
                <CardHeader>
                    <CardTitle>Add New Expenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <form action="" className='flex flex-col gap-5'> 

                   <div className='flex flex-col gap-5 sm:flex-row sm:justify-between'>
                     {/* Expenses name */}
                     <div className='flex flex-col gap-3 sm:w-[49%]'>
                      <Label htmlFor='expenses-name'>Expenses Name</Label>
                      <Input placeholder='e.g. Coffee' type='text' id='expenses-name' />
                    </div>

                    {/* Expenses amount */}
                    <div  className='flex flex-col gap-3 sm:w-[49%]'>
                      <Label htmlFor='expenses-amount'>Amount</Label>
                      <Input placeholder='$30' type='text' id='expenses-amount' />
                    </div>
                   </div>

                    {/* Select Category */}
                    <div  className='flex flex-col gap-3'>
                      <Label htmlFor='budget-category'>Budget Category</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>

                    <Button className='w-fit dark:bg-green-700 dark:text-white'>
                        Add Expenses
                    </Button>
                  </form>
                </CardContent>
            </Card>
        </section>
    </>
  )
}
