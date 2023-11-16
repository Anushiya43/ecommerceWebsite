import React from 'react';


function Heading() {
  return (
    <div className='container-fluid'>
        <div className='row'>       
        <div className='col-10 text-center'>
            <img src="food1/logo-1.png" alt="pic"/>
        </div>
        <div className='col-2 text-right py-3'>
        <i class="fa-solid fa-magnifying-glass p-2 fa-xl"></i>
        <i class="fa-solid fa-cart-shopping p-2 fa-xl"></i>
        <i class="fa-solid fa-bars p-2 fa-xl"></i>
        </div> 
        <hr className='col-12 shadow-lg bg-white rounded'/>       
        </div>
    </div>
    
  )
}

export default Heading