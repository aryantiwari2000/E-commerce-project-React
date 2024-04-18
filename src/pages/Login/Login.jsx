import React, { useState } from 'react'
import img3 from '../../assets/Gallary/img3.jpg'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { auth } from '../../FirebaseAuth/FirebaseAuth'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth/web-extension'

const Login = () => {

  const navigateHome= useNavigate();

  const[userSignup,setUserSignup]=useState({email:"",password:""})

   const handleChange=(e)=>{

  setUserSignup({...userSignup,[e.target.name]:e.target.value})
  console.log(userSignup)

   }

  const handleSubmit=()=>{

    if( !userSignup.email || !userSignup.password){
     
      return toast.error("All Feilds Required")
    }
    else{
      signInWithEmailAndPassword (auth, userSignup.email, userSignup.password)

    .then(async (res) => {const user = res.user

     navigateHome('/')

    })
    .catch((err) =>toast.error(err.message) );

    }
  }
  return (
   <div>
    <div className='relative'>
      <img src={img3} alt="" className=' object-cover w-full object-center h-[200px]' />
      <div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
      <h2 className=' absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl'>Login</h2>
    </div>
    
    <div className="container px-5 py-24 mx-auto flex">
    <div className="mx-auto bg-red-500 rounded-lg p-8 flex flex-col mt-8 md:mt-0 shadow-md text-white">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Login Form</h2>
      <p className="leading-relaxed mb-5 "></p>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm ">Email</label>
        <input autoComplete='off' type="text"  name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  value={userSignup.email} onChange={handleChange} />
      </div>
      <div className="relative mb-4">
      <label  className="leading-7 text-sm text-gray-600">Password</label>
        <input autoComplete='off' type="password"  name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={userSignup.password} onChange={handleChange}/>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit} > Login</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
      <p className=' text-white mt-5 text-xs '>
        Dont't have an account?{" "}
        <Link to='/signUp'>
        <button className='cursor-pointer hover:text-blue-100 '>
        Sign Up
        </button>
        </Link>
      </p>
    </div>
     </div>
    
   </div>

    
  )
}

export default Login

