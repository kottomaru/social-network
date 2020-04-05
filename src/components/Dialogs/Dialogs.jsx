import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

import DialogItem from './DialogItem/DialogItem';
import Message from './DialogItem/Message';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData
    .map((dialog) => <DialogItem id={dialog.id} name={dialog.name} />);

  let messagesElements = props.state.messagesData
    .map((message) => <Message text={message.text} />);

  return (
    <div className={styles.dialogWrapper}>
      <div className={styles.dialogs}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;
