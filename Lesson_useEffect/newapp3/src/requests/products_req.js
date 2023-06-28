export const get_products = (id,callback) =>{
    fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
    .then(res => res.json())
    .then(json => callback(json) )
}