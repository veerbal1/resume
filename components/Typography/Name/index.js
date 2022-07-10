import React from 'react';
import styles from '../../../styles/typography/Name.module.scss';

const Name = ({ children }) => {
  return <h1 className={styles.name}>{children}</h1>;
};

export default Name;
