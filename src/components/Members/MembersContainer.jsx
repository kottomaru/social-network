import React from 'react';
import Members from './Members';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setMembersAC} from '../../redux/members-reducer';

let mapStateToProps = (state) => {
  return {
    members: state.membersPage.members
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Members);
