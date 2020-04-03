import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <div className={styles.btnWrapper}>
      <div className={styles.postBtn}>{props.title}</div>
    </div>
  );
};

export default Button;
