"use client";
import { RedocStandalone } from "redoc";


export default function RedoxPage() {
  return (
    <div className='bg-white mt-[50px] md:mt-[60px]'>
      <RedocStandalone specUrl='/openapi.json' />
    </div>
  );
}
