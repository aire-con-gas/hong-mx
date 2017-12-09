import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Avatar from './components/Avatar';
import Info from './components/Info';
import Main from './components/Main';
import Nav from './components/Nav';
import Profile from './components/Profile';
import styles from './index.less';

if (module.hot) {
  module.hot.accept();
}

const user = {
  name: 'Dave Hong',
  title: 'Front-end and full-stack web developer',
  blurb: 'I live in the Bay Area and like making the web work.',
  education: [
    'UC Berkeley (Masters in Information Management)',
    'UCLA (BA Sociology)',
  ],
  work: [
    'Adobe Systems',
    'FinancialForce',
  ],
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
        <Info
          blurb={ user.blurb }
          education={ user.education }
          work={ user.work }
        />
      </Profile>
    </Main>
  </Fragment>
);

render(
  React.createElement(App),
  document.getElementById('main')
);
