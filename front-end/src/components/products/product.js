import React from 'react';
import "./product.css";
import { Link } from 'react-router-dom';

function Product({data,products,setProducts,setSingle}) {  
    console.log(products);     
  return (
    <div id="product" className='container product'>
        <div className='row'>
    <div className='col-12 text-right'>
    <select name="cars" id="cars" className='btn btn-white  m-2 px-5' onChange={(e)=>setProducts(e.target.value) }>
        <option value="snacks" className='btn btn-white px-5'>snacks</option>
        <option value="pickles">pickles</option>
        <option value="masala">masala</option>
        <option value="kitchen">kitchen</option>
        <option value="k">k</option>
    </select>

    </div>
        <div className='col-12 flex text-center'>
         { data[products] && data[products].map(d => {

            return( 
                <Link to="single/" className='link'>            
                <div className='card card1 shadow-lg m-0' key={d.id}  onClick={()=>{setSingle({d})}}>                    
                    <img src={d.pic} className="product_img w-100 text-center"/>
                    <span className='w-100'>{d.name}</span>   
                    <span className='text-secondary'>{products}</span>
                    <span>{d.selling_rate}</span>
                    <p className='text-right'>
                    <button className='btn text-info'>
                    <i class="fa-solid fa-cart-shopping fa-xl"></i>
                    </button>
                    </p>                            
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

export default Product