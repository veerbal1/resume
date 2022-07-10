import React from 'react';
import Body2 from '../../../components/Typography/Body2';
import myInfo from '../../../info/my-info';
import TitleDescription from '../TitleDescription';

const Employment = () => {
  return (
    <div>
      <Body2>{myInfo.employment.heading[myInfo.language]}</Body2>
      {myInfo.employment.info.map((item, index) => {
        return (
          <div key={item.id} style={{
            marginTop: index !== 0 ? '1.2em' : '0em',
          }}>
            <TitleDescription title={item.title} description={item.description[myInfo.language]} />
          </div>
        );
      })}
    </div>
  );
};

export default Employment;
