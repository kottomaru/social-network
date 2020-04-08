export const ADD_POST = 'ADD_POST';
export const UPDATE_POST_TITLE = 'UPDATE_POST_TITLE';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 3,
        src: 'https://profilepicture7.com/img/img_dongman/2/1075497004.jpg',
        title: state.newPostTitle,
        likes: 0
      };

      state.postsData.push(post);
      state.newPostTitle = '';
      return state;
    case UPDATE_POST_TITLE:
      state.newPostTitle = action.text;
      return state;
    default:
      return state;
  }
}

export const addPostAction = () => ({ type: ADD_POST });
export const updatePostTitleAction = (text) => ({
  type: UPDATE_POST_TITLE,
  text: text
});

export default profileReducer;
