import React from 'react';
import styles from './UserBlock.module.css';

const UserBlock = (props) => {
  return (
    <div className={styles.user}>
      <div className={styles.userMainInfo}>
        <div className={styles.userAvatar}>
          <img src={props.src} />
        </div>
        <div className={styles.userDescription}>
          <span>Username</span> {props.username}
          <span>Real name</span> {props.name}
          <span>Date of birth</span> {props.birth}
        </div>
      </div>
    </div>
  );
};

export default UserBlock;
