/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { useCartProducts, useGetTotal } from "../selectors";

function Cart() {
  const products = useCartProducts();
  const total = useGetTotal();

  return (
    <>
      <table css={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => {
            return (
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.price * product.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div css={{ textAlign: "right", marginTop: "1em", paddingRight: "4em" }}>
        The total is {total}
      </div>
    </>
  );
}

export default Cart;
