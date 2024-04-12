import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";

const Service = () => {
  return (
    <>
    <div className=' container mx-auto px-5 flex py-11 gap-10 items-center justify-center flex-wrap' >
<div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] '><MdLocalShipping size={30} />
<p>Free Shiping</p></div>
<div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px]'><MdProductionQuantityLimits size={30}  />
<p>Authentic Products</p></div>
<div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px]'><TbTruckReturn size={30} />
<p>Easy Return</p></div>
<div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px]'><RiSecurePaymentFill size={30} />
<p>Secure Payment</p></div>
    </div>
    </>
  )
}

export default Service
