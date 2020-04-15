import React from 'react';
import styles from './Members.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';

let Members = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {
        props.members.map((member) => <div key={member.id} className={styles.container}>
            <div className={styles.containerPhoto}>
              <NavLink to={'/profile/' + member.id}>
                <img src={member.photos.large} className={styles.avatar} />
              </NavLink>
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
      <div className={styles.pagination}>
      {
        pages.map((page) => {
          return <span
            onClick={() => {props.onPageChange(page)}}
            className={props.currentPage === page && styles.selected}>{page}</span>
        })
      }
      </div>
    </div>
  );
}

export default Members;
