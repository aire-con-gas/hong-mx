import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import styles from './index.less';

if (module.hot) {
  module.hot.accept();
}

const App = () => (
  <Fragment>
    <Nav />
    <Header />
  </Fragment>
);

render(
  React.createElement(App),
  document.getElementById('main')
);
