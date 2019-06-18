import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function useProducts() {
  return useSelector(state => Object.values(state.products), shallowEqual);
}

function useCartProducts() {
  return useSelector(state => Object.values(state.cart), shallowEqual);
}

function useSelectProduct(id) {
  return useSelector(state => state.products[id], shallowEqual);
}

function useTotal() {
  return useSelector(state =>
    Object.values(state.cart).reduce((a, b) => {
      return a + b.quantity * b.price;
    }, 0)
  );
}

export { useProducts, useCartProducts, useSelectProduct, useTotal };
