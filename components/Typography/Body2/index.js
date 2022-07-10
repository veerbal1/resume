import React from 'react';
import styles from '../../../styles/typography/Body2.module.scss';

const Body2 = ({ children, highlight }) => {
  return <h6 className={`${styles.body2} ${highlight ? styles.highlight:''}`}>{children}</h6>;
};

export default Body2;
