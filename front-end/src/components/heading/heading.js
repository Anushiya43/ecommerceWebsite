import React from 'react';


function Heading() {
  return (
    <div className='container-fluid'>
        <div className='row'>       
        <div className='col-8 text-left'>
            <img src="food1/logo-1.png" alt="pic"/>
        </div>
        <div className='col-4 d-md-none d-flex justify-content-between text-center mt-4'>
        <i class="fa-solid fa-magnifying-glass fa-xl"></i>
        <i class="fa-solid fa-cart-shopping fa-xl"></i>
        <i class="fa-solid fa-bars fa-xl"></i>
        </div> 
        <div className='col-md-4 d-none d-md-block d-md-none d-flex justify-content-between text-center mt-4 pl-5'>
        <i class="fa-solid fa-magnifying-glass fa-xl pl-3"></i>
        <i class="fa-solid fa-cart-shopping fa-xl pl-3"></i>
        <i class="fa-solid fa-bars fa-xl pl-3"></i>
        </div>
        <hr className='col-12 shadow-lg bg-white rounded'/>       
        </div>
    </div>
    
  )
}

export default Heading