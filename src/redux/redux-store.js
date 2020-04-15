import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import membersReducer from './members-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
  profile: profileReducer,
  messages: dialogsReducer,
  sidebar: sidebarReducer,
  membersPage: membersReducer,
  auth: authReducer
});

let store = createStore(reducers);

export default store;
