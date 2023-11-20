import React from 'react';
import "./marquee.css";
function Marquee() {
  return (
    <div className='container-fluid bg-light text-center pt-1'>
      <div className='row'>
        <p className='col-md-3 d-none'>care@oorla.com</p>
        <marquee width="60%" direction="right" className="col-7">
            Free Shopping on Orders Above <strong>499</strong>
        </marquee>      
      </div>
    </div>
    
  )
}

export default Marquee;