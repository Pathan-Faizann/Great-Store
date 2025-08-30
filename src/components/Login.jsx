import React, { useContext, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Datacontext } from '../context/context'
import Navbar from './Navbar'
import './Loginreg.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {idpass,newdata,setnewData,newpass,setnewpass,setIslogged} = useContext(Datacontext)
    const [mess,setMess] = useState("")
    const users = JSON.parse(localStorage.getItem("users"))
   
    const navigate = useNavigate()
     function check(){
    const userFound = users.find(user=>
      user.id === newdata && user.pass === newpass
    )

    if(userFound) {
      setIslogged(true)
      alert("Correct ID and Password")
      navigate("/products")
      localStorage.setItem("islogged","true")
      setnewData("")
      setnewpass("")
    }
      else{
        setMess("Invalid or Missing input")
        setIslogged(false)
        localStorage.setItem("islogged","false")
       
      }
     
      
    
  }
  
   console.log(localStorage.getItem("users"))
  return (
    <div>
      <button className='btn border text-white border-dark mt-1 ms-5' style={{backgroundColor:"var(--prime)"}} onClick={()=>navigate(-1)}>Back</button>

    <div className='row align-items-center'>
      <div className='col-md-1'></div>
      <div className='col-md-5'> <img src="/login.jpeg" className='img-fluid animate__animated animate__fadeInLeft animate__slower' alt="" /></div>
    <div className='container col-md-5 animate__animated animate__fadeInRight animate__slower'>
      <div className=' row justify-content-center'>
        <h1 className='mb-5 mt-3 text-center animate__bounceIn animate__slow'>Login </h1>
<div id='form' className='form border shadow p-5'>
        <label className='form-label ms-2 fs-3 mt-5' htmlFor="">Username </label>
        <input type="text" className='form-control rounded-pill' value={newdata} onChange={(e)=>setnewData(e.target.value)} />
        <label className='form-label ms-2 fs-3 mt-4' htmlFor="">Password </label>
        <input type="password" className='form-control rounded-pill mb-3' value={newpass} onChange={(e)=>setnewpass(e.target.value)} />
        {mess?(<span className='p-2 rounded-pill' style={{color:"red",backgroundColor:"pink"}}>{mess}</span>):(null)}
        <div className='d-flex justify-content-center'>
        <button onClick={check} style={{backgroundColor:"var(--prime)"}} className='btn btn-warning text-white fs-4 p-3 mt-2 rounded-pill text-center'>Login</button>
        </div>
    </div>
      </div>
    </div>
    <div className='col-md-1'></div>
    </div>
    </div>
  )
}

export default Login
