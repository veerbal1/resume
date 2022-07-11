/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Body2 from '../../../components/Typography/Body2';
import myInfo from '../../../info/my-info';

// Icons
import mailIcon from '../../../public/images/icons/mail.svg';
import navigationIcon from '../../../public/images/icons/navigation.svg';
import callIcon from '../../../public/images/icons/call.svg';

const Address = () => {
  return (
    <>
      <Item icon={mailIcon.src} text={myInfo.contact.email}/>
      <Item icon={navigationIcon.src} text={myInfo.contact.address[myInfo.language]} />
      <Item icon={callIcon.src} text={myInfo.contact.phone} />
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
