import React from "react";
import styles from "./Checkbox.module.css";

const Checkbox = ({ label, ...props }) => {
  return (
    <label className={styles.wrap}>
      <input type="checkbox" className={styles.input} {...props} />
      <span
        className={styles.label}
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </label>
  );
};

export default Checkbox;
