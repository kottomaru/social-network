export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let message = { id: 4, text: state.newMessageText };
      state.messagesData.push(message);
      state.newMessageText = '';
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
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
