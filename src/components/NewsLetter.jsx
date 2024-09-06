import React from 'react';

export default function NewsLetter(){


    return(
        <div className='bg-[#0834d8] p-4'>

            <div className=" max-w-[1240px] mx-auto md:flex justify-between py-[50px]">

                <div className='m-2'>

                    <h1 className=' text-[20px] md:text-[40px] font-bold text-white'>Want to learn with ahmad??</h1>
                    <span className='text-white'>
                        Sign up to my Instagram
                    </span>
                </div>

                <div className='m-2'>
                    <input type="text" className=' sm:w-full rounded mb-2 p-3 mr-2 text-slate-600' placeholder='Instagram' />
                    <button className='bg-black text-white p-3 rounded'>Get started</button>
                    <br />
                    <p className='text-white'>
                        We care about your Instagram and we will talk there. Read our <br/> <a href =""
                        className='text-black '>Privacy hehe</a>
                    </p>


                </div>


            </div>

            
            
        </div>
        
        
    )
}