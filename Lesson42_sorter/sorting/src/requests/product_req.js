import { loadAllProductsAction } from './../store/reducers/productReducer'



export const getProducts = dispatch => {
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(json => {
            const new_json = json.map(el => ({ ...el, hide_price: false }))
            dispatch(loadAllProductsAction(new_json))
        })
}