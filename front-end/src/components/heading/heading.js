import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../providers/cartcontext';

{/*
<i class="fa-solid fa-magnifying-glass fa-xl pl-3"></i>
<Link to="/cart"><i class="fa-solid fa-cart-shopping fa-xl pl-3"></i></Link>
<i class="fa-solid fa-bars fa-xl pl-3"></i>*/}
function Heading() {
  const {setUser}=useContext(cartContext)
  return (
    <div className='container'>
        <div className='row'>     
        <nav class="col-12 navbar navbar-expand-lg navbar-white bg-white">
              <a class="navbar-brand" href="http://wa.me/918015241898?text=hii" target='_blank'>
              <img src="food1/logo-1.png" alt="pic"/>
              </a>

              <button class="navbar-toggler bg-light navbar-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse text-dark" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/product">Product</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/cart">Cart</Link>
                  </li>
                  <li class="nav-item">
                    <div class="dropdown">
                        <button class="btn text-info dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Account
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                          <Link to="/signup" class="dropdown-item" type="button">SignUp</Link>
                          <Link to="/login" class="dropdown-item" type="button">Login</Link>
                          <button class="dropdown-item" type="button" onClick={()=>{setUser(false)}}>Logout</button>
                        </div>
                      </div>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="#footer" tabindex="-1" aria-disabled="true">Location</Link>
                  </li>
                </ul>
              </div>
            </nav>  
            <hr className='col-12 shadow-lg bg-white rounded'/>       
        </div>
    </div>
    
  )
}

export default Heading