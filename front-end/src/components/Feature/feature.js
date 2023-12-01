import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './feature.css'

// import required modules
import { Navigation } from 'swiper/modules';

export default function Feature({products,data,setSingle}) {
    console.log("hhh",data);

  return (
    <div className='container feature mb-1'>
        <div className='row'>
      <h1 className='col-12 h6'>snacks</h1>      
      <Swiper navigation={false} modules={[Navigation]} className="m-0 py-2 mySwiper">
        {
            data && data.map(d => {
           return( 
             <SwiperSlide className='col-4 col-md-4 col-lg-3 m-0' >
                <Link to="product/single/" className='link'>            
                <div className='card1 shadow d-flex flex-column justify-content-center text-center' key={d.id}  onClick={()=>{setSingle({d})}}>                    
                    <div><img src={d.pic} className="product_img"/></div>
                    <span className='text-center p-0 mx-0'>{d.name}</span>   
                    <p className='p-0 mx-0'>snacks</p>                     
                    </div>  
                    </Link> 
                    </SwiperSlide>
              )
                })
                } 
              </Swiper>  
                </div>
                </div>
        )
}
