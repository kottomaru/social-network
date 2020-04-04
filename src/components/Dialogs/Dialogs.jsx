import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

import DialogItem from './DialogItem/DialogItem';
import Message from './DialogItem/Message';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogWrapper}>
      <div className={styles.dialogs}>
        <DialogItem id='1' name='Kyong' />
        <DialogItem id='2' name='Daeun' />
        <DialogItem id='3' name='Eunji' />
        <DialogItem id='4' name='Jiyoung' />
        <DialogItem id='5' name='Sunyoung' />
      </div>
      <div className={styles.messages}>
        <Message text='Hello' />
        <Message text='How are you?' />
        <Message text='What is your favorite pet?' />
      </div>
    </div>
  );
}

export default Dialogs;
