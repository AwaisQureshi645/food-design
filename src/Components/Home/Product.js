import React from 'react'
import './HomeStyle.css';
export default function Product() {
  return (
    <div className='product_image'>

      <div className="row">
        <div className="col-6">

          <h5 style={{ color: "red", marginTop: "7rem",paddingLeft:"3rem" }}>
            Who we are
          </h5>

          <h1 style={{ fontSize: "4rem", fontWeight: "bolder", color: "#222222EB",paddingLeft:"3rem" }}>
            Try The Food Because This Chef Can Work Out Miracles.

          </h1>
          <p style={{paddingLeft:"3rem"}}>
            Ipsum aliquet purus felis taciti vitae rhoncus consectetuer duis si mus. Facilisis luctus nullam feugiat senectus suspendisse lacus tristique hendrerit dui ultricies si.
          </p>
          <button type='button' className='btn btn-warning me-5 mt-3 ms-5'>Discover More  </button>
        </div>
        <div className="col-6">
          <img src="https://newkit.moxcreative.com/travood/wp-content/uploads/sites/9/2022/07/burger_-3.png" alt=" product" className='product-img' />

        </div>

      </div>

    </div>
  )
}
