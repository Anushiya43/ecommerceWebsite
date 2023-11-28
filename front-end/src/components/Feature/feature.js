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
    <div className='container feature'>
        <div className='row'>
      <h1 className='col-12 h6'>snacks</h1>      
      <Swiper navigation={false} modules={[Navigation]} className=" m-0 mySwiper">
        {
            data.snacks && data.snacks.map(d => {
           return( 
             <SwiperSlide className='col-6 col-md-4 col-lg-3 ' >
                <Link to="product/single/" className='link'>            
                <div className='card1 shadow m-0 text-center' key={d.id}  onClick={()=>{setSingle({d})}}>                    
                    <img src={d.pic} className="product_img w-100"/>
                    <span className='text-center p-0 mx-0'>{d.name}</span>   
                    <p className='p-0 mx-0'>snacks</p>                     
                    </div>  
                    </Link> 
                    </SwiperSlide>
              )
                })
                } 
                </Swiper>
                <h1 className='col-12 h6'>Pooja Items</h1>      
                <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
                {
                  data.pickles.map(d => {
                  return( 
                      <SwiperSlide className='col-6 col-md-4 col-lg-3'>
                      <Link to="product/single" className='link'>            
                      <div className='card card1 shadow text-center' key={d.id}  onClick={()=>{setSingle({d})}}>                    
                          <img src={d.pic} className="product_img w-100"/>
                          <span className='w-100 text-center p-0 mx-0'>{d.name}</span>   
                          <p className='w-100 text-center p-0 mx-0'>Pickles</p>                     
                          </div>  
                          </Link> 
                          </SwiperSlide>  
                  )
                      })
                      }         
                </Swiper>
                <h1 className='col-12 h6'>Masala</h1>      
                <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
                {
                  data.pickles.map(d => {
                  return( 
                      <SwiperSlide className='col-6 col-md-4 col-lg-3'>
                      <Link to="product/single" className='link'>            
                      <div className='card card1 shadow text-center' key={d.id}  onClick={()=>{setSingle({d})}}>                    
                          <img src={d.pic} className="product_img w-100"/>
                          <span className='w-100 text-center p-0 mx-0'>{d.name}</span>   
                          <p className='w-100 text-center p-0 mx-0'>Pickles</p>                     
                          </div>  
                          </Link> 
                          </SwiperSlide>  
                  )
                      })
                      }         
                </Swiper>
                <h1 className='col-12 h6'>pickles</h1>      
                <Swiper navigation={false} modules={[Navigation]} className="mySwiper">
                {
                  data.pickles.map(d => {
                  return( 
                      <SwiperSlide className='col-6 col-md-4 col-lg-3'>
                      <Link to="product/single" className='link'>            
                      <div className='card card1 shadow text-center' key={d.id}  onClick={()=>{setSingle({d})}}>                    
                          <img src={d.pic} className="product_img w-100"/>
                          <span className='w-100 text-center p-0 mx-0'>{d.name}</span>   
                          <p className='w-100 text-center p-0 mx-0'>Pickles</p>                     
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
