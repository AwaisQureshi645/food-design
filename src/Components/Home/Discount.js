import React from 'react'
import './HomeStyle.css';

export default function Discount() {
    return (
        <>
            <div className="DiscontBlock">
                <div className="row">
                    <div className="col-6">
                        <h1>
                            Discount up to 30% only this month.
                        </h1>
                        <p className='text-white '
                            style={{ paddingLeft: "5rem" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <button type='button' className='btn btn-warning '
                        style={{marginLeft:'5rem',fontSize:'1rem'}}>cliam Promo</button>

                    </div>
                </div>


            </div>
        </>
    )
}
