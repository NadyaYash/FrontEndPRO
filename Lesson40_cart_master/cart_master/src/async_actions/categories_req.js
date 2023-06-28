import { loadAllCategoriesAction } from '../store/reducers/categoryReducer'
import { loadSingleCategoryAction } from '../store/reducers/singleCategoryReducer'




export const getCategories = dispatch => {
    fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(json => dispatch(loadAllCategoriesAction(json)))
}

export const getSingleCategory = el => {
    return dispatch => {
        fetch(`https://dummyjson.com/products/category/${el}`)
        .then(res => res.json())
        .then(json => dispatch(loadSingleCategoryAction(json.products)))
    }

}

