import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Avatar from './components/Avatar';
import Nav from './components/Nav';
import Main from './components/Main';
import Profile from './components/Profile';

import styles from './index.less';

if (module.hot) {
  module.hot.accept();
}

const user = {
  name: 'Dave Hong',
  title: 'Something About Me',
};

const App = () => (
  <Fragment>
    <Nav />
    <Main>
      <Profile>
        <Avatar
          name={ user.name }
          title={ user.title }
        />
        <h1>Dave Hong</h1>
        <div>
          About Me
        </div>
      </Profile>
    </Main>
  </Fragment>
);

render(
  React.createElement(App),
  document.getElementById('main')
);
