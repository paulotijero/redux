function reset() {
  return { type: "RESET" };
}

function addProduct(product) {
  return {
    type: "ADD_PRODUCT",
    payload: {
      product
    }
  };
}

export { reset, addProduct };
