import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm shadow-lg p-3 mb-5 bg-white rounded mobile-nav">
        <a className="navbar-brand" href="/">
          <span role="img">🍕</span>
          <span className="red">Haugesund</span>{" "}
          <span className="green">Pizzeria</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
              <div style={{ display: "flex" }}>
                <a className="m-2 list-style">Orders</a>
                <a
                  className="m-2 list-style"
                  onClick={() => dispatch(logoutUser())}
                >
                  <li>Logout</li>
                </a>
              </div>
            ) : (
              <li className="nav-item ">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li
              className="nav-item"
              style={{ background: "#FFE2DB", borderBottom: "1px solid black" }}
            >
              <a className="nav-link" href="/cart">
                Cart <span className="green">{cartstate.cartItems.length}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
