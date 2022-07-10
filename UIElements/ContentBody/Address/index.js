/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Body2 from '../../../components/Typography/Body2';
import myInfo from '../../../info/my-info';

const Address = () => {
  return (
    <>
      <Item icon="https://cdn-icons-png.flaticon.com/512/317/317031.png" text={myInfo.contact.email}/>
      <Item icon="https://cdn-icons-png.flaticon.com/512/317/317031.png" text={myInfo.contact.address[myInfo.language]} />
      <Item icon="https://cdn-icons-png.flaticon.com/512/317/317031.png" text={myInfo.contact.phone} />
    </>
  );
};

const Item = ({ icon, text }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{
        width: '18px',
        height: '18px',
        marginRight: '10px',
      }}>
        <img src={icon} alt="icon" />
      </div>
      <Body2>{text}</Body2>
    </div>
  );
};

export default Address;
