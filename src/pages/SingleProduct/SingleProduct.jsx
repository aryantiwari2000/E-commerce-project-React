import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const SingleProduct = () => {

    const{productId}=useParams()
    console.log(productId);
    const[singleProduct,setSingleProduct]=useState([])


    useEffect(()=>{

        const SingleProductFetch=async()=>{
    
          const res=  await axios(`https://dummyjson.com/products/${productId}`)
    
          setSingleProduct(res.data);
    
        }
        SingleProductFetch();
      },[productId])

  return (
    <div>
      <h2>Title:{singleProduct.title}</h2>
      <h2>Price:{singleProduct.price}</h2>

    </div>
  )
}

export default SingleProduct
