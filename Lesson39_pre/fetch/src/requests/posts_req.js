export const getPosts = callback => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(json => callback(json.posts))
}