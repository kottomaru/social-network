import React from 'react';
import loader from '../assets/images/loader.svg';
import styles from './Preloader.module.css';

let Preloader = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={loader} />
    </div>
  );
}

export default Preloader;
