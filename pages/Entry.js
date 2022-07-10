import React from 'react';
import Sidebar from '../UIElements/Sidebar';
import ContentBody from '../UIElements/ContentBody';
import styles from '../styles/Entry.module.scss';

const Entry = () => {
  return (
    <div className={styles.entry}>
      <Sidebar />
      <ContentBody />
    </div>
  );
};

export default Entry;
