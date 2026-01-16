import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  to,
  onClick,
  className = "",
  fullWidth = false,
}) => {
  const cls = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  if (to)
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );

  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
