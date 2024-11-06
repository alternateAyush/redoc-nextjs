import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";

const itemCss =
  "p-1 rounded-lg hover:bg-[rgba(255,255,255,0.8)] hover:text-[rgb(38,50,56)]";
const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between fixed top-0 p-4 px-8 text-white box-border w-full z-50 bg-[rgb(38,50,56)] shadow-md shadow-[rgba(0,0,0,0.4)] font-bold'>
      <div className="flex flex-row items-center space-x-2">
        <img src="/assets/logo.png" className="h-[15px] w-[15px] md:h-[25px] md:w-[25px] rounded-full p-[0.5px] bg-white border border-white"/>
        <span className="text-md md:text-lg">OpenAI API (2.3.0)</span>
      </div>
      <div>
        <ul className='flex flex-row space-x-4 items-center text-xs font-semibold'>
          <li className={itemCss}>
            <Link href='/redoc/custom'>Home</Link>
          </li>
          <li className={itemCss}>
            <Link href='/redoc/custom'>About</Link>
          </li>
          <li className={itemCss}>
            <Link href='/redoc/custom' className="text-sm md:text-lg"><IoMenu/></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
