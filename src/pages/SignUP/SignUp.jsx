import React from 'react'
import img3 from '../../assets/Gallary/img3.jpg'


const SignUp = () => {
  return (
    <div>
    <div className='relative'>
      <img src={img3} alt="" className=' object-cover w-full object-center h-[200px]' />
      <div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
      <h2 className=' absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl'>SignUp</h2>
    </div>
    
    <div className="container px-5 py-24 mx-auto flex">
    <div className="mx-auto bg-red-500 rounded-lg p-8 flex flex-col mt-8 md:mt-0 shadow-md text-white">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Sign Up</h2>
      <p className="leading-relaxed mb-5 text-gray-600"></p>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text"  name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600">Password</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign up</button>
      <p className="text-xs text-gray-500 mt-3"></p>
      <p className=' text-white mt-5 text-xs '>
        Do have an account?
        <button className='cursor-pointer hover:text-blue-100 '>
        Login
        </button>
      </p>
    </div>
     </div>
    
   </div>
  )
}

export default SignUp