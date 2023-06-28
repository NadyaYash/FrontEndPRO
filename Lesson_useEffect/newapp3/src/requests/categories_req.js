export const getCategories = callback => {
    fetch('https://api.escuelajs.co/api/v1/categories')
    .then(res => res.json())
    .then(json => callback(json))
}

