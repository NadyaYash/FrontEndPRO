export const add_product_action = payload => ({type: 'ADD_PRODUCT', payload})
export const delete_product_action = payload => ({type: 'DELETE_PRODUCT', payload})
export const delete_all_products = () => ({type: 'DELETE_ALL_PRODUCTS'})

export const productReducer = (state=[], action) => {
    if(action.type==='ADD_PRODUCT'){
        return [...state, action.payload]
    }
    else if(action.type==='DELETE_PRODUCT'){
        return state.filter(el=> el.id !== action.payload)}
        else if(action.type==='DELETE_ALL_PRODUCTS') {return []}
    else {return state}
    
}

