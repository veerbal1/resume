import React from 'react';
import styles from '../../../styles/typography/Body2.module.scss';

const Body2 = ({ children }) => {
  return <h6 className={styles.body2}>{children}</h6>;
};

export default Body2;
