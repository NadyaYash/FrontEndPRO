import {createStore, combineReducers} from 'redux'
import { cardReducer } from './reducers/cardReducer';


const rootReducer = combineReducers({
    cards: cardReducer

});

export const store = createStore(rootReducer);