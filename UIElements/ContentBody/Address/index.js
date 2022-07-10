import React from 'react';
import Body2 from '../../../components/Typography/Body2';
import myInfo from '../../../info/my-info';

const Address = () => {
  return (
    <>
      <Body2>{myInfo.contact.email}</Body2>
    </>
  );
};

export default Address;
