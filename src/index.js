/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import { jsx, Global } from "@emotion/core";

import Products from "./views/products";
import Product from "./views/product";
import Cart from "./views/cart";
import Navbar from "./components/navbar";
import store from "./store";

const global = {
  body: {
    margin: 0,
    fontFamily: "Roboto, sans-serif",
    background: "#f2f3f5",
    color: "#34495e",
    fontSize: "15px"
  }
};

function App() {
  return (
    <>
      <Global styles={global} />
      <Navbar />
      <Router>
        <Products path="/" />
        <Product path="products/:id" />
        <Cart path="/cart" />
      </Router>
    </>
  );
}

const $root = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  $root
);
