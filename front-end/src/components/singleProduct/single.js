import React, { useContext, useState } from "react";
import "./single.css";
import { cartContext } from "../../providers/cartcontext";
import { Link } from "react-router-dom";

function Single({ single, products, data, setSingle }) {
  const d = single.d;
  console.log(d);
  const [weights, setWeight] = useState(250);
  const [qtys, setQty] = useState(1);
  const { cartProduct, setCartProduct } = useContext(cartContext);
  function handleClick() {
    const a = {
      name: d.name,
      pic: d.pic,
      price:
        parseInt(d.selling_rate) * qtys * (weights === 1 ? 4 : weights / 250),
      weight: weights,
      qty: qtys,
    };
    setCartProduct((previousState) => [...previousState, a]);
  }

  return (
    <div className="container">
      <div className="row shadow">
        <div className="col-12 col-md-5 single my-4 mx-0 py-3" id="single">
          <img src={d.pic} className="w-75  my-2 single_img shadow" alt="pic" />
        </div>
        <div className="col-12 col-md-7 py-3 d-flex flex-column justify-content-center">
          <p className="h4 font-weight-bold">{d.name}</p>
          <p className="text-warning">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </p>
          <p className="h6">
            <span className="oPrice">Rs {d.original_price}</span> from{" "}
            <span className="sPrice">Rs {d.selling_rate}</span>
          </p>
          <p className="h6">{products}</p>
          <p className="h6">
            quantity:
            <button className="btn btn-info m-1" onClick={() => setWeight(250)}>
              250g
            </button>
            <button className="btn btn-info m-1" onClick={() => setWeight(500)}>
              500g
            </button>
            <button className="btn btn-info m-1" onClick={() => setWeight(1)}>
              1Kg
            </button>
          </p>
          <p>
            {weights} {weights === 1 ? "Kg" : "g"}
          </p>
          <p>
            <button
              className="btn btn-light"
              onClick={() => setQty((qtys) => (qtys > 0 ? qtys - 1 : 0))}
            >
              -
            </button>
            <label className="btn">{qtys}</label>
            <button
              className="btn btn-light"
              onClick={() => setQty((qtys) => (qtys < 20 ? qtys + 1 : 20))}
            >
              +
            </button>
          </p>
          <p className="text-right m-4">
            <Link to="cart/" className="link">
              <button className="btn btn-info w-100" onClick={handleClick}>
                Add Card
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Single;
