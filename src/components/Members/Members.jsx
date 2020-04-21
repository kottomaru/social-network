import React from 'react';
import styles from './Members.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import {membersAPI} from '../../api/api';

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
                ? <button disabled={props.followingInProgress.some(id => id === member.id)} onClick={ () => {
                  props.toggleFollowingInProgress(true, member.id);
                  membersAPI.unfollow(member.id)
                    .then(response => {
                      if(response.resultCode == 0) {
                        props.unfollow(member.id);
                      }
                      props.toggleFollowingInProgress(false, member.id);
                  });
                 } }>Unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === member.id)} onClick={ () => {
                    props.toggleFollowingInProgress(true, member.id);
                    membersAPI.follow(member.id)
                      .then(response => {
                        if(response.resultCode == 0) {
                          props.follow(member.id);
                        }
                        props.toggleFollowingInProgress(false, member.id);
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
