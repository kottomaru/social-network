export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    let message = { id: 4, text: state.newMessageText };
    state.messagesData.push(message);
    state.newMessageText = '';

  } else if (action.type === UPDATE_MESSAGE_TEXT) {
    state.newMessageText = action.text;
  }

  return state;
}

export default dialogsReducer;
