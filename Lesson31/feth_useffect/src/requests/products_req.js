export const get_products = callback => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => callback(json.products))
}