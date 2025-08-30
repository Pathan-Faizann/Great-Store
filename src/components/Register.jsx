import React, { useContext,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Datacontext } from '../context/context'
import Navbar from './Navbar'
import './Loginreg.css'
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const navigate = useNavigate()
    const [data,setData] = useState("")
      const [pass,setpass] = useState("")
      const [cnf,setCnf] = useState("")
      const {idpass,setIdpass} = useContext(Datacontext)
      const [name,setName] = useState("");
      const [mess,setMess] = useState("")
      function save(){
       
        if(data.length>=6 && pass.length>=8){
          if(data && pass === cnf && name){
          setIdpass([...idpass,{id:data,pass:pass,name:name}])
          setData("")
          setpass("")
          setName("")
          setCnf("")
          alert("Registered")
          navigate("/login")
        }
        else{
          setMess("Entered details are invalid or missing !")
        }

        }
        else{
          setMess(" Characters are required for userID : 6 and password : 8")
        }  
  }
  useEffect(() => {
        localStorage.setItem("users",JSON.stringify(idpass))
        console.log(JSON.parse(localStorage.getItem("users")))
      }, [idpass])
  function handlechange(e){
    setCnf(e.target.value)
    const val = e.target.value;
    if(val !== pass){
      setMess("Both Passwords are not same!")
    }
    else{
      setMess("")
    }
  }
  function changePass(e){
    setpass(e.target.value)
    const val = e.target.value;
    
   
      if(cnf){
         if(val !== cnf){
        setMess("Please write same password ")
      }
      else{
        setMess("")
      }
    }
  }
    
  return (
       
    <div>
            <button className='btn text-white border border-dark mt-1 ms-5' style={{backgroundColor:"var(--prime)"}} onClick={()=>navigate(-1)}>Back</button>
            <div className='row justify-content-between align-items-center min-vh-100'>
              <div className='col-md-1'></div>
             

    <div className="container1 col-md-5 animate__animated animate__fadeInLeft animate__slower" >
      <div>
        <h1 className='mt-1  mb-3 text-center animate__bounceIn animate__slow'>Register </h1>
    <div id='form' className='form border shadow p-5'>
      <label className='form-label fs-4 mt-1 ms-2' htmlFor="">Name </label>
        <input type="text" className='form-control rounded-pill' value={name} required onChange={(e)=>setName(e.target.value)}/>
        <label className='form-label fs-4 mt-3 ms-2' htmlFor="">Username </label>
        <input type="text" className='form-control rounded-pill' required value={data} onChange={(e)=>setData(e.target.value)} />
        <label className='form-label fs-4 mt-3 ms-2' htmlFor="">Password </label>
        <input type="password" className='form-control rounded-pill mb-2' required value={pass} onChange={changePass} />
        <label className='form-label fs-4 mt-3 ms-2' htmlFor="">Confirm Password </label>
        <input type="password" className='form-control rounded-pill mb-3' required  onChange={handlechange}/>
        {mess?(<span className='p-2  rounded-pill' style={{color:"red",backgroundColor:"pink"}}>{mess}
        </span>):(null)  }
        <div className='d-flex justify-content-center'>
        <button onClick={save} type='submit' style={{backgroundColor:"var(--prime)"}} className='btn fs-4 text-white px-3 btn-warning rounded-pill mt-3'>Register</button>
        </div>
    </div>
      </div>
    </div>
     <div className='col-md-5 d-flex justify-content-center justify-self-start'><img className='img-fluid rounded-pill animate__animated animate__fadeInRight animate__slower' src="/reg.jpg" alt="" /></div>
    <div className='col-md-1'></div>
  </div>
    </div>

  )
}

export default Register
