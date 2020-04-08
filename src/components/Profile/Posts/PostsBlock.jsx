import React from 'react';
import styles from './PostsBlock.module.css';
import Post from './Post/Post';

import { addPostAction, updatePostTitleAction } from '../../../redux/profile-reducer';

const PostsBlock = (props) => {
  let postsElements = props.postsData
    .map((post) => <Post src={post.src} title={post.title} likes={post.likes} />);

  let createNewPost = React.createRef();

  let onAddNewPost = () => {
    let post = createNewPost.current.value;
    props.addNewPost();
  }

  let onTextTitleChange = () => {
    let text = createNewPost.current.value;
    props.textTitleChange(text);
  }

  return (
    <div className={styles.userPosts}>
      <div className={styles.postWrapper}>
        <div className={styles.profilePostTitle}>
          <span>My posts</span>
        </div>
        <div className={styles.postCreate}>
          <textarea value={props.newPostTitle} onChange={ onTextTitleChange } ref={createNewPost} className={styles.postInput}></textarea>
          <button className={styles.button} onClick={ onAddNewPost }>CREATE POST</button>
        </div>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default PostsBlock;
