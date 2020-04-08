import React from 'react';
import PostsBlock from './PostsBlock';
import { addPostAction, updatePostTitleAction } from '../../../redux/profile-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    postsData: state.profile.postsData,
    newPostTitle: state.profile.newPostTitle,
    state: state
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(addPostAction());
    },
    textTitleChange: (text) => {
      dispatch(updatePostTitleAction(text));
    }
  }
};

let PostsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(PostsBlock)

export default PostsBlockContainer;
