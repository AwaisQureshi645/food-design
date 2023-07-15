import React from 'react'

export default function Features() {
  return (
<>
<div className="FBox">
    <div className="container-fluid">
    <div className="row">
    <div className="col-8">
        <div className="firstBox">
<div className="col-6">
<h1 className='text-white' style={{paddingTop:"7rem",paddingLeft:"1rem"}}>
Discount up to 35% for first order this month.
</h1>
    <h3 className='text-white ps-3'>
        December 2022
    </h3>
    <button type='button' className='btn btn-warning ms-3 mt-3 ps-4 fw-bold'>Order Now !  </button>

</div>
        </div>
    </div>
    <div className="col-4">
        <div className="secondBox">
            <h1 className='text-center text-white pt-3'>
            Discovery New Menu
            </h1>
            <h4 className='text-white text-center'>
            Start from $9
            </h4>
            <button type='button' className='btn btn-warning mx-auto d-flex ps-4 mt-3 fw-bold'>Order Now !  </button>

        </div>
         </div>

</div>
    </div>

</div>


</>
  )
}
