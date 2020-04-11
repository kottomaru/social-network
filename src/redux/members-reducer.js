export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_MEMBERS = 'SET_MEMBERS';

let initialState = {
  members: [
    { id: 1, avatarUrl: 'https://vignette.wikia.nocookie.net/villains/images/a/a4/Akihiko_Kayaba.png/revision/latest?cb=20130806233643',
      follow: true, name: 'Kayaba Akihiko', location: {country: 'Japan', city: 'Tokyo'}},
    { id: 2, avatarUrl: 'https://vignette.wikia.nocookie.net/naruto/images/0/0c/Madara_img2.png/revision/latest/scale-to-width-down/340?cb=20160115141947',
      follow: false, name: 'Madara Uchiha', location: {country: 'Japan', city: 'Osaka'}},
    { id: 3, avatarUrl: 'https://images.shoutwiki.com/jojodiamondrecords/3/3e/Profile_Giorno.png',
      follow: true, name: 'Jorno Jovanna', location: {country: 'Japan', city: 'Saitama'}},
  ]
};

const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        members: state.members.map((member) => {
          if (member.id === action.memberId) {
            return { ...member, follow: true };
          }
          return member;
        })
      }
    case UNFOLLOW:
    return {
      ...state,
      members: state.members.map((member) => {
        if (member.id === action.memberId) {
          return { ...member, follow: false };
        }
        return member;
      })
    }
    case SET_MEMBERS:
      return {...state, members: [ ...state.members, action.members ]};
    default:
      return state;
  }
}

export const followAC = (memberId) => ({ type: FOLLOW, memberId });
export const unfollowAC = (memberId) => ({ type: UNFOLLOW, memberId });
export const setMembersAC = (members) => ({ type: SET_MEMBERS, members });

export default membersReducer;
