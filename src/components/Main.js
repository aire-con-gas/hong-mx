import React, { Component } from 'react';
import styles from './Main.less';

class Main extends Component {
  render() {
    return (
      <main className={ styles.mainContainer }>
        <div className={ styles.mainContent }>
          { this.props.children }
        </div>
      </main>
    );
  }
}

export default Main;
