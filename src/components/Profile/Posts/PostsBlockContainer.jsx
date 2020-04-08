import React from 'react';
import PostsBlock from './PostsBlock';
import { addPostAction, updatePostTitleAction } from '../../../redux/profile-reducer';

const PostsBlockContainer = (props) => {
  let state = props.store.getState();

  let addNewPost = () => {
    props.store.dispatch(addPostAction());
  }

  let textTitleChange = (text) => {
    props.store.dispatch(updatePostTitleAction(text));
  }

  return <PostsBlock postsData={state.profile.postsData} newPostTitle={state.profile.newPostTitle} state={state} addNewPost={addNewPost} textTitleChange={textTitleChange} />;
};

export default PostsBlockContainer;
