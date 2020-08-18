import styles from '../styles/components/main.css';

import React from 'react';
import PropTypes from 'prop-types';

export const Main = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
