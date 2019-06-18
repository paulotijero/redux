const initialState = {
  products: {
    1: {
      id: 1,
      name: "Product Number 1",
      price: 30
    },
    2: {
      id: 2,
      name: "Product Number 2",
      price: 20
    },
    3: {
      id: 3,
      name: "Product Number 3",
      price: 10
    },
    4: {
      id: 4,
      name: "Product Number 4",
      price: 5
    }
  },
  cart: {}
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      if (state.cart.hasOwnProperty(action.payload.product.id)) {
        const findProduct = state.cart[action.payload.product.id];
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.product.id]: {
              ...findProduct,
              quantity: findProduct.quantity + 1
            }
          }
        };
      }

      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.product.id]: {
            ...action.payload.product,
            quantity: 1
          }
        }
      };
    }
    case "RESET": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
