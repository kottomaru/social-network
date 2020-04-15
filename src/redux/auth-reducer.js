const SET_MEMBER_DATA = 'SET_MEMBER_DATA';

let initialState = ({
  memberId: null,
  login: null,
  email: null,
  isAuth: false
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEMBER_DATA:
        return {
          ...state,
          ...action.data,
          isAuth: true
        }
      break;
    default:
      return state;
  }
}

export const setAuthMemberData = (memberId, login, email) =>
  ({type: SET_MEMBER_DATA, data: {memberId, login, email}});

export default authReducer;
