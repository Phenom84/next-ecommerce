

export function globalReducer(state, action) {
    const {
        type,
        payload,
    } = action;

    switch (type) {
        case 'ADD_TO_CART': {
            const addedProduct = state.products.find(product => product.id === payload.id);
            let updatedCart = [...state.cart];
            let cartItemExist = updatedCart.find(product => product.id == payload.id);
            if (cartItemExist) {
                cartItemExist.qty += payload.qty
            } else {
                updatedCart.push({
                    ...addedProduct,
                    qty: payload.qty
                });
            }
            return {
                ...state,
                cart: updatedCart
            }
        }
        case 'REMOVE_FROM_CART': {
            const updatedCart = state.cart.filter(cartItem => cartItem.id !== payload.id);
            return {
                ...state,
                cart: updatedCart
            }
        }
        case 'ADD_TO_WISHLIST': {
            const addedProduct = state.products.find(product => product.id === payload.id);
            let updatedWishlist = [...state.wishlist];
            let wishlistItemExist = updatedWishlist.find(product => product.id === payload.id);
            if (!wishlistItemExist) {
            updatedWishlist.push({
                ...addedProduct,
                qty: 1
            });
        }
            return {
                ...state,
                wishlist: updatedWishlist
            }
        }
        case 'REMOVE_FROM_WISHLIST': {
            const updatedWishlist = state.wishlist.filter(wishlistItem => wishlistItem.id !== payload.id);

            return {
                ...state,
                wishlist: updatedWishlist
            }
        }
        default:
            throw new Error(`Unhandled action type ${type}`);
    }
}