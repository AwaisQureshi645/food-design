import React from 'react'
import './Hstyle.css';
import {Link} from 'react-router-dom';
export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   <img src='https://newkit.moxcreative.com/travood/wp-content/uploads/sites/9/elementor/thumbs/logo_travood_-ps16h2vil0jtp4d0egaubfgdjbld6qt46gp4sjvri8.png'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/about'}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/contact'}>Contact us </Link>
        </li>
      
      </ul>
    </div>
  </div>
  <button type='button' className='btn btn-warning me-5 '>Order Now </button>
          </nav>
    </>
  )
}
