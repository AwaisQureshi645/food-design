import React from 'react'
import './StyleAbout.css';
import {FaFacebook} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr';
export default function PersonFram(props) {
  return (
 <div className="frame">
<img src={props.imgs} alt="person1" className='personbag'/>
<h2 className='text-center pt-2'>
    {props.name}
</h2>
<p className='text-center'>
    {props.work}
</p>
<div className='iconss'>
    <FaFacebook className='fs-4 me-1' />
    <BsLinkedin className='fs-4 me-1'/>
    <GrMail className='fs-4 me-1'/>
</div>
 </div>
  )
}
