import React from 'react'
import Bugar from './Bugar';
import './HomeStyle.css';
export const Package = () => {
  return (
<>
<div className="packageBox">
    <h4 style={{color:"red",paddingTop:"5rem"}} className="text-center">
        
    Combo Menu
    </h4>
    <h1 style={{color:"#222222EB",paddingTop:"5rem",fontSize:"4rem",fontWeight:"bolder"}} className="text-center">
    Delicious Package Meals

    </h1>
    <p style={{color:"#222222EB",paddingTop:"5rem"}} className="text-center">
        
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.ctetur, adipisicing eli<br></br>Lorem ipsum is, dolor? Perferendis numquaagnam?
        </p>
        </div>
        <h1 className='text-center ' style={{color:"#222222EB",fontWeight:"bold"}}>
            Select Offers
        </h1>
        <div className="bugar" style={{display:"flex"}}>
            <Bugar imgs={"https://newkit.moxcreative.com/travood/wp-content/uploads/sites/9/2022/07/1.png" }
            name={"Super Burger"} price={"RS: 400"}/>
             <Bugar imgs={"https://newkit.moxcreative.com/travood/wp-content/uploads/sites/9/2022/07/Hamburger_3.png" }
            name={"Special Burger"} price={"RS: 500"}/>
                <Bugar imgs={"https://newkit.moxcreative.com/travood/wp-content/uploads/sites/9/2022/07/Hamburger_2.png" }
            name={"Premium Burger"} price={"RS: 550"}/>
        </div>


</>
  )
}
