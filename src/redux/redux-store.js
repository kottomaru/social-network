import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import membersReducer from './members-reducer';

let reducers = combineReducers({
  profile: profileReducer,
  messages: dialogsReducer,
  sidebar: sidebarReducer,
  membersPage: membersReducer
});

let store = createStore(reducers);

export default store;
