/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { jsx, Global } from "@emotion/core";

import Products from "./views/products";
import Product from "./views/product";

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
      <Router>
        <Products path="/" />
        <Product path="products/:id" />
      </Router>
    </>
  );
}

render(<App />, document.getElementById("root"));
