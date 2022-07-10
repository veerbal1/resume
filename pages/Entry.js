import React from 'react';
import Body1 from '../components/Typography/Body1';
import Body2 from '../components/Typography/Body2';
import Body3 from '../components/Typography/Body3';
import Name from '../components/Typography/Name';
import Paragraph from '../components/Typography/Paragraph';
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
