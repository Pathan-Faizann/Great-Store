import React from 'react'
import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Datacontext } from '../context/context'
import { useContext } from 'react'
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";


const Products = () => {
    const{data,setData,cart,setCart,isLogged} = useContext(Datacontext)
   

  function minus(id){
    setCart(prev=>prev.map(item=> item.id === id?{...item,qty:item.qty-1}:item).filter(item => item.qty > 0)
    )
  }
  function add(productId){
    isLogged?
    setCart(prev=>{
      const product = data.find(item=> item.id === productId);
      const existing = prev.find((val=>val.id === product.id));
      if(existing){
        return prev.map(item=>
           item.id === product.id?{...item,qty : item.qty +1}:item
          );
        
      }
      else{
        return [...prev,{...product,qty:1}]
      }
    }):alert("Please Login First")};

   useEffect(() => {

    const api = async ()=>{

      const url = await fetch("https://api.escuelajs.co/api/v1/products");
      const res = await url.json()
      setData(res)
      console.log(res[0].category.image)

    }
    api()
    
  }, [])
  return (
    <div className=''>

         <div className="row mt-5 justify-content-center align-items-center">

    {data.map((d)=>{
    const inCart = cart.find((item)=>item.id === d.id)
     return (
      <div className='col-md-4 col-sm-6 d-flex justify-content-center'>
      <div key={d.id} className="card shadow mb-4 rounded-pill ">
  <img src= {d.images[0]} className="card-img-top dif img-fluid" alt="..."/>
  <div className="card-body d-flex flex-column justify-content-center align-items-center">
    <span className="card-title text-center fs-4">{d.title}</span>
    <span className="card-text price px-sm-5 rounded-pill my-3 fs-5">Price : ${d.price}</span>
    <div className='btn-group'>
      

   
{inCart?inCart.qty>0?<button className='btn  btn-danger mt-2' onClick={()=>minus(d.id)}><FaCircleMinus size={17} /></button>:<button onClick={()=>add(d.id)} className="btn mt-2 ms-3 rounded-pill   btn-primary">Add to Cart</button>:null}
{inCart?(<button className='btn mt-2'>{inCart.qty>0?inCart.qty:null}</button>):<button onClick={()=>add(d.id)} className="btn mt-2 rounded-pill   btn-primary">Add to Cart</button>  }
{inCart?(
  inCart.qty>0?<button onClick={()=>add(d.id)} className='btn btn-success  mt-2'><FaCirclePlus size={17} /></button>:null):(null)}

</div>

  </div>
  </div>
  </div>
   )} )}
   </div>
      
    </div>
  )
}

export default Products
