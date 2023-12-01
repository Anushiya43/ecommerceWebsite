import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../providers/cartcontext';
import "./heading.css";

function Heading() {
  const {setUser}=useContext(cartContext)
  return (
    <div className='container header'>
        <div className='row'>     
        <nav class="col-12 navbar navbar-expand-lg navbar-light bg-white" id="nav">
              <a class="navbar-brand" href="/ecommerceWebsite/product">
              <img src="food1/logo.png" alt="pic1" className='logo'/>
              </a>

              <button class="navbar-toggler bg-light navbar-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse text-dark" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <Link class="nav-link" id="link" to="/">Home <span class="sr-only">(current)</span></Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" id="link"  to="/product">Product</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" id="link"  to="/cart">Cart</Link>
                  </li>
                  <li class="nav-item">
                    <div class="dropdown m-0 p-0 text-secondary">
                        <button class="nav-link bg-white font-weight-bold dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Account
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                          <Link to="/signup" class="dropdown-item" id="link"  type="button">SignUp</Link>
                          <Link to="/login" class="dropdown-item" id="link" type="button">Login</Link>
                          <button class="dropdown-item" type="button" id="link" onClick={()=>{setUser(false)}}>Logout</button>
                        </div>
                      </div>
                  </li>
                  </ul>
              </div>
            </nav>  
          </div>
    </div>
    
  )
}

export default Heading