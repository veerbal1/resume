import React from 'react';
import Body2 from '../../../components/Typography/Body2';
import myInfo from '../../../info/my-info';

const Profile = () => {
  return <Body2>{myInfo.profile.summary[myInfo.language]}</Body2>;
};

export default Profile;
