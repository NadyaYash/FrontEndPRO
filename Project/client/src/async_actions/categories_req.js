import { loadAllCategoriesAction } from '../store/reducers/categoryReducer'
import { loadSingleCategoryAction } from '../store/reducers/singleCategoryReducer'


export const getCategories = dispatch => {
    fetch('http://localhost:3333/categories/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllCategoriesAction(json)))
}

export const getSingleCategory = id => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${id}`)
        .then(res => res.json())
        .then(json => dispatch(loadSingleCategoryAction(json)))
    }

}






