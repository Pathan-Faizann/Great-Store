import React, { useState } from 'react'

const Payment = () => {
    const [addr,setAddr] = useState([])
  return (
    <div className=''>
        <div className='d-flex justify-content-center'>
        
        <div className='form w-50'>
          <h3 className='my-4 text-center'>Contact Details :</h3>
            <label className='form-label fs-4'>Ph-number :</label>
            <input type="number" max={10} placeholder='ph-number' className='form-control' />
            <label className='form-label fs-4'>E-mail :</label>
            <input type="email" placeholder='your@gmail.com' className='form-control' />
        </div>
        <hr />
        </div>
        <div className='d-flex justify-content-center'>
         <div className='form w-50'>
          <h3 className='my-4 text-center'>Address :</h3>
           
              <label htmlFor="" className='form-label mt-3 fs-4'>House number : </label>
              <input type="text" placeholder='House number and Street name' className=' form-control' />
             
                <label htmlFor="" className='form-label mt-3 fs-4'>Area name :</label>
                <input type="text" placeholder='Area name' className='form-control' />
             
                <label htmlFor="" className='form-label mt-3 fs-4'>Landmark</label>
                <input type="text" placeholder='Landmark' className=' form-control' />
             
                <label htmlFor="" className='form-label mt-3 fs-4'>Pincode</label>
                <input type="number" placeholder='pincode' className='form-control' />
                <div className='d-flex justify-content-center'>
                <button type='submit' className='btn btn-primary my-4 text-center'>Proceed to Payment</button>


                </div>

           
           

        
            
        </div>
        </div>
        
    

      
    </div>
  )
}

export default Payment
