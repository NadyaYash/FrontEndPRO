const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
export const loadAllProductsAction = payload => ({ type: LOAD_PRODUCTS, payload })


export const productReducer = (state = [], action) => {
    if (action.type === LOAD_PRODUCTS) {
        return action.payload
    }

    else { return state }

}