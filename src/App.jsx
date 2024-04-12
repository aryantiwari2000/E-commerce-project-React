import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/cart/Cart"
import AllProducts from "./Components/AllProducts/AllProducts"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUP/SignUp"
import { useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"


function App() {

// handle Increase

const handleInc = (id)=>{

const incQuantity=cart.map((item)=>(
 item.id === id ? {...item, quantity:item.quantity+1}:item
))  
setCart(incQuantity)

}

// handle decrese

const handleDec = (id)=>{

  const decQuantity=cart.map((item)=>(
   item.id === id && item.quantity>1 ? {...item, quantity:item.quantity-1}:item
  ))  
  setCart(decQuantity)
  
  }


  //handle remove

  const handleRemove = (id)=>{
  const updateByFilter= cart.filter((filterItem) => filterItem.id !== id )
  setCart(updateByFilter);

  };

  const [cart,setCart]=useState([])

  //Add to cart 

  const AddToCart=(product)=>{
   

    const isProductExists= cart.find((findItem)=>findItem.id === product.id)
   
    if(isProductExists){

      const updateCard=cart.map((item)=>(item.id === product.id?{...item,quantity:item.quantity+1}:item))
     setCart(updateCard)
    }
    else{
      setCart([...cart , {...product, quantity:1}])
    }

  }

  return (
    <>

    <BrowserRouter>
    <Navbar cart={cart}/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/cart" element={<Cart cart={cart} handleDec={handleDec} handleInc={handleInc} handleRemove={handleRemove}/>}/>
     <Route path="/allproducts" element={<AllProducts AddToCart={AddToCart} />}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signUp" element={<SignUp/>}/>


     </Routes>
    <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
