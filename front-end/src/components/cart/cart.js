import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../providers/cartcontext'
import ReactWhatsapp from 'react-whatsapp';

function Cart() {
   const {cartProduct,setCartProduct,user} = useContext(cartContext)
   console.log("user",user)
   console.log("cart1",cartProduct)
   
   function handleClick(data){
    console.log('delete',data)
    const cartData = cartProduct.filter((d)=> d.id !== data)
    setCartProduct(cartData)
    console.log('s',cartData
    )
  }
   
  return (
    <div className='container cart'>
      <div className='row'>
        { cartProduct &&  cartProduct.map(data =>{
          return( 
          <>
          <div className='col-4 col-lg-3 cart my-5 px-2' key={data.id}>
          <img src={data.pic} className="w-100 shadow"/>
          </div>
          <div className='col-8 mt-2 col-lg-3 cart'>
          <i class="fa-solid fa-delete-left fa-xl w-100 text-right text-secondary"  onClick={()=>{handleClick(data.id)}}></i>
          <p className=''>{data.name} <span className='d-lg-none'>{data.weight}g</span></p>
          <p className=''><span className='oPrice'>{data.original_price}</span> <span className='sPrice'>{data.selling_rate}</span></p>
          <p className='d-none d-lg-block'>quantity: {data.weight}g</p>
          <p className='d-flex mx-1'>
          <span class="btn-group btn-group-toggle mx-1 w-50" data-toggle="buttons">
              <label class="btn btn-light active">
                <input type="radio" name="options" id="option1" checked/> -
              </label>
              <label class="btn btn-light">
                <input type="radio" name="options" id="option2"/> 1 
              </label>
              <label class="btn btn-light">
                <input type="radio" name="options" id="option3"/> +
              </label>
            </span>  
            <ReactWhatsapp
              number="+918015241898"
              className="btn btn-info"
              message={data.pic+"\nName: "+data.name+"\n"+"Rate: "+data.selling_rate+"\n"+"weight "+data.weight+"\n"+"quantity "+data.quantity}>
                Buy Now
              </ReactWhatsapp>
          </p>
          
        </div>
        </>
          )})}
          </div>    
    </div>

  )
}

export default Cart