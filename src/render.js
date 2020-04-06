import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';
import { addPost, updatePostTitle } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App updatePostTitle={updatePostTitle} state={state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
