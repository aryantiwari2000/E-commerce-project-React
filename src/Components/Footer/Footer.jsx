import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <div className='w-full h-60 bg-black text-white '>
    <div className='grid grid-cols-2 md:grid-cols-5 pt-3'>
      <div >
         <h2 className=' mb-3 text-[30px] md:text-[25px]'><p>Mech<span className=''>Shop</span></p>
       </h2>
         <p className="text-[20px] md:text-[20px] mb-2 text-[grey]"></p> 
      </div>

      <div>
         <h2 className=' mb-3 text-[20px] md:text-[25px]' >Menu</h2>
         <p className="text-[20px] md:text-[20px] mb-2 text-[grey]">Info center</p> 
         <p className="text-[20px]  md:text-[20px] mb-2 text-[grey]">News Blog</p> 
         <p className="text-[20px] md:text-[20px] mb-2 text-[grey]">Login</p> 
         <p className="text-[20px] md:text-[20px] mb-2 text-[grey]">Features</p> 
      

      </div>

      <div>
         <h2 className=' mb-3 text-[20px] md:text-[25px]'>Company</h2>
         <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">About Us</p> 
         <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Privacy Policy</p> 
         <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Terms & Condition</p> 
         <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Login</p> 

      </div>

      <div>
         <h2 className='mb-3 text-[20px] md:text-[25px]'>Contact</h2>
         <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Contact Sales</p> 
         <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">+123456</p> 
         <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">News Blog</p> 
         <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">+2564789</p> 
      </div>
      <div>
         <h2 className=' mb-3 text-[20px] md:text-[25px]'>Tech Support</h2>
         <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Contact support</p> 
         <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Info center</p> 
         <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Activate</p>          
      </div>
    </div>
  </div>

     <div className='bg-red-500 text-white'>
     <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row' >
      <p className='text-sm text-center sm:text-left '>
      © 2024 MechShop -<span>@copyright</span>
      </p>
      <p className='inline-flex justify-center sm:justify-start mt-2 sm:mt-0 sm:ml-auto'> 
     <span><FaFacebook size={30} className='mr-5'/></span>
     <span><FaInstagramSquare size={30}className='mr-5'/></span>
     <span><FaTwitterSquare size={30} className='mr-5' /></span>       
      </p>
     </div>
     </div>
     </>
  )
}

export default Footer
