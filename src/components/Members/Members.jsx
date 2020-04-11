import React from 'react';
import styles from './Members.module.css';
import * as axios from 'axios';

let Members = (props) => {

  let getMembersFromAPI = () => {
    if (props.members.length === 3) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(res => {
        props.setMembers(res.data.items);
      });
    }
  }

  return (
    <div>
      {
        props.members.map((member) => <div key={member.id} className={styles.container}>
            <div className={styles.containerPhoto}>
              <img src={member.avatarUrl} className={styles.avatar} />
              { member.follow
                ? <button onClick={ () => { props.unfollow(member.id) } }>Unfollow</button>
                : <button onClick={ () => { props.follow(member.id) } }>Follow</button>}
            </div>
            <div className={styles.memberInfo}>
              <div className={styles.memberName}>
                {member.name}
              </div>
              <div>
                <div>{"member.location.city"}</div>
                <div>{"member.location.country"}</div>
              </div>
            </div>
        </div>)
      }
      { props.members.length < 4
        ? <button onClick={getMembersFromAPI}>Show More</button>
        : <div>all members displaying</div>}
    </div>
  );
};

export default Members;