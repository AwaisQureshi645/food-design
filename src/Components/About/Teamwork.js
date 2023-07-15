import React from 'react'
import PersonFram from './PersonFram'

export default function Teamwork() {
  return (
<>
<div className="meetOurTeam">
    <h3 style={{color:"red",textAlign:"center",fontWeight:"bold" }}>
    Meet our team
    </h3>

    <h1 className='text-center  fw-bold' style={{fontSize:"3rem",color:"#222222EB"}}>
    Teamwork makes the dream work.
    </h1>

<div className="container" style={{display:"flex"}}>
<PersonFram imgs={'https://newkit.moxcreative.com/travood/wp-content/uploads/sites/9/2022/07/img__0007_Layer-1.jpg'} name="Daniel Jenkins" work="Founder"/>
<PersonFram imgs={'https://newkit.moxcreative.com/travood/wp-content/uploads/sites/9/2022/07/img__0004_Layer-4.jpg'} name="Thomas Wilson" work="Co-Founder"/>
<PersonFram imgs={'https://newkit.moxcreative.com/travood/wp-content/uploads/sites/9/2022/07/img__0006_Layer-2.jpg'} name="Emma Wrights" work="chef"/>
<PersonFram imgs={'https://newkit.moxcreative.com/travood/wp-content/uploads/sites/9/2022/07/img__0002_Layer-6.jpg'} name="Georgina Wood" work="coo-chef"/>

</div>


</div>
</>
  )
}
