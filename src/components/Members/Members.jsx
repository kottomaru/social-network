import React from 'react';
import styles from './Members.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.jpg';

class Members extends React.Component {

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
      this.props.setMembers(res.data.items)
      if (res.data.totalCount > 25) {
        this.props.setTotalMembers(25);
      } else {
        this.props.setTotalMembers(res.data.totalCount);
      }
    });
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(res => {
      this.props.setMembers(res.data.items);
    });
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        {
          this.props.members.map((member) => <div key={member.id} className={styles.container}>
              <div className={styles.containerPhoto}>
                <img src={member.avatarUrl || userPhoto} className={styles.avatar} />
                { member.follow
                  ? <button onClick={ () => { this.props.unfollow(member.id) } }>Unfollow</button>
                  : <button onClick={ () => { this.props.follow(member.id) } }>Follow</button>}
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
              onClick={() => {this.onPageChange(page)}}
              className={this.props.currentPage === page && styles.selected}>{page}</span>
          })
        }
        </div>
      </div>
    );
  }
};

export default Members;
