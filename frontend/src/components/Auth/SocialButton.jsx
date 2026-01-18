import React from "react";
import styles from "./SocialButton.module.css";
import Button from "../ui/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
const SocialButton = ({ provider = "google", children }) => {
  return (
    <Button
      className={styles.btn}
      variant={provider === "google" ? "secondary" : "ghost"}
      size="md"
    >
      <span className={styles.icon} aria-hidden>
        {provider === "google" ? <FcGoogle /> : <FaApple />}
      </span>
      <span>{children}</span>
    </Button>
  );
};

export default SocialButton;
