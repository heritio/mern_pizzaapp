import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
export default function Checkout({ subtotal }) {
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51IwovOGAZeNDJEOrGHrDO7yFXFcZn6IFU5In3OvmSuB1BZAop8hPjYHkPUc4gCJWHzBt6TNLwwlbjiPtw9SxSok000ztycHMZe"
        currency="NOK"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
