import React from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MembersContainer from './components/Members/MembersContainer';

function App(props) {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='content'>
          <Route
            path='/profile'
            render={() => <Profile />} />
          <Route
            path='/dialogs'
            render={() => <DialogsContainer />} />
          <Route
            path='/members'
            render={() => <MembersContainer />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
}

export default App;
