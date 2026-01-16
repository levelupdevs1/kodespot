import React from "react";
import styles from "./SocialButton.module.css";
import Button from "../ui/Button/Button";

const SocialButton = ({ provider = "google", children }) => {
  return (
    <Button
      className={styles.btn}
      variant={provider === "google" ? "ghost" : "ghost"}
      size="md"
    >
      <span className={styles.icon} aria-hidden>
        {provider === "google" ? "G" : ""}
      </span>
      <span>{children}</span>
    </Button>
  );
};

export default SocialButton;
