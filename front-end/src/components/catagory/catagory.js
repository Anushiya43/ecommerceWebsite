import React from 'react';
import "./catagory.css"

function Catagory() {
  return (
    <div className='container catagory'>
        <div className='row'>
            <div className='col-12 cat d-flex flex-row justify-content-center text-center'>
            <div className='pad'>
                <img src="food1/Petti_1.png" className=''/>
                <p>Petti</p>
            </div>
            <div className='pad'>
                <img src="food1/Sweets_Snacks_2.png" className=''/>
                <p>Sweets & Snacks</p>
            </div>
            <div className='pad'>
                <img src="food1/Masala_3.png" className=''/>
                <p>Masala</p>
            </div> 
            
            <div className='pad'>
                <img src="food1/Pickle_3.png" className=''/>
                <p>Pickle</p>
            </div>
            
            <div className='pad'>
                <img src="food1/Honey_3.png" className=''/>
                <p>Honey</p>
            </div> 
           
            <div className='pad'>
                <img src="food1/Coffee_5.png" className=''/>
                <p>Coffee</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Catagory;