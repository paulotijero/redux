import React from "react";
import { useSelectProduct } from "../selectors";
import { useAddProduct } from "../action-hooks";

function Product({ id }) {
  const product = useSelectProduct(parseInt(id));
  const addProductToCart = useAddProduct();

  function handleClick() {
    addProductToCart(product);
  }

  return (
    <>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <button onClick={handleClick}>Add to cart!</button>
    </>
  );
}

export default Product;
