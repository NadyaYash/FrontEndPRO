
export const getProduct = (productId,callback) => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(json => callback(json))
}