export const getProducts = (category,callback)=>{
    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=>callback(json))
}