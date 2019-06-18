/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { useProducts } from "../selectors";
import { Link } from "@reach/router";

function Products() {
  const products = useProducts();

  return (
    <>
      {products.map(product => {
        return (
          <Link to={`/products/${product.id}`}>
            <h3 css={{ textAlign: "center" }}>{product.name}</h3>
          </Link>
        );
      })}
    </>
  );
}

export default Products;
