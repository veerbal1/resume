import React from 'react';
import Body1 from '../../components/Typography/Body1';
import Body2 from '../../components/Typography/Body2';
import Body3 from '../../components/Typography/Body3';
import Name from '../../components/Typography/Name';
import Paragraph from '../../components/Typography/Paragraph';
import styles from '../../styles/UIElements/ContentBody.module.scss';

const ContentBody = () => {
  return (
    <div className={styles.contentBody}>
      <Name>Veerbal Singh</Name>
      <Paragraph>I am paragraph</Paragraph>
      <Body1>I am body1</Body1>
      <Body2>I am Body2</Body2>
      <Body3>I am body3</Body3>
    </div>
  );
};

export default ContentBody;
