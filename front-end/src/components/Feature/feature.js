import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './feature.css'

// import required modules
import { Navigation } from 'swiper/modules';

export default function Feature() {
  return (
    <>
      <h1 className=''>Snacks</h1>      
      <Swiper navigation={true} modules={[Navigation]} className="p-3 mySwiper">      
        <SwiperSlide>
            <img src='https://www.oorla.in/cdn/shop/files/NagercoilNendranChips2.jpg?v=1695624992&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/Palkova6.jpg?v=1695623256&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/Palkova6.jpg?v=1695623256&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/KovilpattiKadalaiMittai2_662a86ae-c8aa-4c08-91a7-68d84949efea.jpg?v=1695962894&width=600' className='imge'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://www.oorla.in/cdn/shop/files/Palkova6.jpg?v=1695623256&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/OotyMasalaVarkey2.jpg?v=1695969684&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/NagercoilNendranChips2.jpg?v=1695624992&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/SatturMilagusev2.jpg?v=1695625310&width=600' className='imge'/>
            
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://www.oorla.in/cdn/shop/files/TirunelveliHalwa2.jpg?v=1695623373&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/SpicyPeanuts2_077bb110-27ce-4568-9ca2-87ddf227d0c9.jpg?v=1695625620&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/MudalurMuscothHalwa2.jpg?v=1695623874&width=600' className='imge'/>
            <img src='https://cdn.shopify.com/s/files/1/0604/7832/4995/files/ThoothukudiWineBiscuits1_70d9355d-410c-45e8-a736-45ab2bc55125.jpg?v=1697776491&width=400' className='imge'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://www.oorla.in/cdn/shop/files/udupiMixture2.jpg?v=1695625045&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/SpicyPeanuts2_077bb110-27ce-4568-9ca2-87ddf227d0c9.jpg?v=1695625620&width=600' className='imge'/>
            <img src='' className='imge'/>
            <img src='' className='imge'/>
            
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://www.oorla.in/cdn/shop/files/SpicyPeanuts2_077bb110-27ce-4568-9ca2-87ddf227d0c9.jpg?v=1695625620&width=600' className='imge'/>
            <img src='' className='imge'/>
            <img src='' className='imge'/>
            <img src='' className='imge'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://www.oorla.in/cdn/shop/files/ErodeJangiri1.jpg?v=1695624512&width=600' className='imge'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://www.oorla.in/cdn/shop/files/ChettinaduThattaiMurukku2.jpg?v=1695625101&width=600' className='imge'/>
        </SwiperSlide>
      </Swiper>
      <h1 className=''>Sweets</h1>
      <Swiper navigation={true} modules={[Navigation]} className="p-3 mySwiper">
        <SwiperSlide>
            <img src='https://www.oorla.in/cdn/shop/files/Palkova6.jpg?v=1695623256&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/OotyMasalaVarkey2.jpg?v=1695969684&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/NagercoilNendranChips2.jpg?v=1695624992&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/SatturMilagusev2.jpg?v=1695625310&width=600' className='imge'/>
            
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://www.oorla.in/cdn/shop/files/NagercoilNendranChips2.jpg?v=1695624992&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/Palkova6.jpg?v=1695623256&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/Palkova6.jpg?v=1695623256&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/KovilpattiKadalaiMittai2_662a86ae-c8aa-4c08-91a7-68d84949efea.jpg?v=1695962894&width=600' className='imge'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://www.oorla.in/cdn/shop/files/TirunelveliHalwa2.jpg?v=1695623373&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/SpicyPeanuts2_077bb110-27ce-4568-9ca2-87ddf227d0c9.jpg?v=1695625620&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/MudalurMuscothHalwa2.jpg?v=1695623874&width=600' className='imge'/>
            <img src='https://cdn.shopify.com/s/files/1/0604/7832/4995/files/ThoothukudiWineBiscuits1_70d9355d-410c-45e8-a736-45ab2bc55125.jpg?v=1697776491&width=400' className='imge'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://www.oorla.in/cdn/shop/files/udupiMixture2.jpg?v=1695625045&width=600' className='imge'/>
            <img src='https://www.oorla.in/cdn/shop/files/SpicyPeanuts2_077bb110-27ce-4568-9ca2-87ddf227d0c9.jpg?v=1695625620&width=600' className='imge'/>
            <img src='' className='imge'/>
            <img src='' className='imge'/>
            
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://www.oorla.in/cdn/shop/files/SpicyPeanuts2_077bb110-27ce-4568-9ca2-87ddf227d0c9.jpg?v=1695625620&width=600' className='imge'/>
            <img src='' className='imge'/>
            <img src='' className='imge'/>
            <img src='' className='imge'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://www.oorla.in/cdn/shop/files/ErodeJangiri1.jpg?v=1695624512&width=600' className='imge'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://www.oorla.in/cdn/shop/files/ChettinaduThattaiMurukku2.jpg?v=1695625101&width=600' className='imge'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
