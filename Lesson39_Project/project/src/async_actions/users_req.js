import { loadAllProductsAction } from "../store/reducers/userReducer"

export const getUsers = dispatch => {
    fetch('https://dummyjson.com/products ')
    .then(res => res.json())
    .then(json => dispatch(loadAllProductsAction(json.products)))
}