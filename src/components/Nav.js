import React from 'react';
import styles from './Nav.less';

const Nav = () => {
  return (
    <nav className={ styles.topNavigation }>
      <ul className={ styles.leftNav }>
        <li><a href='http://hong.mx'>Home</a></li>
      </ul>
      <ul className={ styles.rightNav }>
        <li><a href='#' className={ styles.navButton}>Resume</a></li>
        <li>
          <a href='https://github.com/aire-con-gas' className={ styles.navButton }>
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
