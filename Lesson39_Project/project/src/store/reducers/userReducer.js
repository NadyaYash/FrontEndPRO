export const add_user_action = payload => ({type: 'ADD_USER', payload})
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const DELETE_USER = 'DELETE_USER'
export const loadAllProductsAction = payload => ({type: LOAD_PRODUCTS, payload})
export const deleteUserAction = payload => ({type: DELETE_USER, payload})

export const userReducer = (state=[], action) => {
    if(action.type==='ADD_USER'){
        return [...state, action.payload]
    } else if(action.type === LOAD_PRODUCTS){
        return action.payload
    }
    else if(action.type=== DELETE_USER){
        return state.filter(el => el.id !== action.payload)
    }
    else {return state}
    
}