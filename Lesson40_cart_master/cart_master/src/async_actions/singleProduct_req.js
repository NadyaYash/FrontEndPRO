import { loadSingleProductsAction } from "../store/reducers/singleProductReducer";
export const getSingleProduct = id => {
    return dispatch => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(json => dispatch(loadSingleProductsAction(json)))
    }
}
