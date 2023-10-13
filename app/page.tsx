"use client"

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { ToastContainer, toast } from 'react-toastify';
import {MdDarkMode, MdLightMode} from "react-icons/md"
import {FaPiggyBank} from "react-icons/fa"
import CreatBudget from './components/createBudget/page';
import NewExpenses from './components/addExpense/page';
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


interface Budget {
  budgetName: string;
  budgetAmount: string;
  budgetId: number;
  amountSpent: number;
}

interface Expense {
  expenseName: string;
  expenseAmount: string;
  expenseCategory: string;
  expenseTime: string;
}


const Home : React.FC = () => {
  const [expense, setExpense] = useState<number[]>([]);
  const [budgetId, setBudgetId] = useState<number>(0);
  const [budgetArray, setBudgetArray] = useState<Budget[]>([]);
  const [expensesArray, setExpensesArray] = useState<Expense[]>([]);
  
  var amountSpent = 0;

  const budgetName = useRef<HTMLInputElement>(null);
  const budgetAmount = useRef<HTMLInputElement>(null);

  const expenseName = useRef<HTMLInputElement>(null);
  const expenseAmount = useRef<HTMLInputElement>(null);
  const expenseCategory = useRef<HTMLInputElement>(null);



  const handleBudget  = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBudgetId(budgetId + 1);
    setBudgetArray([...budgetArray,{ budgetName: budgetName.current?.value || '', budgetAmount: budgetAmount.current?.value || '', budgetId: budgetId, amountSpent: amountSpent, }]);
    setExpense([...expense, 0]);
    toast("Budget Created Successfully ✅")
  }

  const handleExpenses = (e : React.FormEvent<HTMLFormElement>) =>  {
    const expenseTimeStamp = new Date();
    const expenseTime = expenseTimeStamp.toDateString();
    e.preventDefault();
    toast("Epense Added ✅")

    budgetArray.map((datum) => {
      if(datum.budgetName === expenseCategory.current?.value){
        let id = datum.budgetId;
        datum.amountSpent = expense[id] + parseInt(expenseAmount.current?.value || '0');
        const expenses = [...expense];
        expenses[id] = datum.amountSpent;
        setExpense(expenses);
      }

    
    })


    setExpensesArray([...expensesArray, { expenseName: expenseName.current?.value || '', expenseAmount: expenseAmount.current?.value || '', expenseCategory: expenseCategory.current?.value || '', expenseTime: expenseTime }]);
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
            <ToastContainer className='z-50 mt-20' />
              
              
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
};


export default Home;