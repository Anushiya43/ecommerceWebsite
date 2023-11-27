
import React from 'react';
import Catagory from '../components/catagory/catagory';
import Banner from '../components/banner/banner';
import Feature from '../components/Feature/feature';



function Home({catagory,setProducts,products,data,setSingle}) {
  return (
   <div>
    <Catagory catagory={catagory} setProducts={setProducts}/>
    <Banner/>
    <Feature data={data} products={products} setSingle={setSingle}/>    
   </div>
  )
}

export default Home