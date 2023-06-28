const LOAD_PRODUCTS = '[PRODUCT_CONTAINER]LOAD_PRODUCTS';
const SORT_PRODUCTS = '[PRODUCT_CONTAINER]SORT_PRODUCTS';
const FILTER_PRODUCTS_BY_PRICE = '[PRODUCT_CONTAINER]FILTER_PRODUCTS_BY_PRICE';




export const loadAllProductsAction = payload => ({ type: LOAD_PRODUCTS, payload });
export const sortProductsAction = payload => ({ type: SORT_PRODUCTS, payload });
export const filterProductByPriceAction = payload => ({ type: FILTER_PRODUCTS_BY_PRICE, payload });


export const productReducer = (state = [], action) => {
    if (action.type === LOAD_PRODUCTS) {
        return action.payload
    }
    else if (action.type === SORT_PRODUCTS) {
        if (action.payload === 'title') {
            state.sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
        } else if (action.payload === 'price') {
            state.sort((a, b) => a[action.payload] - b[action.payload])
        }
        
        return [...state]

    }
    else if(action.type === FILTER_PRODUCTS_BY_PRICE){
        const {min_value, max_value} = action.payload;
        return state.map(el=>{
            if(el.price >= min_value && el.price <+ max_value){
                el.hide_price = true
            } else {
                el.hide_price = false
            }
            return el
        })
    }
    else { return state }

}