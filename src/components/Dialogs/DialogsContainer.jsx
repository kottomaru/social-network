import React from 'react';
import Dialogs from './Dialogs';
import { addMessageAction, updateMessageTextAction } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsData: state.messages.dialogsData,
    messagesData: state.messages.messagesData,
    newMessageText: state.messages.newMessageText,
    state: state
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageAction());
    },
    changeMessageText: (text) => {
      dispatch(updateMessageTextAction(text))
    }
  }
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
