import {createStore, combineReducers} from 'redux'
import { userReducer } from './reducers/userReducer';
import { productReducer } from './reducers/productReducer'

const rootReducer = combineReducers({
users: userReducer,
products: productReducer
});

export const store = createStore(rootReducer);