import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div style={{ marginTop: "100px" }} className="mg-top">
      <div className="row justify-content-center ">
        <div className="col-md-5 mt-5 our-text-decor shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}
          <div>
            <input
              value={email}
              required
              type="text"
              placeholder="email"
              className="form-control"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              value={password}
              required
              type="text"
              placeholder="password"
              className="form-control"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <button onClick={login} className="btn mt-3 mb-2">
              LOGIN
            </button>
            <br />
            <a
              href="/register"
              style={{ color: "black", textDecoration: "none" }}
            >
              Click Here To Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
