import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type = "text", placeholder = "", ...props }) => {
  return (
    <label className={styles.field}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </label>
  );
};

export default Input;
