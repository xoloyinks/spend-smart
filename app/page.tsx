"use client"

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {MdDarkMode, MdLightMode} from "react-icons/md"
import {FaPiggyBank} from "react-icons/fa"
import Image from 'next/image'

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
      className={`w-fit absolute right-5 top-4 sm:top-2 p-2 rounded-md sm:text-4xl text-xl hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933] z-50 `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <MdDarkMode/> : <MdLightMode />}
    </button>
  );
};

export default function Home() {
  return (
    <>
        <ThemeSwitcher />
        <section className='w-screen relative h-screen overflow-x-hidden'>
            <div className='absolute rounded-lg bg-blue-500/50 h-[200px] w-[200px] top-[50%] left-[50%]'></div>
            <div className='absolute hidden dark:block rounded-lg bg-red-300/25 h-[200px] w-[200px] top-[20%] left-[10%]'></div>
            <div className='absolute hidden dark:block rounded-lg bg-blue-900/25 h-[400px] w-[700px] -top-[20%] left-[50%]'></div>

            {/* Content container */}
            <div className='absolute top-0 z-10 w-full h-full backdrop-blur-3xl  px-[20px]'>
              {/* NAV */}
              <nav className='w-full font-bold text-green-700 dark:text-green-500 py-4 flex text-xl items-center gap-3 text-'>
                <span className='text-4xl'><FaPiggyBank /></span>
                <span className='logo' >SpendSmart</span>
              </nav>

            </div>
        </section>
    </>
  )
}
