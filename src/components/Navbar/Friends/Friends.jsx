import React from 'react';
import styles from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

  let friendsElements = props.state.friends
    .map((friend) => <Friend img={friend.img} name={friend.name} />)

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Friends
      </div>
      {friendsElements}
    </div>
  );
}

export default Friends;
