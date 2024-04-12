import React from 'react'
 import banner from '../../assets/banner.jpg'
const HomeSection = () => {
  return (
    <>
    <div className='relative'>
      <div>
        <img src={banner} alt="" className='w-full object-center' />
      </div >
    </div>
    <div className='absolute top-[30%] left-[50%]'>
        <h1 className='text-5xl font-bold text-[red]'>Discover Your Next Adventure !</h1>
        <p className='text-center font-semibold mt-5 text-2xl'>Shop Our Latest Arrival & Unleash Your Style</p>
    </div>
    </>
  )
}

export default HomeSection
