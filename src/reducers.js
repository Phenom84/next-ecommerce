export function globalReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART": {
      let addedProduct = state.products.find(
        (product) => product.id === payload.id
      );
      let updatedCart = [...state.cart];
      let cartItem = updatedCart.find((product) => product.id == payload.id);
      if (cartItem) {
        cartItem.qty += payload.qty;
      } else {
        updatedCart.push({
          ...addedProduct,
          qty: payload.qty,
        });
      }

      return {
        ...state,
        cart: updatedCart,
      };
    }
    case "REMOVE_FROM_CART_ONE_ITEM": {
      let updatedCart = [...state.cart];
      let cartItem = updatedCart.find((product) => product.id == payload.id);
      if (cartItem.qty > 1) {
        cartItem.qty -= payload.qty;
      }
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (cartItem) => cartItem.id !== payload.id
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case "WISHLIST_HANDLE": {
      const addedProduct = state.products.find(
        (product) => product.id === payload.id
      );
      let updatedWishlist = [...state.wishlist];
      let wishlistItemExist = updatedWishlist.find(
        (product) => product.id === payload.id
      );
      if (wishlistItemExist) {
        updatedWishlist = state.wishlist.filter(
          (wishlistItem) => wishlistItem.id !== payload.id
        );
      } else {
        updatedWishlist.push({ ...addedProduct, qty: 1 });
      }
      return {
        ...state,
        wishlist: updatedWishlist,
      };
    }
    case "COUNTER_HANDLE": {
      const addedProduct = state.products.find(
        (product) => product.id === payload.id
      );
      let updatedProducts = [...state.products];
      if (addedProduct) {
        addedProduct.count = payload.count;
      }
      return {
        ...state,
        products: updatedProducts,
      };
    }
    default:
      throw new Error(`Unhandled action type ${type}`);
  }
}
