export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let initialState = {
  dialogsData: [
      { id: 1, name: 'Kyong' },
      { id: 2, name: 'Daeun' },
      { id: 3, name: 'Eunji' },
      { id: 4, name: 'Jiyoung' },
      { id: 5, name: 'Sunyoung' }
  ],
  messagesData: [
    { id: 1, text: 'Hello' },
    { id: 2, text: 'How are you?' },
    { id: 3, text: 'What is your favorite pet?' }
  ],
  newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let message = { id: 4, text: state.newMessageText };
      let stateAddCopy = {...state};
      stateAddCopy.messagesData.push(message);
      stateAddCopy.newMessageText = '';
      return stateAddCopy;
    case UPDATE_MESSAGE_TEXT:
      let stateUpdCopy = {...state};
      stateUpdCopy.newMessageText = action.text;
      return stateUpdCopy;
    default:
      return state;
  }
}

export const addMessageAction = () => ({ type: ADD_MESSAGE });
export const updateMessageTextAction = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  text: text
});

export default dialogsReducer;
