import React, { useEffect, useState } from 'react'
import axios from 'axios'
import img3 from '../../assets/Gallary/img3.jpg'



const AllProducts = ({AddToCart}) => {
  const[allCategory,setAllcatagory]=useState([])

  const[allProducts,setAllProducts]=useState([])
  const[selectProducts,setSelectProducts]=useState("")
  const[originalProducts,SetOriginalProducts]=useState([])


  // use for true false
    // const[product,setProducts]=useState([])
  // const[showProducts,setShowProducts]=useState(false)

  useEffect(()=>{

    const AllProducts=async()=>{

      const res=  await axios('https://dummyjson.com/products')

      setAllProducts(res.data.products);
      //used for filter function
      SetOriginalProducts(res.data.products);

    }
    AllProducts();
  },[])



useEffect(() => {

  const getAllProductCatagory = async()=>{
    try{
      const res= await axios('https://dummyjson.com/products/categories' )
      setAllcatagory(res.data);
    }catch(error){
      console.log(error)
    }
  }
  getAllProductCatagory();
  },[])

      //sigle products


  // useEffect(() => {


  //   const getAllProducts = async()=>{
  //     try{
  //       if(selectProducts){
  //         const res= await axios(`https://dummyjson.com/products/category/${selectProducts}`)
  //         setProducts(res.data.products);
  //       }
        
  //     }catch(error){
  //       console.log(error)
  //     }
  //   };
  //   getAllProducts();
  //   },[selectProducts])



    // const filterAllProducts=(allProducts)=>{
    //   setSelectProducts(allProducts);
    //   // setShowProducts(true)
    //  }

    const filterAllProducts=(selectcategory)=>{
    setSelectProducts(selectcategory);

      // const data = allProducts.filter((filterItems) => filterItems.category === selectcategory)
      // setAllProducts(data)

      const data = selectcategory? originalProducts.filter((filterItems) => filterItems.category === selectcategory) :
      originalProducts
      setAllProducts(data)
     };

  return (
    <>
    
      <div className='relative'>
      <img src={img3} alt="" className=' object-cover w-full object-center h-[200px]' />
      <div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
      <h2 className=' absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl'>All Products</h2>
    </div>
    
         {/* Catagory */}
        <div className='flex gap-3 flex-wrap'>
          <select onClick={(e)=>filterAllProducts(e.target.value)}>
            <option>Filter By Catagory</option>
          {allCategory.filter((filterItem)=>!["lighting","motorcycle","automotive","furniture"].includes(filterItem))


            .map((item,index)=>(
              <option value={item}>
              {/* <button className='bordor bg-black text-white px-2 py-2 mt-5' onClick={()=>filterAllProducts(allProducts)}>{allProducts}</button> */}
               {item}
            </option>
            ))
          }
        </select>
        </div>


        {/* Single Products */}
        {/* {        
        
        showProducts?  <div className=' flex gap-3 mt-3'>
        {product.map((item)=>(
          <div className='border-4'>
            <img src={item.thumbnail} alt="" />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.rating}</p>
          </div>
        ))
        } */}
                  {/* All Products */}

      {/* </div>:<div className=' flex gap-3 mt-3 flex-wrap'>
          {
           allProducts.map((AllItems,index)=>(
            <div className='border-4' key={index}>
                <img src={AllItems.thumbnail} alt="" />
              <p>{AllItems.title}</p>
              <p>{AllItems.price}</p>
              <p>{AllItems.rating}</p>
            </div>
           ))

          }
        </div>


        } */}

         {/* All Products */}

        <div className=' flex gap-3 mt-3 flex-wrap'>
          {
           allProducts.map((AllItems,index)=>(
            <div className='border-4' key={index}>
                <img src={AllItems.thumbnail} alt="" />

              <p>{AllItems.title}</p>
              <p>{AllItems.price}</p>
              <p>{AllItems.rating}</p>

              <button className=' bg-blue-500  ' onClick={()=>AddToCart(AllItems)}>
               Add to cart 
              </button>
            </div>
           ))

          }
        </div> 

      
     
      
    </>
  )
}

export default AllProducts
