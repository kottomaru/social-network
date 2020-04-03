import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.userAvatar}>
        <img src={props.src} />
      </div>
      <div className={styles.itemTitle}>
        {props.title}
      </div>
    </div>
  );
};

export default Post;
