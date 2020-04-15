import React from 'react';
import styles from './Profile.module.css';
import ProfileWallpaper from './ProfileWallpaper';
import UserBlock from './UserContent/UserBlock';
import PostsBlockContainer from './Posts/PostsBlockContainer';

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileWallpaper src='https://wallpaperaccess.com/full/21591.jpg' />
      <UserBlock profile={props.profile} />
      <PostsBlockContainer />
    </div>
  );
};

export default Profile;
