import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

import DialogItem from './DialogItem/DialogItem';
import Message from './DialogItem/Message';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData
    .map((dialog) => <DialogItem id={dialog.id} name={dialog.name} />);

  let messagesElements = props.messagesData
    .map((message) => <Message text={message.text} />);

  let newMessage = React.createRef();

  let addMessage = () => {
    let mes = newMessage.current.value;
    props.addMessage();
  }

  let changeMessageText = () => {
    let text = newMessage.current.value;
    props.changeMessageText(text);
  }

  return (
    <div className={styles.dialogWrapper}>
      <div className={styles.dialogs}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        <div className={styles.messageContainer}>
          {messagesElements}
        </div>
        <div className={styles.messageInput}>
          <textarea onChange={ changeMessageText } value={props.newMessageText} ref={newMessage}></textarea>
          <button onClick={ addMessage }>SEND</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
