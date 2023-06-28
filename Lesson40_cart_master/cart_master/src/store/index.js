import { createStore, combineReducers, applyMiddleware } from 'redux'
import { productReducer } from './reducers/productReducer';
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer';
import { singleProductReducer } from './reducers/singleProductReducer'
import { categoryReducer } from './reducers/categoryReducer';
import { singleCategoryReducer } from './reducers/singleCategoryReducer';


const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    singleProduct: singleProductReducer,
    categories: categoryReducer,
    singleCategory: singleCategoryReducer

});

export const store = createStore(rootReducer, applyMiddleware(thunk));