const LOAD_CATEGORY = '[ITEM_BY_CATEGORY_CONTAINER] LOAD_CATEGORY';
const FILTER_PRODUCTS_BY_PRICE = '[SORT_FORM] FILTER_PRODUCTS_BY_PRICE';
const SORT_PRODUCTS = '[SORT_FORM] SORT_PRODUCTS';
const FILTER_PRODUCTS_BY_DISCOUNT = '[SORT_FORM] FILTER_PRODUCTS_BY_DISCOUNT'

export const loadSingleCategoryAction = payload => ({ type: LOAD_CATEGORY, payload });
export const filterProductByPriceCategoryAction = payload => ({ type: FILTER_PRODUCTS_BY_PRICE, payload });
export const sortProductsCategoryAction = payload => ({ type: SORT_PRODUCTS, payload });
export const filterProductsCategoryByCheckbox = payload => ({ type: FILTER_PRODUCTS_BY_DISCOUNT, payload });



export const singleCategoryReducer = (state = {}, action) => {
    if (action.type === LOAD_CATEGORY) {
        return action.payload
    }
    else if (action.type === FILTER_PRODUCTS_BY_PRICE) {
        const { min_value, max_value } = action.payload;

        return state.map(el => {
            const new_price = el.discont_price ? el.discont_price : el.price;
            if (new_price >= min_value && el.price <= max_value) {
                el.hide_price = false
            } else {
                el.hide_price = true
            }
            return el
        })
    }
    // else if (action.type === SORT_PRODUCTS) {
    //     if (action.payload === 'title') {
    //         state.sort((a, b) => a[action.payload].localeCompare(b[action.payload]));
    //     } else if (action.payload === 'price') {
    //         state.sort((a, b) => a[action.payload] - b[action.payload]);
    //     } else if (action.payload === 'titleZ') {
    //         state.sort((a, b) => b['title'].localeCompare(a['title']));
    //     } else if (action.payload === 'priceLess') {
    //         state.sort((a, b) => {
    //             const newPriceA = a['discount_price'] || a['price'];
    //             const newPriceB = b['discount_price'] || b['price'];
    //             return newPriceB - newPriceA;
    //         });
    //     }
    //     // else if (action.payload === 'default') {
    //     //     return state.slice()

    //     // }

    //     return [...state];
    // }

    else { return state }

}


