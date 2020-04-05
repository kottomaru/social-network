import React from 'react';
import styles from './PostsBlock.module.css';
import Button from '../../Button';
import Post from './Post/Post';

const PostsBlock = (props) => {
  let postsElements = props.state.postsData
    .map((post) => <Post src={post.src} title={post.title} likes={post.likes} />);

  return (
    <div className={styles.userPosts}>
      <div className={styles.postWrapper}>
        <div className={styles.profilePostTitle}>
          <span>My posts</span>
        </div>
        <div className={styles.postCreate}>
          <form>
            <input className={styles.postInput} placeholder="your news" type="text" id="fname" name="fname" />
          </form>
          <Button title='send' />
        </div>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default PostsBlock;
