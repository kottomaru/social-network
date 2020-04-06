import React from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


function App(props) {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className='content'>
          <Route
            path='/profile'
            render={() =>
              <Profile
                newPostTitle={props.state.profile.newPostTitle}
                state={props.state.profile}
                addPost={props.addPost}
                updatePostTitle={props.updatePostTitle} />} />
          <Route
            path='/dialogs'
            render={() => <Dialogs state={props.state.messages} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
}

export default App;
