import React from 'react';
import Body2 from '../../../components/Typography/Body2';
import myInfo from '../../../info/my-info';
import Name from '../../../components/Typography/Name';

const Intro = () => {
  return (
    <>
      {/*Current Role */}
      <Body2>{myInfo.main.title[myInfo.language]}</Body2>
      {/* Name */}
      <Name>Veerbal Singh</Name>
    </>
  );
};

export default Intro;
