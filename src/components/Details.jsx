import React, { useState } from 'react'
import "./Details.css"

const Payment = () => {
    const [addr,setAddr] = useState([])
  return (
    <div className='body'>
        <div className='row mt-3 form-1 justify-content-center'>
        <div className='col-md-6 col-sm-8'>
        <div className='form rounded  p-4'>
          <h3 className='my-4 text-center'>Contact Details :</h3>
            <label className='form-label fs-4'>Ph-number :</label>
            <input type="number" max={10} placeholder='ph-number' className='form-control bg-transparent rounded-pill' />
            <label className='form-label fs-4'>E-mail :</label>
            <input type="email" placeholder='your@gmail.com' className='form-control bg-transparent rounded-pill' />
        </div> 
        </div>
        </div>
        <div className='row form-2 justify-content-center'>
          <div className='col-md-6 col-sm-6'>
         <div className='form rounded  mt-4 p-4 '>
          <h3 className='my-4 mt-5 text-center'>Address :</h3>
           
              <label htmlFor="" className='form-label mt-3 fs-4'>House number : </label>
              <input type="text" placeholder='House number and Street name' className=' form-control bg-transparent rounded-pill' />
             
                <label htmlFor="" className='form-label mt-3 fs-4'>Area name :</label>
                <input type="text" placeholder='Area name' className='form-control bg-transparent rounded-pill' />
             
                <label htmlFor="" className='form-label mt-3 fs-4'>Landmark</label>
                <input type="text" placeholder='Landmark' className=' form-control bg-transparent rounded-pill' />
             
                <label htmlFor="" className='form-label mt-3 fs-4'>Pincode</label>
                <input type="number" placeholder='pincode' className='form-control bg-transparent rounded-pill' />
                <div className='d-flex justify-content-center'>
                <button type='submit' className='btn btn-primary my-4 text-center'>Proceed to Payment</button>


                </div>

           
           

        
            
        </div>
        </div>
        </div>
        
    

      
    </div>
  )
}

export default Payment
