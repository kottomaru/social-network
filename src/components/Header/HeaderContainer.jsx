import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setAuthMemberData} from '../../redux/auth-reducer';
import {authAPI} from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.auth()
      .then(response => {
        if(response.resultCode === 0) {
          let {id, login, email} = response.data;
          this.props.setAuthMemberData(id, login, email);
        }
    });
  }

  render() {
    return (
      <Header {...this.props} />
    );
  }
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {setAuthMemberData})(HeaderContainer);
