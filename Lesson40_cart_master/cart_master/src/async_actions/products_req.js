import { loadAllProductsAction } from "../store/reducers/productReducer"

export const getProducts = dispatch => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => dispatch(loadAllProductsAction(json.products)))
}