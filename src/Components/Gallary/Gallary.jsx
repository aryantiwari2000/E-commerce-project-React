import React from 'react'
import img1 from  '../../assets/Gallary/img1.jpg'
import img2 from '../../assets/Gallary/img2.jpg'
import img3 from '../../assets/Gallary/img3.jpg'
import img4 from '../../assets/Gallary/img4.jpg'
import img5 from'../../assets/Gallary/img5.jpg'


const Gallary = () => {
  return (
    <>
    
      <section className="text-gray-600 body-font"/>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={img1}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery2" className="w-full object-cover h-full object-center block" src={img2}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery3" className="w-full h-full object-cover object-center block" src={img5}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery4" className="w-full h-full object-cover object-center block" src={img4}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery5" className="w-full object-cover h-full object-center block" src={img5}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={img1}/>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Gallary
