import React from 'react'

export default function FirstImage() {
    return (
        <>
            <div className="himages">
                <div className="innderImage" style={{width:"100%",height:"50rem",backgroundImage:new URL('https://newkit.moxcreative.com/travood/wp-content/uploads/sites/9/2022/07/img_1.png')}}>


                    <div className="container">

                        <div className="row">
                            <div className="col-6">
                                <h1 className='text-white headingH'>
                                    Quality Ingredients, Incredible Taste.
                                </h1>
                                <h4 className='text-white'>
                                    Magna dis rhoncus sit ultricies litora urna maecenas tempor sem
                                </h4>
                                <button type='button' className='btn btn-warning me-5 mt-3'>Discover More  </button>
                            </div>
                            <div className="col-6 RightHead">
                                <img src='https://newkit.moxcreative.com/travood/wp-content/uploads/sites/9/2022/07/1.png' className='burgarImage' alt='burgarImage' />
                                {/* <div className="SpecialOffer">
                                    <h2> Special Offer
                                        <span>RS 500</span>

                                    </h2>

                                </div> */}

                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}
