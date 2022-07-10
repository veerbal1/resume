import React from 'react';
import styles from '../../../styles/typography/Body1.module.scss';

const Body1 = ({ children }) => {
  return <h6 className={`${styles.body1}`}>{children}</h6>;
};

export default Body1;
