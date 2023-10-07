"use client"

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import {MdDarkMode, MdLightMode} from "react-icons/md"
import {FaPiggyBank} from "react-icons/fa"
import Image from 'next/image'
import CreatBudget from './components/createBudget/page';
import NewExpenses from './components/addExpenses/page';
import ExistingBudget from './components/exisitingBudgets/page';
import RecentExpenses from './components/recentExpenses/page';
import Footer from './components/footer/page';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }
  return (
    <button
      className={`w-fit absolute right-5 sm:right-[100px] top-8 sm:top-8 p-2 rounded-md sm:text-4xl text-xl hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933] z-50 `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <MdDarkMode/> : <MdLightMode />}
    </button>
  );
};



export default function Home() {
  const [budget, setBudget] = useState<any | null>("");
  const [expense, setExpense] = useState<any | null>(null);
  const [budgetArray, setBudgetArray] = useState<any | null>([]);
  const [expensesArray, setExpensesArray] = useState<any | null>([]);
  const budgetName = useRef<HTMLInputElement>(null);
  const budgetAmount = useRef<HTMLInputElement>(null);

  const expenseName = useRef<HTMLInputElement>(null);
  const expenseAmount = useRef<HTMLInputElement>(null);
  const expenseCategory = useRef <HTMLInputElement>(null);

  const handleBudget = (e : any) => {
    e.preventDefault();
    setBudgetArray([...budgetArray,{ budgetName: budgetName.current?.value, budgetAmount: budgetAmount.current?.value }]);
  }

  const handleExpenses = (e: any) => {
    const expenseTimeStamp = new Date();
    const expenseTime = expenseTimeStamp.toDateString();
    console.log(expenseTime)
    e.preventDefault();
    setExpensesArray([...expensesArray, { expenseName: expenseName.current?.value, expenseAmount: expenseAmount.current?.value, expenseCategory: expenseCategory.current?.value, expenseTime: expenseTime }]);
  }
  return (
    <>
        {/* Theme Switcher */}
        <ThemeSwitcher />

        {/* NAV */}
        <nav className='w-full fixed font-bold text-green-700 dark:text-green-500 px-[20px] sm:px-[100px] backdrop-blur-lg py-8 flex text-xl items-center gap-3 z-30 '>
          <span className='text-4xl'><FaPiggyBank /></span>
          <span className='logo' >SpendSmart</span>
        </nav>
        <section className='relative w-screen h-screen overflow-x-hidden'>
          
            <div className='fixed rounded-lg bg-blue-500/50 h-[200px] w-[200px] top-[50%] left-[50%]'></div>
            <div className='fixed hidden dark:block rounded-lg bg-red-300/25 h-[200px] w-[200px] top-[20%] left-[10%]'></div>
            <div className='fixed hidden dark:block rounded-lg bg-blue-900/25 h-[400px] w-[700px] -top-[20%] left-[50%]'></div>

            {/* Content container */}
            <div className='fixed overflow-y-scroll top-0 z-10 w-full h-full backdrop-blur-3xl px-[20px] sm:px-[100px]'>
              
              
              {/* Create and Add Budget */}
              <div className='flex flex-col gap-5 mt-32 sm:justify-between sm:flex sm:flex-row'>

                <div className='w-full sm:w-[45%]'>
                  <CreatBudget handleBudget={handleBudget} budgetName={budgetName} budgetAmount={budgetAmount} />
                </div>
                <div className='w-full sm:w-[45%]'>
                  <NewExpenses budgetArray={budgetArray} handleExpenses={handleExpenses} expenseName={expenseName} expenseAmount={expenseAmount} expenseCategory={expenseCategory} />
                </div>
                
              </div>

              <ExistingBudget budgetArray={budgetArray} />
              <RecentExpenses expensesArray={expensesArray} />
              <Footer />
            </div>
        </section>
    </>
  )
}
