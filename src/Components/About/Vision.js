import React from 'react'
import './StyleAbout.css';
export default function Vision(props) {
  return (
    <div >
      <div className="visionBox">

    <img src={props.imgs} className="my-3" style={{  display: "block", marginLeft: "auto",  marginRight: "auto"}}/>
<h2 className='text-center '>
    {props.name }
</h2>

<p className='text-center '>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae molestiae dolorem rem delectus enim saepe, similique in animi nam.
</p>
      </div>
    </div>
  )
}
