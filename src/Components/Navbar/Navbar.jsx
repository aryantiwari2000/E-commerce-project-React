import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


const Navbar = ({cart , userName}) => {

  const[isOpen,setIsOpen]=useState(false)

  // const Toogleopen=()=>{
  //   setIsOpen(true)
  // }
  // const Toogleclose=()=>{
  //   setIsOpen(false)
  // }

const Togglechange=()=>{
  isOpen===false? setIsOpen(true):setIsOpen(false)
}

  // or we can use ternary oprator
  
 
  return (
    <div  >
      <header className=' bg-white border-b border-gray-200 relative'>
        <div className='container mx-auto flex justify-between items-center p-5 '>
          <div>
            <h3 className=' font-bold text-2xl'> 
            <Link to='/'>
              Mech<span className=' text-red-500'>Shop</span>
              </Link>
            </h3>
          </div> 
           <div className='hidden md:block'>
          <ul className=' flex items-center justify-center text-lg font-semibold '>
            <Link to='/'>
            <li className='mr-5 cursor-pointer hover: text-gray-900'>Home</li>
            </Link>
            <Link to= '/allproducts'>
            <li className='mr-5 cursor-pointer hover: text-gray-900'>All Products</li>
            </Link>
            <li className='mr-5 cursor-pointer hover: text-gray-900'>Mens</li>
            <li className='mr-5 cursor-pointer hover: text-gray-900'>Kids</li>
          </ul>
          </div>

          {
          isOpen?<div> <ul className=' flex flex-col text-2xl text-white font-semibold absolute z-10 bg-red-500 top-[73px] h-screen w-full left-0 justify-center items-center gap-10  '>
            <Link to='/'>
            <li className='mt-5 cursor-pointer hover: text-white-900'>Home</li>
            </Link>
            <Link to= '/allproducts'>
            <li className='mr-5 cursor-pointer hover: text-gray-900'>All Products</li>
            </Link> <li className='mt-5 cursor-pointer hover: text-white-900'>Mens</li>
            <li className='mt-5 cursor-pointer hover: text-white-900'>Kids</li>
          </ul>
          {/* <button className='absolute right-0 top-[75px] z-10 cursor-pointer py-2 px-4 '><RxCross1 size={30} onClick={Toogleclose} /></button> */}
          {/* for tennery oprator */}
          <button className='absolute right-0 top-[75px] z-10 cursor-pointer py-2 px-4 '><RxCross1 size={30} onClick={Togglechange} /></button>

          </div>:""

        }
          <div className='flex justify-center items-center gap-3 '>
          <Link to='/login'>
          <button className=' inline-flex bg-gray-100 px-3 py-1 hover:bg-gray-200 rounded text-base mt-4 md:mt-0 focus:out '>Login</button>
          </Link>

          <span>{userName}</span>
          <Link to='/cart'>
                <span>{cart.length}</span>
          <button><FaCartArrowDown size={25} /></button>
          </Link>
          {
          // isOpen?"":<button className='md:hidden'><GiHamburgerMenu size={30} onClick={Toogleopen}/></button>

           isOpen?"":<button className='md:hidden'><GiHamburgerMenu size={30} onClick={Togglechange}/></button>

          } 
          </div>
       
        </div>
      </header>
    </div>
  )
}

export default Navbar
