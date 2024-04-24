import React, { useEffect, useState } from 'react'
import axios from 'axios'
import img3 from '../../assets/Gallary/img3.jpg'



const AllProducts = ({AddToCart}) => {
  const[allCategory,setAllcatagory]=useState([])

  const[allProducts,setAllProducts]=useState([])
  const[selectProducts,setSelectProducts]=useState("")
  const[originalProducts,SetOriginalProducts]=useState([])

  const [searchItem, setSearchItem]=useState("")
  const[minPrice, setMinPrice]= useState("")
  const[maxPrice, setMaxPrice]= useState("")



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

   

    const filterAllProducts=(selectcategory)=>{
    setSelectProducts(selectcategory);

      const data = selectcategory? originalProducts.filter((filterItems) => filterItems.category === selectcategory) :
      originalProducts
      setAllProducts(data)
     };

     //search Products
     const handleSearchItem=()=>{
      const searchProduct= originalProducts.filter((searchFilterItems)=>{
        searchFilterItems.title.toLowerCase().includes(searchItem.toLowerCase())
  
  
       })
       setAllProducts(searchProduct);



     }

     //Price Filter

     const handlePrice=()=>{

      let min = parseFloat(minPrice)
      let max = parseFloat(maxPrice)

      const filterPrice=originalProducts.filter((priceItem)=>{
        (!min || priceItem.price>=min) && (!min ||priceItem.price<=max)
      })
      setAllProducts(filterPrice);


     }

  return (
    <>
    
      <div className='relative'>
      <img src={img3} alt="" className=' object-cover w-full object-center h-[200px]' />
      <div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
      <h2 className=' absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl'>All Products</h2>
    </div>
    
         {/* Catagory */}
        <div className='flex gap-3 flex-wrap'>
          <select onChange={(e)=>filterAllProducts(e.target.value)}>
            <option>Filter By Catagory</option>
          {allCategory.filter((filterItem)=>!["lighting","motorcycle","automotive","furniture"].includes(filterItem))
              .map((item,index)=>(
              <option value={item} key={index}>
               {item}
            </option>
            ))
          }
        </select>
        </div>
       {/* search item */}
        <div className='text-center mt-3 text-2xl'>
          <input placeholder='search item' className='bordor-4 px-2 py-2' onChange={(e)=>setSearchItem(e.target.value)} value={searchItem} />
          <button className='bg-black text-white px-2 py-2 ml-4 rounded-md' onClick={handleSearchItem}>Search Products</button>
        </div>
         {/* product filter by price */}
        <div className='text-center mt-3'>
          <input
           placeholder='min price' 
           className='bordor-4 px-2 py-2 ml-3' 
           onChange={(e)=>setMinPrice(e.target.value)} 
           value={minPrice} />

          <input
           placeholder='max price' 
           className='bordor-4 px-2 py-2 ml-3' 
           onChange={(e)=>setMaxPrice(e.target.value)} 
           value={maxPrice} /> 
            <button 
            className='bg-black text-white px-2 py-2 ml-4 rounded-md' 
            onClick={handlePrice}>Filter by Price</button>
         
        </div>
         
         {/* All Products */}

        <div className=' flex gap-3 mt-3 flex-wrap'>
          {
           allProducts.map((AllItems)=>(
            <div className='border-4' key={AllItems.id}>
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
