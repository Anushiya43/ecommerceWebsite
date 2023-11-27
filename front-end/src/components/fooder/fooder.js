import React from 'react'
import "./fooder.css";
function Fooder() {
  return (
    <div className='container fooder pb-5' id='footer'>
        <div className='row'>
            <img src='https://res.cloudinary.com/dx0cslxpx/image/upload/v1701092452/Nathan_ecommerce/frames/fooder_banner1.jpg' className='col-12 w-100'/>
            <div className='col-12 text-center'>
                <img src='https://res.cloudinary.com/dx0cslxpx/image/upload/v1701100175/Nathan_ecommerce/frames/logo1.avif'/>
            </div>
            <div className='col-12 text-center'>
            <i class="fa-brands fa-square-facebook fa-2xl icon"></i>
            <i class="fa-brands fa-square-instagram fa-2xl icon"></i>
            <i class="fa-brands fa-square-twitter fa-2xl icon"></i>
            <i class="fa-brands fa-square-whatsapp fa-2xl icon"></i>            
            </div>
            <div className='col-12 text-center'>
                <p>37, Ayur Vigyan Nagar, New Delhi, india</p>
            </div>
            <div className='col-6 col-md-4 order-0'>
                <h1 className='h3'>Contact Us</h1>
                <p>About us <br/>
                Career <br/>
                Press Releases<br/>
                Gift a smile
                </p>
                
            </div>
            <div className='col-md-4 col-6 order-2'>
                <h1 className='h3'>Contact Us</h1>
                <p>
                    Phone No.<br/>
                    <i class="fa-solid fa-phone"></i>
                    9999999999
                </p>
                <p>
                    E-mail<br/>
                    <i class="fa-solid fa-envelope"></i>
                    index34@gmail.com
                </p>
                <p>
                    Address<br/>
                    <i class="fa-solid fa-map-location-dot"></i>
                    17 Ayur Vigyan Nagar, New Delhi,India.
                </p>
            </div>
            <div className='col-md-4 col-6 order-1 order-1'>
                <h1 className='h3'> Let Us Help You</h1>
                <p>
                    100% Purchase<br/>
                    Protection<br/>
                    Your Account<br/>
                    Return Centre<br/>
                    Help
                </p>
            </div>
        </div>
    </div>
  )
}

export default Fooder