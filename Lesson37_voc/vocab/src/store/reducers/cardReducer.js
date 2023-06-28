import {words} from '../../data/words'

export const addCardAction = payload=>({type:'ADD_CARD', payload})
export const changeLangAction = (payload) => ({type: 'CHANGE_LANG', payload})
export const deleteCardAction = (payload) => ({type: 'DELETE_CARD', payload})
export const deleteAllAction = ()=> ({type:'DELETE_ALL'})
export const changeToRus = () => ({type: 'CHANGE_RUS'})
export const changeToEng = () => ({type: 'CHANGE_ENG'})





export const cardReducer = (state= words, action) => {
    if(action.type=== 'ADD_CARD'){
        return [...state, action.payload]
    }
    else if(action.type === 'CHANGE_LANG'){
        const target_card = state.find(el=> el.id === action.payload);
        target_card.lang = target_card.lang=== 'eng'? 'rus' : 'eng';
        return [...state]
          }
        else if (action.type === 'DELETE_CARD'){
            return state.filter(el=> el.id !== action.payload)
            
          }
          else if(action.type === 'DELETE_ALL'){
            return []
          }
          else if(action.type === 'CHANGE_RUS'){
            return state.map(el => {
              el.lang = 'rus';
              return el
            })
            
          }
          else if(action.type === 'CHANGE_ENG'){
            return state.map(el => {
              el.lang = 'eng';
              return el
            })
            
          }
    else {return state}
    
}