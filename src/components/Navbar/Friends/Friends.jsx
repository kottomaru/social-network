import React from 'react';
import styles from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

  // let friendsElements = props.state.friends { friendsElements }
  //   .map((friend) => <Friend img={friend.img} name={friend.name} />)

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Friends
      </div>
      <div className={styles.elements}>
      </div>
    </div>
  );
}

export default Friends;
