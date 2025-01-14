import React, { useState } from "react";
import{AiOutlineMenu,AiOutlineClose} from "react-icons/ai"



export default function Header(){

    const [toggle,setToggle] =useState(false);

    return(

        <div className='bg-[#0834d8]'>
            <div className='max-w-[1240px] py-[12px] items-centre flex justify-between mx-auto'>

                <div className='text-3xl font-bold'>
                    Ahmad
                </div>
                {
                    toggle ?
                    <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                    :

                    <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>



                }

               
                <ul className='hidden md:flex text-white gap-10'>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Resources
                    </li>
                    <li>
                        Contact 
                    </li>


                </ul>
                <ul
                   className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] 
                     ${toggle ? 'left-[0]' : 'left-[-100%]'}`
                    }>
                    <li className='p-3'>
                        Home
                    </li>
                    <li className='p-3'>
                        About
                    </li>
                    <li className='p-3'>
                        Resources
                    </li>
                    <li className='p-3'>
                        Contact 
                    </li>


                </ul>

                

            </div>



        </div>
    )
}   