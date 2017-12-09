import React from 'react';
import styles from './Info.less';

const Info = (props) => {
  const {
    blurb,
    education,
    work,
  } = props;
  return (
    <div className={ styles.infoContent }>
      <section className={ styles.blurb }>{ blurb }</section>
      <section className={ styles.about }>
        <div className={ styles.education }>
          <h3>Education</h3>
          <ul>
            { education.map((item) => (<li>{ item }</li>)) }
          </ul>
        </div>
        <div className={ styles.work }>
          <h3>Recent Work</h3>
          <ul>
            { work.map((item) => (<li>{ item }</li>)) }
          </ul>
       </div>
      </section>
      <section className={ styles.contact }>
        <span className={ styles.email }>email: dave AT hong DOT mx</span>
      </section>
    </div>
  );
};

export default Info;
