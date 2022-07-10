import React from 'react';

import Space from '../../components/Space';
import Intro from './Intro';
import Address from './Address';
import Profile from './Profile';

import styles from '../../styles/UIElements/ContentBody.module.scss';

const ContentBody = () => {
  return (
    <div className={styles.contentBody}>
      <Intro />
      <Space />
      <Address />
      <Space />
      <Space />
      <Profile />
    </div>
  );
};

export default ContentBody;
