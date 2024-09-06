import React from 'react';
import { ReactTyped } from "react-typed";


export default function Banner() {
  return (
    <div className='bg-[#0834d8] w-full py-[50px]'>
      <div className='max-w-[1240px] my-[100px] mx-auto text-center font-bold'>
        <div className='text-xl md:text-3xl p-[24px]'>
          Learn with Ahmad        
        </div>
        <h2 className='text-white text-5xl md:text-[80px] p-[24px]'>
          Grow with Ahmad
        </h2>
        <div className='text-[20px] md:text-[50px] p-[24px] text-white'>
          Learn<ReactTyped className= 'pl-3' strings={['Web','Enjoying']} typeSpeed={120} loop={true} />

          <br />
        </div>
        <button className='bg-black text-white p-3 rounded'>Get started</button>
      </div>
    </div>
  );
}
