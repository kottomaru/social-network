import React from 'react';
import Members from './Members';
import Preloader from '../Preloader';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {
  follow,
  unfollow,
  setMembers,
  setTotalMembers,
  setCurrentPage,
  toggleIsFetching,
  toggleFollowingInProgress
} from '../../redux/members-reducer';
import {membersAPI} from '../../api/api';

class MembersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    membersAPI.getMembers(this.props.currentPage, this.props.pageSize).then(response => {
      this.props.setMembers(response.items)
      this.props.toggleIsFetching(false);
      if (response.totalCount > 50) {
        this.props.setTotalMembers(50);
      } else {
        this.props.setTotalMembers(response.data.totalCount);
      }
    });
  }

  onPageChange = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);
    membersAPI.getMembers(page, this.props.pageSize).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setMembers(response.items);
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
                 toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                 followingInProgress={this.props.followingInProgress}
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
    isFetching: state.membersPage.isFetching,
    followingInProgress: state.membersPage.followingInProgress
  }
}

export default connect(mapStateToProps,
  { follow, unfollow, setMembers,
    setCurrentPage, setTotalMembers, toggleIsFetching,
    toggleFollowingInProgress})
  (MembersContainer);
