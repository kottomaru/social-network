import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src='https://png.pngtree.com/png-vector/20190507/ourmid/pngtree-orange-samurai-esports-logo-for-gaming-mascot-or-twitch-png-image_1026587.jpg' />
      <div className={styles.loginContainer}>
        { props.isAuth
          ? <div className={styles.login}>{props.login}</div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
