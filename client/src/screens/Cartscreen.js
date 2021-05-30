import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";
export default function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: "100px" }} className="mg-top">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My cart</h2>

          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="our-text-decor m-1 w-100">
                  <h1>
                    {item.name} [{item.varient}]
                  </h1>
                  Pris: {item.quantity} * {item.prices[0][item.varient]}={" "}
                  {item.price}
                  <h1>
                    Quantity:{" "}
                    <i
                      className="fas fa-plus"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity + 1, item.varient)
                        );
                      }}
                    ></i>
                    <b>{item.quantity}</b>
                    <i
                      className="fas fa-minus"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity - 1, item.varient)
                        );
                      }}
                    ></i>
                  </h1>
                  <hr style={{ color: "green" }} />
                </div>
                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    style={{ height: "80px", width: "80px" }}
                    alt={item.name}
                  />
                </div>

                <div className="m-1 w-100">
                  <i
                    className="fas fa-trash mt-5"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4 our-text-decor-right">
          <h2 style={{ fontSize: "45px" }}>SubTotal: {subtotal} /Kr-</h2>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
