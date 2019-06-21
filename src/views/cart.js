/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { connect } from "react-redux";
import { useCartProducts, useTotal } from "../selectors";
import { addProduct } from "../actions";

function getTotal(products) {
  return products.reduce((a, b) => {
    return a + b.quantity * b.price;
  }, 0);
}

function Cart({ products, addProduct }) {
  const total = getTotal(products);

  function handleAddProductClick(event) {
    addProduct(
      products.find(
        product => product.id === parseInt(event.target.dataset.product, 10)
      )
    );
  }

  return (
    <>
      <table>
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
                <td>
                  <button
                    onClick={handleAddProductClick}
                    data-product={product.id}
                  >
                    +
                  </button>
                </td>
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

function mapState(state) {
  return {
    products: Object.values(state.cart)
  };
}

function mapDispatch(dispatch) {
  return {
    addProduct(product) {
      return dispatch(addProduct(product));
    }
  };
}

export default connect(
  mapState,
  mapDispatch
)(Cart);
