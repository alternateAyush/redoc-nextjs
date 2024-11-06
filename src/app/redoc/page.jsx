"use client";
import { RedocStandalone } from "redoc";


export default function RedoxPage() {
  return (
    <div className='bg-white'>
      <RedocStandalone specUrl='/openapi.json' />
    </div>
  );
}
