import React from 'react';
import spi from "../assets/img/spi.png";

export default function Experts(){


    return(

        <div className='max-w-[1240px] p-2 my-10 mx-auto md:grid grid-cols-2'>

            <div className=' col-span-1 md:w-[80%] text-center'>
                <img src={spi} alt="" className='inline'/>
            </div>
            <div className=' col-span-1 flex flex-col justify-center'>
                <h1 className='text-[#00df9A] font-bold my-2'>Learn from ahmad</h1>

                <p className='my-2 text-justify'>
                    Ahmad is from ucp and has completed a 4 year journey with a 3.26cgpa which was not
                    possible
                </p>

                <button className='w-[30%] bg-black text-white p-3 rounded'>Get started</button>
            </div>


        </div>
    )
}