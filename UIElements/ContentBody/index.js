import React from 'react';

import Space from '../../components/Space';
import Intro from './Intro';
import Address from './Address';

import styles from '../../styles/UIElements/ContentBody.module.scss';

const ContentBody = () => {
  return (
    <div className={styles.contentBody}>
      <Intro />
      <Space />
      <Address />
    </div>
  );
};

export default ContentBody;
