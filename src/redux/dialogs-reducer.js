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
      return {
        ...state,
        newMessageText: '',
        messagesData: [...state.messagesData, message]
      }
    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text
      }
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
