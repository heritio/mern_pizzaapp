import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaActions";
export default function Homescreen() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div style={{ marginTop: "100px" }} className="mg-top">
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
        ) : (
          pizzas.map((pizza) => {
            return (
              <div
                key={pizza._id}
                className="col-md-3  m-3 shadow-lg p-3 mb-5 bg-white rounded"
              >
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
