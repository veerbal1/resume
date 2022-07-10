import React from 'react';

import Space from '../../components/Space';
import Intro from './Intro';
import Address from './Address';
import Profile from './Profile';

import styles from '../../styles/UIElements/ContentBody.module.scss';
import Education from './Education';
import Employment from './Employment';

const ContentBody = () => {
  return (
    <div className={styles.contentBody}>
      <Intro />
      <Space />
      <Address />
      <Space />
      <Space />
      <Profile />
      <Space />
      <Space />
      <Education />
      <Space />
      <Space />
      <Employment />
    </div>
  );
};

export default ContentBody;
