import './App.css';
import 'antd/dist/antd.css';

import { connect } from 'react-redux';

import {
  getPosts as getPostsAction,
  deletePost as deletePostAction,
} from './redux/modules/posts';

import Posts from './components/Post';

import CreatePost from './components/Post/CreatePost';

import { useEffect } from 'react';

function App({ posts, getPosts, deletePost }) {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <CreatePost />

      {posts.map((item) => (
        <Posts
          key={item.id}
          title={item.title}
          body={item.body}
          id={item.id}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getPosts: getPostsAction,
  deletePost: deletePostAction,
})(App);
