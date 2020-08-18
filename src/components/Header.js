import styles from '../styles/components/header.css';

import React from 'react';

export const Header = () => {
  let title = 'Albums';

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>{title}</h1>
      </div>
    </header>
  );
};
