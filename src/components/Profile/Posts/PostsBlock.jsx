import React from 'react';
import styles from './PostsBlock.module.css';
import Button from '../../Button';
import Post from './Post/Post';

const PostsBlock = (props) => {
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
        <Post
          src='https://profilepicture7.com/img/img_dongman/2/1075497004.jpg'
          title='About my weekend'
        />
        <Post
          src='https://profilepicture7.com/img/img_dongman/2/1075497004.jpg'
          title='Some picture with my crush'
        />
      </div>
    </div>
  );
};

export default PostsBlock;
