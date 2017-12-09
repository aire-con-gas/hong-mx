import React from 'react';
import styles from './Nav.less';

const Nav = () => {
  return (
    <nav className={ styles.topNavigation }>
      <ul className={ styles.leftNav }>
      </ul>
      <ul className={ styles.rightNav }>
        <li>
          <a href='/dkhong.resume.pdf' className={ styles.navButton}>
            <i class="fa fa-file" aria-hidden="true"></i>
            Resume
          </a>
        </li>
        <li>
          <a href='https://github.com/aire-con-gas' className={ styles.navButton }>
            <i class="fa fa-github" aria-hidden="true"></i>
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
