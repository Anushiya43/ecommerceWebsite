import React, { useContext, useState, useEffect } from "react";
import { cartContext } from "../../providers/cartcontext";
import "./order.css";
import ReactWhatsapp from "react-whatsapp";

function Order() {
  const { order, setOrder, addCart } = useContext(cartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const total = order.reduce((acc, product) => acc + product.price, 0);
    setTotalPrice(total);
  }, [order]);
  console.log("order", order);
  return (
    <div className="container">
      <div className="row">
        <button
          type="button"
          class="btn btn-info font-weight-bold ml-auto p-2 pl-4 my-2"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Ok{"   "}
          <span className="p-2  bg-danger text-white">{addCart}</span>
        </button>

        <div
          class=" col-12 modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Your Orders
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {order &&
                  order.map((o) => {
                    return (
                      <div className="d-flex">
                        <div
                          className="w-25
                        "
                        >
                          <img src={o.pic} className="order-image" alt="pic" />
                        </div>
                        <div className="w-75 text-left">
                          <p>{o.name}</p>
                          <p>
                            {o.weight}
                            {o.weight === 1 ? "Kg" : "g"}
                          </p>
                          <p>qty : {o.qty}</p>
                          <p className="w-75 font-weight-bold text-right">
                            Rs {o.price}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div>
                <br />
                <hr />
                <br />
                <div className="d-flex">
                  <p className="w-50">Total = {order.length}</p>
                  <p className="w-50">Total Amount = Rs {totalPrice}</p>
                </div>
                <br />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => setOrder([])}
                >
                  Clear All
                </button>
                <ReactWhatsapp
                  number="+918015241898"
                  className="btn btn-primary"
                  message={"hi"}
                >
                  Buy Now
                </ReactWhatsapp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
