import React from 'react';
import styles from './Friend.module.css';

const Friend = (props) => {
  return (
    <div className={styles.item}>
      <img src={props.img} />
      <div>
        {props.name}
      </div>
    </div>
  );
}

export default Friend;
