import React from 'react'
import Navbar from './Navbar'
import "./Home.css"

const Home = () => {
  return (
    <div>
       <div className='hero text-center'>
        <div className='row justify-content-center align-items-center p-5'>
          
          <div  className='col-md-6'><img src="./homi.jpeg" className='img-fluid shadow rounded-pill animate__animated animate__fadeInUp animate__slower' alt="" /></div>
          <div className='col-md-5 '>
            <div className='row justify-content-center align-items-center animate__animated animate__fadeInUp animate__slower '>
            <h2 className='text-center tagline  display-4 '>Where trend meets comfort</h2>
            </div>
          </div>
          <div className='col-md-1'></div>
        </div>
       </div>
      
    </div>
  )
}

export default Home
