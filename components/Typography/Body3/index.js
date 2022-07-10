import React from 'react';
import styles from '../../../styles/typography/Body3.module.scss';

const Body3 = ({ children }) => {
  return <h6 className={`${styles.body3}`}>{children}</h6>;
};

export default Body3;
