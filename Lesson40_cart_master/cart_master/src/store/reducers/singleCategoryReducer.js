const LOAD_CATEGORY = '[ITEM_BY_CATEGORY_CONTAINER] LOAD_CATEGORY';

export const loadSingleCategoryAction = payload => ({ type: LOAD_CATEGORY, payload });


export const singleCategoryReducer = (state = [], action) => {
    if (action.type === LOAD_CATEGORY) {
        return action.payload
    }


    else { return state }

}