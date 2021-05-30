import React, { useState, useEffect } from "react";
import Error from "../components/Error";

import Loading from "../components/Loading";

import Success from "../components/Success";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;
  const dispatch = useDispatch();
  function register() {
    if (password !== cpassword) {
      alert("passwords not matched");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }
  return (
    <div style={{ marginTop: "100px" }} className="mg-top">
      <div className="row justify-content-center ">
        <div className="col-md-5 mt-5 our-text-decor shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {success && <Success success="User Registered succesfully" />}
          {error && <Error error="Email already registered" />}

          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <input
              required
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <button onClick={register} className="btn mt-3 mb-2">
              REGISTER
            </button>
            <br />
            <a href="/login" style={{ color: "black", textDecoration: "none" }}>
              Click Here To Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
