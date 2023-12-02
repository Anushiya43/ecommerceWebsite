import React, { useState } from 'react';
import "./product.css";
import { Link } from 'react-router-dom';
import { catagory } from '../data/catagorydata';

function Product({data,products,setProducts,setSingle}) {  
    console.log(products);     
    const [productData,setProductData] = useState(data.filter((d)=> {return d.catogory === products}))
    
    function handleChange(e){
        setProducts(e.target.value)
        setProductData(data.filter((d)=> {return d.catogory === e.target.value}))        
    }
  return (
    <div id="product" className='container product pb-1'>
        <div className='row'>
    <div className='col-12 text-right'>
    <select name="cars" id="cars" className='btn btn-white  m-2 px-5' onChange={(e)=>handleChange(e)}>
        {catagory.map((d) =>{
            return <option value={d.value}>{d.value}</option>
        })}
    </select>

    </div>
        <div className='col-12 flex text-center'>
         { productData && productData.map(d => {

            return( 
                <Link to="single/" className='link'>            
                <div className='card card1 shadow-lg m-0 p-0 my-2 text-center' key={d.id}  onClick={()=>{setSingle({d})}}>                    
                    <img src={d.pic} className="product_img w-100"/>
                    <span className='w-100'>{d.name}</span>   
                    <span className='text-secondary w-100'>{d.catogory}</span>
                    <span className='w-100'>{d.selling_rate}</span>                            
             </div>  
             </Link> 
                      
            )
        })
        } 
        </div>
        </div>
    </div>
  )
}

export default Product;