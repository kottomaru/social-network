import React from 'react';
import styles from './ProfileWallpaper.module.css';

const ProfileWallpaper = (props) => {
  return (
    <div className={styles.wallpaper}>
      <img src={props.src} />
    </div>
  );
};

export default ProfileWallpaper;
