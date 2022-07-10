import React from 'react';
import Body2 from '../../../components/Typography/Body2';
import myInfo from '../../../info/my-info';
import TitleDescription from '../TitleDescription';

const Education = () => {
  return (
    <div>
      <Body2>{myInfo.education.heading[myInfo.language]}</Body2>
      {myInfo.education.info.map((item, index) => {
        return (
          <div key={item.id} style={{
            marginTop: index !== 0 ? '1.2em' : '0em',
          }}>
            <TitleDescription title={item.school} description={item.type} />
          </div>
        );
      })}
    </div>
  );
};

export default Education;
