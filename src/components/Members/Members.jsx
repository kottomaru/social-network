import React from 'react';
import styles from './Members.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
                ? <button onClick={ () => {
                  axios
                    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${member.id}`,
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "221c1805-6931-4c1e-840a-129a3f65d9c0"
                      }
                    })
                    .then(res => {
                      if(res.data.resultCode == 0) {
                        props.unfollow(member.id);
                      }
                  });
                 } }>Unfollow</button>
                : <button onClick={ () => {
                  axios
                    .post(`https://social-network.samuraijs.com/api/1.0/follow/${member.id}`, {},
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "221c1805-6931-4c1e-840a-129a3f65d9c0"
                      }
                    })
                    .then(res => {
                      if(res.data.resultCode == 0) {
                        props.follow(member.id);
                      }
                  });
                 } }>Follow</button>}
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
