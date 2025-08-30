import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from './components/Login'
import { Link } from 'react-router-dom'
import Register from "./components/Register"
import Navbar from './components/Navbar'
import Home from "./components/Home"
import { Datacontext } from "./context/context"
import { useState } from "react"
import Products from "./components/Products"
import Cart from "./components/Cart"
import Details from "./components/Details"

function App() {
  

  
  const [idpass, setIdpass] = useState([])
  const [newdata, setnewData] = useState("")
  const [newpass, setnewpass] = useState("")
   const [data,setData] = useState([])
  const [cart,setCart] = useState([])
   const [isLogged,setIslogged] = useState(
      localStorage.getItem("islogged")==="true"
    ) 
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/login",
      element:<><Login/></>
    },
    {
      path:"/register",
      element:<><Register/></>

    },
    {
      path:"/products",
      element:<><Navbar/><Products/></>
    },
    {
      path:"/cart",
      element:<><Navbar/><Cart/></>
    },
    {
      path:"/details",
      element:<><Navbar/><Details/></>
    }
  ])
 





  return (
    <>
    <Datacontext.Provider value={{idpass, setIdpass,newdata, setnewData,newpass, setnewpass,data,setData,cart,setCart,isLogged,setIslogged}}>
      <RouterProvider router={router}/>
    
     
</Datacontext.Provider>
    </>
  )
}

export default App
