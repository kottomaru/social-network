export const ADD_POST = 'ADD_POST';
export const UPDATE_POST_TITLE = 'UPDATE_POST_TITLE';

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    let post = {
      id: 3,
      src: 'https://profilepicture7.com/img/img_dongman/2/1075497004.jpg',
      title: state.newPostTitle,
      likes: 0
    };

    state.postsData.push(post);
    state.newPostTitle = '';
  } else if (action.type === UPDATE_POST_TITLE) {
    state.newPostTitle = action.text;
  }

  return state;
}

export default profileReducer;
