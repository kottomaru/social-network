export const ADD_POST = 'ADD_POST';
export const UPDATE_POST_TITLE = 'UPDATE_POST_TITLE';
export const SET_MEMBER_PROFILE = 'SET_MEMBER_PROFILE';

let initialState = {
  postsData: [
    {
      id: 1,
      src: 'https://profilepicture7.com/img/img_dongman/2/1075497004.jpg',
      title: 'About my weekend',
      likes: 17
    },
    {
      id: 2,
      src: 'https://profilepicture7.com/img/img_dongman/2/1075497004.jpg',
      title: 'Some picture with my crush',
      likes: '31'
    }
  ],
  newPostTitle: '',
  memberProfile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 3,
        src: 'https://profilepicture7.com/img/img_dongman/2/1075497004.jpg',
        title: state.newPostTitle,
        likes: 0
      };
      return {
        ...state,
        newPostTitle: '',
        postsData: [...state.postsData, post]
      }
    case UPDATE_POST_TITLE:
      return {
        ...state,
        newPostTitle: action.text
      }
    case SET_MEMBER_PROFILE:
      return {
        ...state,
        memberProfile: action.profile
      }
    default:
      return state;
  }
}

export const addPostAction = () => ({ type: ADD_POST });
export const updatePostTitleAction = (text) => ({
  type: UPDATE_POST_TITLE,
  text: text
});
export const setMemberProfile = (profile) => ({ type: SET_MEMBER_PROFILE, profile });

export default profileReducer;
