import PostsContainer from './Components/PostsContainer';
import React, {useState, useEffect} from 'react';
import { posts_data } from './data/posts';
import AddCardsForm from './Components/AddPostsForm';
import {Context} from './context'

function App() {
  let [posts, setPosts] = useState(posts_data);

 
  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem('posts')))
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts]);


  const change_like = id => {
    const target_card = posts.find(el=>el.id === id);
    target_card.like = !target_card.like;
    setPosts([...posts])
  }
  const add_post = post => setPosts([...posts, post]);

  const delete_post = id => setPosts(posts.filter(el=> el.id !== id));

  const add_comment = (post_id, text) => {

    const comment = {
      id: Date.now(),
      text
    }

    const target_post = posts.find(el => el.id === post_id);
    target_post.comments.push(comment);
    setPosts([...posts]);
  }

  const delete_comment = (post_id, comment_id) => {
    const target_post = posts.find(el => el.id === post_id);
    target_post.comments = target_post.comments.filter(el=> el.id !== comment_id);
    setPosts([...posts]);
  
  }
  
  

  

  return (
    <div>
      <Context.Provider value={{add_post, posts, change_like, add_comment, delete_comment, delete_post}}>
      <AddCardsForm />
      <PostsContainer/>
      </Context.Provider>
    </div>
    
  );
}

export default App;
