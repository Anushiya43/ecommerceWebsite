import React from 'react';
import "./catagory.css";
import { Link } from 'react-router-dom';

function Catagory({catagory,setProducts}) {
   
  return (
    <div className='container catagory py-5'>
        <div className='row'>
            <div className='col-12 cat d-flex flex-row justify-content-center text-center'>            
                {
                catagory.map(c =>{
                    return(
                        <div className='pad' onClick={()=>setProducts(c.value)} key={c.id}>
                            <Link to={"/product"} className='link'>
                            <img src={c.pic} className=''/>
                            <p>{c.name}</p>
                            </Link>
                           </div> 
                            )
                        }
                 )}            
            </div>
        </div>
    </div>
  )
}

export default Catagory;