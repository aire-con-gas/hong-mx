import React from 'react';
import styles from './Profile.less';

const Profile = (props) => {
  return (
    <div className={ styles.profileContent }>
      <div className={ styles.profile }>
        { props.children }
      </div>
    </div>
  );
};

export default Profile;
