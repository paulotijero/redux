import React from "react";
import { useDispatch } from "react-redux";

import { reset, addProduct } from "./actions";

export function useReset() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(reset()), [dispatch]);
}

export function useAddProduct() {
  const dispatch = useDispatch();
  return React.useCallback(product => dispatch(addProduct(product)), [
    dispatch
  ]);
}
