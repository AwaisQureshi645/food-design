import React from 'react';
import './HomeStyle.css';


export default function Bugar(props) {
    console.log(props.img);
  return (

  <div className='buggarBox'>
<img src={props.imgs} className="imgs mx-auto d-flex my-4"/>
<h3 className='text-center'>
    {props.name }
</h3>

<p className='mx-4'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, voluptate voluptas suscipit autem distinctio reiciendis commodi minima consequatur temporibus ducimus, facilis ullam nemo rem ea.
</p>
<h3 className='text-center my-3' style={{color:"red"}}>
    {props.price}
</h3>
<button type='button' className='btn btn-warning mx-auto d-flex ps-5'>Order Now   </button>


</div>

  
  )
}
