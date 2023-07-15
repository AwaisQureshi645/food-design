import React from 'react'
import './StyleAbout.css';
import Vision from './Vision';
export default function Language() {
  return (
 <>
 <div className="languageBox">

<p style={{textAlign:"center",marginTop:"5rem",color:"white",fontSize:"15px"}}>
Our value
</p>
<h1 className='text-center text-white' style={{fontSize:"3rem"}}>
The Only Language We Speak <br/> Is The Food Language.

</h1>
<p className='text-center text-white '>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
</p>

 </div>
 <div style={{display:"flex",justifyContent:"center"}}> 
 <Vision name="Vision" imgs={'https://cdn-icons-png.flaticon.com/128/4708/4708919.png'} />
 <Vision name="Mission" imgs={'https://cdn-icons-png.flaticon.com/128/3720/3720937.png'}/>
 <Vision name="Motto" imgs={'https://cdn-icons-png.flaticon.com/128/287/287623.png'}/>
 </div>


 </>

  )
}
