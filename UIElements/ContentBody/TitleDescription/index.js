import React from 'react';
import Body2 from '../../../components/Typography/Body2';

const TitleDescription = ({ title, description }) => {
  return (
    <div
      style={{
        marginTop: '0.5rem',
      }}
    >
      <Body2 highlight>{title}</Body2>
      <Body2>{description}</Body2>
    </div>
  );
};

export default TitleDescription;
