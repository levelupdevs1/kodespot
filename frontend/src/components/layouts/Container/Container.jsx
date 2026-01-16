
import React from "react";
import styles from "./Container.module.css";

const Container = ({ children, size = "md", className = "" }) => {
  const cls = [styles.container, styles[size], className].filter(Boolean).join(" ");
  return <div className={cls}>{children}</div>;
};

export default Container;
