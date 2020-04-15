import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={`${styles.item} ${styles.active}`}>
          <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/dialogs' activeClassName={styles.active}>Messages</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/news' activeClassName={styles.active}>News</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/music' activeClassName={styles.active}>Music</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/members' activeClassName={styles.active}>Members</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
