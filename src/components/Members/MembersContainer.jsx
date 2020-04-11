import React from 'react';
import Members from './Members';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setMembersAC, setTotalMembersAC, setCurrentPageAC} from '../../redux/members-reducer';

let mapStateToProps = (state) => {
  return {
    members: state.membersPage.members,
    pageSize: state.membersPage.pageSize,
    totalUserCount: state.membersPage.totalUserCount,
    currentPage: state.membersPage.currentPage
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Members);
