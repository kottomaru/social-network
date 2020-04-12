export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_MEMBERS = 'SET_MEMBERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_MEMBERS = 'SET_TOTAL_MEMBERS';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  members: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false
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
      return {...state, members: action.members };
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.page};
    case SET_TOTAL_MEMBERS:
      return {...state, totalUserCount: action.total};
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    default:
      return state;
  }
}

export const follow = (memberId) => ({ type: FOLLOW, memberId });
export const unfollow = (memberId) => ({ type: UNFOLLOW, memberId });
export const setMembers = (members) => ({ type: SET_MEMBERS, members });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalMembers = (total) => ({ type: SET_TOTAL_MEMBERS, total });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default membersReducer;
