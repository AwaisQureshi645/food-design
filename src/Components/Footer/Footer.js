import React from 'react'
import './FooterStyle.css';

export default function Footer() {
    return (
        <>
            <div className="footerbox">
                <div className="row">
                    <div className="col-4">

                        <h2 style={{ paddingTop: "5rem", paddingLeft: "2rem" }}>
                            Sign up for exclusive offers
                        </h2>
                        <p className='ps-5'>
                            New subscribers get 10% off your next order
                        </p>
                        <input type={'text'} placeholder="Name" style={{ marginLeft: "3rem", border: "none", borderRadius: "5px" }} />
                        <input type={'email'} placeholder="email" style={{ marginLeft: "3rem", border: "none", borderRadius: "5px" }} />
                        <button type='button' className='btn btn-warning w-50 my-5 mx-auto d-flex ps-5 fw-bold'>Sign up </button>

                    </div>
                    <div className="col-2">

                        <h2 style={{ paddingTop: "5rem", paddingLeft: "0rem" }}>
                            Opening hours
                        </h2>
                        <p>

                            Mon - Fri (9 a.m - 4 p.m)
                        </p>
                        <p>
                            Sat (9 a.m - 2 p.m)
                        </p>
                        <p>

                            Sun (close)
                        </p>
                    </div>
                    <div className="col-2">

                        <h2 style={{ paddingTop: "5rem", paddingLeft: "0rem" }}>
                            Get in touch
                        </h2>
                        <p>
                            Jln Cempaka Wangi No 22
                            Jakarta - Indonesia
                        </p>
                        <p>
                            +6221.2002.2012
                        </p>
                        <p>

                            hello@yourdomain.tld
                        </p>
                    </div>
                    <div className="col-4">

                        <div className="logo" style={{ marginTop: "3rem" }}>
                            <img src="https://newkit.moxcreative.com/travood/wp-content/uploads/sites/9/2022/07/logo_travood_.png" alt="logoo" />
       
                       
                        </div>
                    </div>
                    <hr/>
                <p className='text-center ' >
                Copyright © 2022 Travood, All rights reserved. Present by Awais Qureshi 
                </p>
                </div>
              
            </div>

        </>
    )
}
