import React from "react";
import { useContext } from "react";
import { cartContext } from "../../providers/cartcontext";
import ReactWhatsapp from "react-whatsapp";

function Cart() {
  const { cartProduct, setCartProduct, order, setOrder, addCart, setAddCart } =
    useContext(cartContext);
  {
    /*} function handleBuy(data) {
    if (!order.includes(data)) {
      setOrder((pre) => {
        return [...pre, data];
      });
      setAddCart(addCart + 1);
    } else {
      alert("alredy ordered");
    }
  }*/
  }
  function handleDelete(id) {
    console.log("id", id);
    const cartData = cartProduct.filter((d) => d.pic !== id);
    setCartProduct(cartData);
    {
      /*setAddCart(addCart > 0 ? addCart - 1 : 0);*/
    }
  }

  return (
    <div className="container cart">
      <div className="row">
        {cartProduct &&
          cartProduct.map((data) => {
            return (
              <>
                <div className="col-4 col-lg-3 cart my-5" key={data.id}>
                  <img src={data.pic} className="w-50 cart shadow" alt="pic" />
                </div>
                <div className="col-8 mt-2 col-lg-3 cart">
                  <i
                    class="fa-solid fa-delete-left fa-xl w-100 text-right text-secondary"
                    onClick={() => {
                      handleDelete(data.pic);
                    }}
                  ></i>
                  <p className="">{data.name}</p>
                  <p className="">
                    <span className="sPrice">Rs {data.price}</span>
                  </p>
                  <p className="">
                    quantity: {data.weight} {data.weight === 1 ? "kg" : "g"}
                  </p>
                  <p>qty : {data.qty}</p>
                  <p className="d-flex mx-1">
                    {/*<button
                      className="btn btn-primary"
                      onClick={() => handleBuy(data)}
                    >
                      Buy Now
                  </button>*/}
                    <ReactWhatsapp
                      number="+918015241898"
                      className="btn btn-primary"
                      message={
                        data.pic +
                        ' \n Product Name' +
                        data.name +
                        " " +
                        data.weight +
                        " \n Price" +
                        data.price
                      }
                    >
                      Buy Now
                    </ReactWhatsapp>
                  </p>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Cart;
