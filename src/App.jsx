import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/cart/Cart"
import AllProducts from "./Components/AllProducts/AllProducts"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUP/SignUp"
import { useEffect, useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import { Toaster } from "react-hot-toast"
import { onAuthStateChanged} from "firebase/auth"
import { auth } from "./FirebaseAuth/FirebaseAuth"





function App() {

  const [cart,setCart]=useState([])
  const[promoCode, setPromoCode]=useState("")
  const[discount, setDiscount]=useState(0)
  const[invalid,setInvalid]=useState("Invalid PromoCode")

  const[userName,setUserName] = useState("")

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

  //calculte total price

  const getTotalPrice =()=>{

    const totalPrice=cart.reduce((total,cartReduceItem)=>{
    
      return total + cartReduceItem.price*cartReduceItem.quantity

    },0)

    return totalPrice-discount;
  }

  //Promocode
  const applyPromoCode =()=>{
    if(promoCode==="DISCOUNT10"){
  
      setDiscount(getTotalPrice()*0.1)
      setPromoCode("")
    }
    else{
      setInvalid(invalid)
    }
  
  }

  //userName Display

  useEffect(()=>{
   
    onAuthStateChanged( auth, (user)=>{
    if(user){
      setUserName(user.displayName)
    }else{
      setUserName("")
    }

    })
  },[])

  return (
    <>

    <BrowserRouter>
    <Navbar cart={cart} userName={userName}/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/cart" element={<Cart cart={cart} handleDec={handleDec} handleInc={handleInc} handleRemove={handleRemove} getTotalPrice={getTotalPrice} applyPromoCode={applyPromoCode} promoCode={promoCode} setPromoCode={setPromoCode} invalid={invalid}/>}/>
     <Route path="/allproducts" element={<AllProducts AddToCart={AddToCart} />}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signUp" element={<SignUp/>}/>


     </Routes>
     <Toaster/>
    <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
