import styles from "../styles/components/subheader.css";

import React from "react";

export const SubHeader = (props) => {
  return (
    <header className={styles.subheader}>
      <div className={styles.content}>
        <h1>{props.title}</h1>
      </div>
    </header>
  );
};
