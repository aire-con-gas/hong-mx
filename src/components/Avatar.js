import React from 'react';

const Avatar = (props) => {
  const {
    name,
    title,
  } = props;

  return (
    <div>
      <div>image here</div>
      <div>
        { name }
        { title }
      </div>
    </div>
  );

};

export default Avatar;
