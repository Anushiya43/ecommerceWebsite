import React, { useContext } from 'react';
import "./single.css";
import { cartContext } from '../../providers/cartcontext';
import { Link } from 'react-router-dom';

function Single({single,products,data,setSingle}) {

  const {CartProduct,setCartProduct,user} = useContext(cartContext);
  function handleClick() {
    setCartProduct(previousState => 
      [...previousState, single.d]
    );
  }
  console.log("gfff",single)
  console.log('cartdata',CartProduct)
  return (
    <div className='container'>
    <div className='row shadow'>
    <div className='col-12 col-md-5 single my-4 mx-0 py-3' id="single">
      <img src={single.d.pic} className="w-100 my-2 shadow"/>
    </div>  
    <div className='col-12 col-md-7 py-3 d-flex flex-column justify-content-center'>
      <h1 className='h4'>{single.d.name}</h1>
      <p className='text-warning'>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      </p>
      <p className='h6'><span className='oPrice'>{single.d.original_price}</span> from <span className='sPrice'>{single.d.selling_rate}</span></p>
      <p className='h6'>{products}</p>
      <p className='h6'>quantity: {single.d.weight}g</p>
      <p>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-light active">
            <input type="radio" name="options" id="option1" checked/> -
          </label>
          <label class="btn btn-light">
            <input type="radio" name="options" id="option2"/> 1
          </label>
          <label class="btn btn-light">
            <input type="radio" name="options" id="option3"/> +
          </label>
        </div>
      </p>
      <p className='text-right m-4'>
      <Link to={user?"/cart":"/login"}>
      <button className='btn btn-info w-100' onClick={handleClick}>
      Add Card
      </button>
      </Link>
      </p>       
    </div>
     </div>
    </div>    
  )
}

export default Single;