import React from 'react';
import styles from './Profile.module.css';
import ProfileWallpaper from './ProfileWallpaper';
import UserBlock from './UserContent/UserBlock';
import PostsBlockContainer from './Posts/PostsBlockContainer';

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileWallpaper src='https://wallpaperaccess.com/full/21591.jpg' />
      <UserBlock
        src='https://profilepicture7.com/img/img_dongman/2/1075497004.jpg'
        username='LaoY'
        name='Lao Yong'
        birth='10.10.2000'
      />
      <PostsBlockContainer store={props.store} />
    </div>
  );
};

export default Profile;
