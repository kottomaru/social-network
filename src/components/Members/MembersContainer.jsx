import React from 'react';
import Members from './Members';
import Preloader from '../Preloader';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {
  followAC,
  unfollowAC,
  setMembersAC,
  setTotalMembersAC,
  setCurrentPageAC,
  toggleIsFetchingAC
} from '../../redux/members-reducer';

class MembersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
      this.props.setMembers(res.data.items)
      this.props.toggleIsFetching(false);
      if (res.data.totalCount > 25) {
        this.props.setTotalMembers(25);
      } else {
        this.props.setTotalMembers(res.data.totalCount);
      }
    });
  }

  onPageChange = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(res => {
      this.props.toggleIsFetching(false);
      this.props.setMembers(res.data.items);
    });
  }

  render() {
    return (
      <>
      { this.props.isFetching
        ? <Preloader/>
        : null}
        <Members totalUserCount={this.props.totalUserCount}
                 pageSize={this.props.pageSize}
                 unfollow={this.props.unfollow}
                 follow={this.props.follow}
                 onPageChange={this.onPageChange}
                 currentPage={this.props.currentPage}
                 members={this.props.members}
        />
      </>
    );
  }
};

let mapStateToProps = (state) => {
  return {
    members: state.membersPage.members,
    pageSize: state.membersPage.pageSize,
    totalUserCount: state.membersPage.totalUserCount,
    currentPage: state.membersPage.currentPage,
    isFetching: state.membersPage.isFetching
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (memberId) => {
      dispatch(followAC(memberId));
    },
    unfollow: (memberId) => {
      dispatch(unfollowAC(memberId));
    },
    setMembers: (members) => {
      dispatch(setMembersAC(members));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalMembers: (total) => {
      dispatch(setTotalMembersAC(total));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersContainer);
