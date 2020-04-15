import React from 'react';
import styles from './UserBlock.module.css';
import Preloader from '../../Preloader';

const UserBlock = (props) => {

  if(!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.user}>
      <div className={styles.userMainInfo}>
        <div className={styles.userAvatar}>
          <img src={props.profile.photos.large} />
        </div>
        <div className={styles.userDescription}>
          <span>Username</span> {props.profile.aboutMe}
          <span>Real name</span> {props.profile.fullName}
          <span>Info</span> {props.profile.lookingForAJobDescription}
        </div>
      </div>
    </div>
  );
};

export default UserBlock;
