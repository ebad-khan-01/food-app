import React from 'react'
import swiggy from "../assets/swiggy.svg"
import { IoCaretDown } from "react-icons/io5";
import { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { PiSignInBold } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
    const [toggle, setToggle] = useState(false)

    const showSideMenu = (()=>{
      setToggle(true)  
    })
    const pataNahi = (()=>{
        setToggle(false)
    })

    const links = [
         {  
            icon:<IoSearchOutline />,
            name:"search"
         },
         {  
            icon:<CiDiscount1 />,
            name:"officers",
            sup: "new"
         },
         {  
            icon:<IoSearchOutline />,
            name:"help"
         },
         {
            icon: <PiSignInBold />,
            name: "sign in"
         },
         {
            icon: <FaShoppingCart  />,
            name: "cart"
         }
     
    ]
  return (
<>
<div className='black-overlay w-full h-full fixed duration-500' onClick={pataNahi} style={{
    opacity: toggle ? 1 : 0, 
    visibility : toggle ? "visible" : "hidden" 
}}>
    <div className="w-[400px] h-full bg-white duration-[400ms] absolute" onClick={(e)=>{
        e.stopPropagation()
    }} style={{
        left : toggle ? "0%" : "-100%"
    }}></div>

</div>
    <header className='p-[8px] shadow-xl sticky top-0 bg-white z-[9999]'>
        <div className='max-w-[1200px] mx-auto flex items-center'>
            <div className="w-[45px]">
                <img src={swiggy} alt="" className='w-full ' />
            </div>
            <div className='px-8'>
                <span className='border-b-[3px] border-black font-bold'>lahore</span> islamabad, karachi, pakistan <IoCaretDown onClick={showSideMenu} fontSize={25} className='text-orange-400 inline'/>
            </div>

            <nav className='hidden md:flex ml-auto gap-5 list-none text-[18px] capitalize font-semibold'>
                {
                
                    links.map((item,index)=>(
                        <li key={index} className='flex items-center gap-2 hover:text-orange-400'>
                            {item.icon}
                            {item.name}
                            <sup>{item.sup}</sup>
                        </li>
                    ))
                }
            </nav>
        </div>
    </header>
</>
    
    

  )
}

export default Header