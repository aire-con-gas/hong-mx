import React from 'react';
import styles from './Avatar.less';

const Avatar = (props) => {
  const {
    name,
    title,
  } = props;

  return (
    <div className={ styles.avatarContent }>
      <div className={ styles.avatarImage }></div>
      <div className={ styles.avatarName }>
        <section>
          <h1>{ name }</h1>
        </section>
        <section>
          <h2>{ title }</h2>
        </section>
      </div>
    </div>
  );

};

export default Avatar;
