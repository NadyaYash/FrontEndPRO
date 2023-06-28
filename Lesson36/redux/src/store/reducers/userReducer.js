export const add_user_action = payload => ({type: 'ADD_USER', payload})

export const delete_user_action = payload => ({type: 'DELETE_USER', payload});

export const delete_all_users_action = () => ({ type: 'DELETE_ALL_USERS' });


export const userReducer = (state=[], action) => {
    if(action.type==='ADD_USER'){
        return [...state, action.payload]
    } else if(action.type==='DELETE_USER'){
        return state.filter(el=> el.id !== action.payload)
    } else if (action.type === 'DELETE_ALL_USERS') {
        return []
      }
    else {return state}
    
}