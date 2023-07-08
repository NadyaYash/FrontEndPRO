const ADD_TO_CART = '[PRODUCT_ITEM] ADD_TO_CART';
const DELETE_CART = '[CART] DELETE_CART';
const COUNT_MORE = '[CART] COUNT_MORE';
const COUNT_LESS = '[CART] COUNT_LESS';

export const addToCartAction = payload => ({ type: ADD_TO_CART, payload });
export const deleteCartAction = payload => ({ type: DELETE_CART, payload });
export const countMoreAction = payload => ({ type: COUNT_MORE, payload });
export const countLessAction = payload => ({ type: COUNT_LESS, payload });


const checkProductInCart = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id)
    if (productInState) {
        productInState.count++;
        return [...state]
    } else {
        return [...state, { ...payload, count: 1, fullPrice: payload.discont_price ? payload.discont_price : payload.price }]
    }
}


export const cartReducer = (state = [], action) => {
    if (action.type === ADD_TO_CART) {
        return checkProductInCart(state, action.payload)
    } else if (action.type === DELETE_CART) {
        return state.filter(el => el.id !== action.payload)
    } else if (action.type === COUNT_MORE) {
        state.find(el => el.id === action.payload).count++
        return [...state]

    }
    else if (action.type === COUNT_LESS) {
        const target_cart = state.find(el => el.id === action.payload);
        if (target_cart.count === 1) {
            return state.filter(el => el.id !== action.payload)
        }

        else {
            target_cart.count--
            return [...state]
        }
    }
    else {
        return state
    }

}