import React from 'react';
import styles from './PostsBlock.module.css';
import Post from './Post/Post';

const PostsBlock = (props) => {
  let postsElements = props.state.postsData
    .map((post) => <Post src={post.src} title={post.title} likes={post.likes} />);

  let createNewPost = React.createRef();

  let addNewPost = () => {
    let post = createNewPost.current.value;
    props.addPost(post);
  }

  return (
    <div className={styles.userPosts}>
      <div className={styles.postWrapper}>
        <div className={styles.profilePostTitle}>
          <span>My posts</span>
        </div>
        <div className={styles.postCreate}>
          <textarea ref={createNewPost} className={styles.postInput}></textarea>
          <button className={styles.button} onClick={ addNewPost }>CREATE POST</button>
        </div>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default PostsBlock;
