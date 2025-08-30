import React, { useContext, useEffect } from "react";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Datacontext } from "../context/context";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(Datacontext);
  const total = (cart || []).reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  function remove(d, i) {
    setCart(cart.filter((_, ix) => ix !== i));
  }
  function plus(id){
    setCart(prev=>
      prev.map((item=>item.id === id?{...item,qty : item.qty+1}:item))
    )
  }
  function minus(id){
    setCart(prev=>prev.map(item=> item.id === id?{...item,qty:Math.max(1,item.qty-1)}:item)
    )
  }
  useEffect(() => {
    console.log(cart)
    
  }, [cart])
  
  // console.log(cart[1].qty)
  return (
    <>
      {cart.length > 0 ? <h1 className="text-center mb-2">Cart</h1> : null}
      {cart.length === 0 ? (
        <h2 className="text-center mt-5">
          <FaRegFaceSadTear size={40} /> Cart is empty
          <MdOutlineShoppingCart size={45} />
        </h2>
      ) : (
        
        <div className="row justify-content-center">
          {cart.map((d, i) => (
            d.qty>0?

            <div
              key={d.id}
              className="card my-2 d-flex shadow justify-content-center "
            >
              <img src={d.images[0]} className="card-img-top  img-fluid" alt="..." />
              <div className="card-body d-flex flex-column justify-content-around align-items-center">
                <span className="card-title text-center fs-4">{d.title}</span>
                <span className="card-text fs-5 fw-bold">Price : ${d.price}</span>
                <div className="mt-3">
                  <button onClick={() => minus(d.id)} className="btn shadow">
                   <FaCircleMinus size={17} />
                  </button>
                  <button className="card-text btn fs-5">Quantity : {d.qty}</button>
                  <button onClick={() => plus(d.id)} className="btn shadow">
                    <FaCirclePlus size={17} />
                    {console.log(d.qty)}
                  </button>
                </div>

                <button className="btn border" onClick={() => remove(d, i)}>
                 <MdDelete size={25} />
                </button>
              </div>
              
            </div>:null
            
          ))}
          <br />
          {cart.length > 0 ? (<div className="d-flex justify-content-end me-5 mb-5"> <span className=" text-center rounded p-2 bg-warning fs-3  fw-normal">
          Total Amount : {total.toFixed(2)} $
        </span><Link className="btn btn-warning text-center fs-3 ms-5" to="/details">Proceed</Link></div>
        
      ) : null}
      
        </div>
      )}
     
      
    </>
  );
};

export default Cart;
