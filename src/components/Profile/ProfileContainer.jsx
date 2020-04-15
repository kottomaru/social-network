import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setMemberProfile} from '../../redux/profile-reducer';
import * as axios from 'axios';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let memberId = this.props.match.params.memberId;
    if(!memberId) memberId = 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${memberId}`)
      .then(res => {
      this.props.setMemberProfile(res.data);
    });
  }

  render () {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
};

let mapStateToProps = (state) => ({
  profile: state.profile.memberProfile
});

let WithRouterContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setMemberProfile })(WithRouterContainerComponent);
