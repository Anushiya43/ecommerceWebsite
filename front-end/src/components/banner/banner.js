import React from 'react';
import "./banner.css";

function Banner() {
  return (
    <div className='container'>
    <div className='row'>
        <div id="carouselExampleIndicators" class="col-12 carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://res.cloudinary.com/dx0cslxpx/image/upload/v1701092452/Nathan_ecommerce/frames/banner1.webp" class="d-md-block d-none w-100 h100" alt="..."/>
                <img src="https://res.cloudinary.com/dx0cslxpx/image/upload/v1701100791/Nathan_ecommerce/mobile/hmlgmxgpfhzkmskwrs10.webp" class="d-md-none d-block w-100 h100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://res.cloudinary.com/dx0cslxpx/image/upload/v1701092453/Nathan_ecommerce/frames/banner4.webp" class="d-md-block d-none w-100 h100" alt="..."/>
                <img src="https://res.cloudinary.com/dx0cslxpx/image/upload/v1701100748/Nathan_ecommerce/mobile/xhdobbjmmfowetlgnvcd.jpg" class="d-md-none d-block w-100 h100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://res.cloudinary.com/dx0cslxpx/image/upload/v1701092453/Nathan_ecommerce/frames/banner3.webp" class="d-md-block d-none w-100 h100" alt="..."/>
                <img src="https://res.cloudinary.com/dx0cslxpx/image/upload/v1701100791/Nathan_ecommerce/mobile/hmlgmxgpfhzkmskwrs10.webp" class="d-md-none d-block w-100 h100" alt="..."/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
    </div>
  )
}

export default Banner