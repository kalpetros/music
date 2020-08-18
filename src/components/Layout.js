import styles from '../styles/components/layout.css';

import React from 'react';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
