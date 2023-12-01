import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./catagory.css";
import { Link } from 'react-router-dom';

function Catagory({catagory,setProducts}) {
   
  return (
    <div className='container catagory'>
      <Swiper
        slidesPerView={6}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
                catagory.map(c =>{
                    return(
                        <SwiperSlide className='col-2'>
                        <div className='pad' onClick={()=>setProducts(c.value)} key={c.id}>
                            <Link to={"/product"} className='link'>
                            <img src={"https://drive.google.com/uc?id="+c.pic}></img>
                            <p>{c.name}</p>
                            </Link>
                           </div> 
                           </SwiperSlide>
                            )
                        }
                 )}
       </Swiper>
    </div>
  )
}

export default Catagory;