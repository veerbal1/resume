import React from 'react';
import styles from '../../styles/UIElements/ContentBody.module.scss';
import Intro from './Intro';

const ContentBody = () => {
  return (
    <div className={styles.contentBody}>
      <Intro />
    </div>
  );
};

export default ContentBody;
