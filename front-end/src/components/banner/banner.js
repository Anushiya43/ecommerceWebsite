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
                <img src="food1/festival.png" class="d-md-block d-none w-100 h100" alt="..."/>
                <img src="mobile/frame1.png" class="d-md-none d-block w-100 h100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="food1/honey_frame2.png" class="d-md-block d-none w-100 h100" alt="..."/>
                <img src="mobile/frame1.png" class="d-md-none d-block w-100 h100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="food1/honey_frame3.png" class="d-md-block d-none w-100 h100" alt="..."/>
                <img src="mobile/frame1.png" class="d-md-none d-block w-100 h100" alt="..."/>
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