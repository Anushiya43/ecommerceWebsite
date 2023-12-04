import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./feature.css";
import { catagory } from "../data/catagorydata";
// import required modules
import { Navigation } from "swiper/modules";

export default function Feature({ products, data, setSingle }) {
  console.log("hhh", data);
  // useEffect(()=>{

  // },[])

  return (
    <div className="container feature mb-1">
      <div className="row">
        {catagory.map((c) => {
          const catagoryData = data.filter((d) => d.catogory === c.value);
          console.log(catagoryData);

          return (
            <>
              <h1 className="h5 font-weight-bold">
                {c.name === "Kit" ? "" : c.name}
              </h1>
              <Swiper
                navigation={false}
                modules={[Navigation]}
                className="m-0 py-2 mySwiper"
              >
                {catagoryData &&
                  catagoryData.map((d) => {
                    return (
                      <SwiperSlide className="col-4 col-md-4 col-lg-3 m-0">
                        <Link to="product/single/" className="link">
                          <div
                            className="card1 shadow d-flex flex-column justify-content-center text-center"
                            key={d.id}
                            onClick={() => {
                              setSingle({ d });
                            }}
                          >
                            <div>
                              <img src={d.pic} className="product_img w-100" />
                            </div>
                            <p className="p-0 mx-0">{d.catogory}</p>
                            <span className="text-center p-0 mx-0">
                              {d.name}
                            </span>
                            
                            <span>Rs.{d.selling_rate}</span>
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </>
          );
        })}
      </div>
    </div>
  );
}
