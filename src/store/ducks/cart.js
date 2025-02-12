// src/components/productCard.jsx

import { Product } from "../../models/Product";

export const Types = {
  ADD_TO_CART: "cart/ADD_TO_CART",
  REMOVE_FROM_CART: "cart/REMOVE_FROM_CART",
  UPDATE_QUANTITY: "cart/UPDATE_QUANTITY",
  CLEAR_CART: "cart/CLEAR_CART",
  CHECKOUT: "cart/CHECKOUT",
  CHECKOUT_SUCCESS: "cart/CHECKOUT_SUCCESS",
  CHECKOUT_FAILURE: "cart/CHECKOUT_FAILURE",
};

const INITIAL_STATE = {
  items: [],
  total: 0,
  qtd: 0,
};

export default function CartDuck(state = INITIAL_STATE, action) {
  let product;
  switch (action.type) {
    // case Types.ADD_TO_CART:
    //   const existingProduct = state.items.find((item) => item.id === action.product.id);
    //   if (existingProduct) {
    //     existingProduct.quantity += 1;
    //     return {
    //       ...state,
    //       total: state.total + parseFloat(existingProduct.price),
    //       qtd: state.qtd + 1,
    //     };
    //   }
    //   product = new Product(action.product.id, action.product.name, action.product.description, action.product.image, action.product.price);
    //   return {
    //     ...state,
    //     items: [...state.items, { ...product, quantity: 1 }],
    //     total: state.total + parseFloat(product.price),
    //     qtd: state.qtd + 1,
    //   };
    case Types.ADD_TO_CART:
      const existingProduct = state.items.find((item) => item.id === action.product.id);
      if (existingProduct) {
        return state; // Se o produto já está no carrinho, não adiciona novamente
      }

      const product = {
        ...action.product,
        cartQuantity: 1, // Define a quantidade inicial no carrinho
        stock: action.product.quantity, // 🔥 Armazena o estoque disponível
      };

      return {
        ...state,
        items: [...state.items, product],
        total: state.total + parseFloat(product.price),
        qtd: state.qtd + 1,
      };
    // case Types.REMOVE_FROM_CART:
    //   product = state.items.find((item) => item.id === action.product.id);
    //   if (product.quantity === 1) {
    //     return {
    //       ...state,
    //       items: state.items.filter((item) => item.id !== action.product.id),
    //       total: state.total - parseFloat(product.price),
    //       qtd: state.qtd - 1,
    //     };
    //   }

    // case Types.REMOVE_FROM_CART:
    //   return {
    //     ...state,
    //     items: state.items.filter((item) => item.id !== action.product.id), // 🔥 Remove o item se a quantidade for 0
    //     total: state.total - parseFloat(action.product.price) * action.product.quantity,
    //   };
    
    case Types.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.product.id), // 🔥 Remove completamente o item do carrinho
        total: state.total - parseFloat(action.product.price) * action.product.quantity,
        qtd: state.qtd - action.product.quantity,
      };
    
    

      product.quantity -= 1;
      return {
        ...state,
        total: state.total - parseFloat(product.price),
        qtd: state.qtd - 1,
      };
    // case Types.UPDATE_QUANTITY:
    //   const productToUpdate = state.items.find((item) => item.id === action.product.id);
    //   const diff = action.quantity - productToUpdate.quantity;
    //   productToUpdate.quantity = action.quantity;
    //   return {
    //     ...state,
    //     total: state.total + diff * parseFloat(productToUpdate.price),
    //     qtd: state.qtd + diff,
    //   };

    case Types.UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: Math.max(1, Math.min(action.quantity, item.stock)) } // 🔥 Limita entre 1 e o estoque
            : item
        ),
        total: state.items.reduce(
          (acc, item) =>
            item.id === action.product.id
              ? acc + parseFloat(item.price) * Math.max(1, Math.min(action.quantity, item.stock))
              : acc + parseFloat(item.price) * item.quantity,
          0
        ),
      };
    

    case Types.CLEAR_CART:
      return {
        ...state,
        items: [],
        total: 0,
        qtd: 0,
      };
    case Types.CHECKOUT:
      return state;
    case Types.CHECKOUT_SUCCESS:
      return {
        ...state,
        items: [],
        total: 0,
        qtd: 0,
      };
    case Types.CHECKOUT_FAILURE:
      return state;
    default:
      return state;
  }
}

export const Creators = {
  addToCart: (product) => ({
    type: Types.ADD_TO_CART,
    product,
  }),
  removeFromCart: (product) => ({
    type: Types.REMOVE_FROM_CART,
    product,
  }),
  updateQuantity: (product, quantity) => ({
    type: Types.UPDATE_QUANTITY,
    product,
    quantity,
  }),
  clearCart: () => ({
    type: Types.CLEAR_CART,
  }),
  checkout: () => ({
    type: Types.CHECKOUT,
  }),
  checkoutSuccess: () => ({
    type: Types.CHECKOUT_SUCCESS,
  }),
  checkoutFailure: () => ({
    type: Types.CHECKOUT_FAILURE,
  }),
};
