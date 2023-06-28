export const getCategories = (callback) => {
    fetch('https://api.escuelajs.co/api/v1/categories')
    .then(res => res.json())
    .then(json => callback(json))}

    export const getProductsByCategory = (id, callback) => {
        fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
        .then(res => res.json())
        .then(json => callback(json))
      }
export const getDescription = (id, callback) => {
  fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  .then(res=>res.json())
  .then(json=> callback(json.category))
}