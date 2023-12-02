import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { catagory } from "../data/catagorydata";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "./catagory.css";
import { Link } from "react-router-dom";

function Catagory({ setProducts }) {
  return (
    <div className="container catagory">
      <div className="row">
        <Swiper
          slidesPerView={6}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {catagory.map((c) => {
            return (
              <>
                <SwiperSlide className="col-2">
                  <div className="pad" key={c.id}>
                    <Link
                      to={"/product"}
                      onClick={() => setProducts(c.value)}
                      className="link"
                    >
                      <img src={c.pic} className="ctagory-pic shadow"></img>
                      <p className="text-center mb-1">{c.name}</p>
                    </Link>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Catagory;
