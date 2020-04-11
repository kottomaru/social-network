import React from 'react';
import styles from './Members.module.css';

let Members = (props) => {
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
                <div>{member.location.city}</div>
                <div>{member.location.country}</div>
              </div>
            </div>
        </div>)
      }
    </div>
  );
};

export default Members;
