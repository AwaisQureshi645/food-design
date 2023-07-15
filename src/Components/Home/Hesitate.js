import React from 'react'

export default function Hesitate() {
  return (
<>
<div className="heritageBox">
    <div className="row">

    <div className="col-7"> 
    <p className='' style={{color:"red",paddingLeft:"3rem",paddingTop:"5rem",
    fontWeight:"bold"
}}>
    Need Help?
    </p>
    <h1 style={{paddingLeft:"3rem",color:"#222222EB",fontWeight:"bold"}}>
    Don't Hesitate to contact us for more informations.
    </h1>
    <p className='ps-5'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
    </p>
    <button type='button' className='btn btn-warning ms-5 mt-5 ps-4 fw-bold b-none'>Contact us   </button>

    </div>
    <div className="col-5">
        <img src='https://newkit.moxcreative.com/travood/wp-content/uploads/sites/9/2022/07/Courier_.png' 
        alt='person' className='HPerson'/>
    </div>


    </div>
</div>

</>
  )
}
